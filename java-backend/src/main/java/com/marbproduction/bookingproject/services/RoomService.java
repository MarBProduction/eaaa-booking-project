package com.marbproduction.bookingproject.services;

import com.marbproduction.bookingproject.models.*;
import com.marbproduction.bookingproject.models.entities.Room;
import com.marbproduction.bookingproject.repositories.BookingRepository;
import com.marbproduction.bookingproject.repositories.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.time.Instant;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class RoomService {

    @Autowired
    private RoomRepository roomRepository;
    @Autowired
    private BookingRepository bookingRepository;

    public RoomDTO getRoom(int roomId){
        Optional<Room> optRoom = roomRepository.findById(roomId);
        Room room = optRoom.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, String.format("Could not find room with id: %d", roomId)));
        return new RoomDTO(room);
    }

    public RoomBookingsDTO getRoomBookings(int roomId, LocalDate bookingDate){

        RoomDTO room = getRoom(roomId);

        List<RoomBookingDTO> bookings = bookingRepository.findAllByRoomIdAndBookingDate(roomId, bookingDate)
            .stream()
            .map(RoomBookingDTO::new) //Same as ".map(booking -> new RoomBookingDTO(booking))"
            .toList();

        return new RoomBookingsDTO(room, bookings);
    }

    public RoomAvailabilityDTO getRoomAvailability(LocalDate date, Instant startTime, Instant endTime){
        Set<Integer> unavailable = roomRepository.findUnavailable(date, startTime, endTime);
        Set<Integer> partlyAvailable = roomRepository.findPartlyAvailable(date, startTime, endTime);

        return new RoomAvailabilityDTO(unavailable, partlyAvailable);
    }
}
