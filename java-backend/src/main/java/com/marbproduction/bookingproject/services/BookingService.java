package com.marbproduction.bookingproject.services;

import com.marbproduction.bookingproject.models.BookingDTO;
import com.marbproduction.bookingproject.models.PostBookingDTO;
import com.marbproduction.bookingproject.models.RoomDTO;
import com.marbproduction.bookingproject.models.UserBookingDTO;
import com.marbproduction.bookingproject.models.entities.Booking;
import com.marbproduction.bookingproject.repositories.BookingRepository;
import com.marbproduction.bookingproject.repositories.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.time.Duration;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class BookingService {

    private final Duration maxDuration = Duration.ofHours(12);

    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    private RoomRepository roomRepository;

    public List<UserBookingDTO> getUserBookings(int userId) {

        List<BookingDTO> bookings = bookingRepository.findBookingsByUserId(userId).stream().map(BookingDTO::new).toList();

        //"BookingDTO::getRoomId" same as "booking -> booking.getRoomId()"
        Set<Integer> roomIds = bookings.stream().map(BookingDTO::getRoomId).collect(Collectors.toSet());

        List<RoomDTO> rooms = roomRepository.findByIdIn(roomIds).stream().map(RoomDTO::new).toList();


        return bookings.stream()
            .map(booking -> {
                RoomDTO room = rooms.stream()
                    .filter(r -> r.getId() == booking.getRoomId())
                    .findFirst()
                    .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, String.format("Could not find room with id: %d", booking.getRoomId())));
                return new UserBookingDTO(booking, room);
            })
            .toList();
    }

    public BookingDTO createBooking (PostBookingDTO booking){

        if(booking.getBookingDescription().isEmpty()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Booking needs a description");
        }

        if(booking.getStartTime().compareTo(booking.getEndTime()) >= 0){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid time frame");
        }

        if(Duration.between(booking.getStartTime(), booking.getEndTime()).compareTo(maxDuration) > 0){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, String.format("The booking is too long, max duration: %s", maxDuration));
        }

        bookingRepository.findConflictingBooking(booking.getRoomId(), booking.getStartTime(), booking.getEndTime())
            .ifPresent((c) -> {
               throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Booking is conflicting with existing booking");
            });

        Booking bookingEntity = bookingRepository.save(Booking.from(booking));

        return new BookingDTO(bookingEntity);
    }

    public void deleteBookingById(int id){
        if(!bookingRepository.existsById(id)){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, String.format("Could not find booking with id: %d", id));
        }
        bookingRepository.deleteById(id);
    }
}
