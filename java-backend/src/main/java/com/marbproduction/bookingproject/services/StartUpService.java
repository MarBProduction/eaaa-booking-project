package com.marbproduction.bookingproject.services;

import com.marbproduction.bookingproject.models.entities.Booking;
import com.marbproduction.bookingproject.models.entities.BookingUser;
import com.marbproduction.bookingproject.models.entities.Room;
import com.marbproduction.bookingproject.repositories.BookingRepository;
import com.marbproduction.bookingproject.repositories.BookingUserRepository;
import com.marbproduction.bookingproject.repositories.RoomRepository;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.*;
import java.time.format.DateTimeFormatter;
import java.util.Arrays;

@Service
public class StartUpService {

    @Autowired
    private BookingUserRepository bookingUserRepository;
    @Autowired
    private RoomRepository roomRepository;
    @Autowired
    private BookingRepository bookingRepository;

    private void createUsers() {
        BookingUser[] bookingUsers = {
                new BookingUser("test", "testy", "testSalt"),
                new BookingUser("tast", "tasty", "tastSalt"),
        };

        bookingUserRepository.saveAll(Arrays.asList(bookingUsers));
    }

    private void createRooms() {
        Room[] rooms = {
                /*1*/new Room(30, 0, 0, 36, 1),
                /*2*/new Room(31, 0, 0, 36, 1),
                /*3*/new Room(1, 1, 0, 36, 1),
                /*4*/new Room(12, 1, 0, 36, 1),
                /*5*/new Room(16, 1, 0, 36, 1),
                /*6*/new Room(17, 1, 1, 4, 0),
                /*7*/new Room(18, 1, 1, 4, 0),
                /*8*/new Room(19, 1, 1, 4, 0),
                /*9*/new Room(24, 1, 0, 36, 1),
                /*10*/new Room(27, 1, 0, 36, 1),
                /*11*/new Room(28, 1, 0, 6, 0),
                /*12*/new Room(32, 1, 1, 6, 0),
                /*13*/new Room(38, 1, 0, 36, 1),
                /*14*/new Room(39, 1, 0, 36, 1),
                /*15*/new Room(40, 1, 0, 5, 0),
                /*16*/new Room(42, 1, 0, 36, 1),
                /*17*/new Room(43, 1, 1, 4, 0),
                /*18*/new Room(44, 1, 1, 4, 0),
                /*19*/new Room(1, 2, 0, 36, 1),
                /*20*/new Room(7, 2, 0, 5, 0),
                /*21*/new Room(9, 2, 1, 6, 0),
                /*22*/new Room(11, 2, 0, 36, 1),
                /*23*/new Room(16, 2, 0, 36, 0),
                /*24*/new Room(17, 2, 1, 6, 0),
                /*25*/new Room(18, 2, 0, 6, 0),
                /*26*/new Room(20, 2, 1, 20, 0),
                /*27*/new Room(21, 2, 1, 20, 0),
                /*28*/new Room(22, 2, 0, 36, 0),
                /*29*/new Room(25, 2, 1, 4, 0),
                /*30*/new Room(26, 2, 1, 4, 0),
                /*31*/new Room(31, 2, 1, 4, 0),
                /*32*/new Room(37, 2, 0, 36, 1),
                /*33*/new Room(38, 2, 0, 36, 1),
                /*34*/new Room(41, 2, 0, 36, 1),
        };

        roomRepository.saveAll(Arrays.asList(rooms));
    }

    /**
     * TODO hello
     *
     * @param hour   The hour on a 24 clock (0-23)
     * @param minute The minutes on a clock (0-59)
     * @return Time specified in Copenhagen time for current day
     */
    private Instant cphDateTime(int hour, int minute) {
        ZoneId copenhagen = ZoneId.of("Europe/Copenhagen");
        LocalDate currentDate = LocalDate.now();

        return currentDate.atTime(LocalTime.of(hour, minute)).atZone(copenhagen).toInstant();
    }

    private void createBookings() {
        Booking[] bookings = {
                new Booking(1, 5, cphDateTime(9, 0), cphDateTime(15, 0), "Lecture", LocalDate.now()),
                new Booking(1, 10, cphDateTime(7, 30), cphDateTime(13, 0), "Lecture", LocalDate.now()),
                new Booking(1, 13, cphDateTime(9, 30), cphDateTime(16, 0), "Lecture", LocalDate.now()),
                new Booking(1, 2, cphDateTime(12, 0), cphDateTime(18, 0), "Course", LocalDate.now()),
                new Booking(1, 16, cphDateTime(7, 30), cphDateTime(13, 0), "Lecture", LocalDate.now()),
                new Booking(1, 14, cphDateTime(8, 0), cphDateTime(14, 0), "Lecture", LocalDate.now()),
                new Booking(1, 6, cphDateTime(12, 0), cphDateTime(20, 0), "Group work", LocalDate.now()),
                new Booking(1, 8, cphDateTime(10, 0), cphDateTime(12, 0), "Group work", LocalDate.now()),
                new Booking(1, 17, cphDateTime(4, 0), cphDateTime(20, 0), "Group work", LocalDate.now()),
                new Booking(1, 9, cphDateTime(8, 30), cphDateTime(10, 0), "Lecture", LocalDate.now()),
                new Booking(1, 9, cphDateTime(10, 15), cphDateTime(13, 0), "Lecture", LocalDate.now()),
                new Booking(1, 33, cphDateTime(10, 0), cphDateTime(16, 0), "Course", LocalDate.now()),
                new Booking(1, 33, cphDateTime(17, 0), cphDateTime(20, 0), "Course", LocalDate.now()),
                new Booking(1, 34, cphDateTime(8, 0), cphDateTime(14, 0), "Course", LocalDate.now()),
                new Booking(1, 29, cphDateTime(10, 45), cphDateTime(12, 15), "Group work", LocalDate.now()),
                new Booking(1, 20, cphDateTime(6, 0), cphDateTime(20, 30), "Group work", LocalDate.now()),
                new Booking(1, 26, cphDateTime(14, 0), cphDateTime(16, 0), "Meeting", LocalDate.now()),
                new Booking(1, 23, cphDateTime(12, 0), cphDateTime(18, 0), "Course", LocalDate.now()),
                new Booking(1, 29, cphDateTime(14, 0), cphDateTime(16, 30), "Group work", LocalDate.now()),
                new Booking(2, 28, cphDateTime(10, 0), cphDateTime(16, 0), "Course", LocalDate.now()),
                new Booking(2, 31, cphDateTime(6, 30), cphDateTime(14, 15), "Group work", LocalDate.now()),
                new Booking(2, 24, cphDateTime(13, 15), cphDateTime(15, 15), "Meeting", LocalDate.now()),
        };

        bookingRepository.saveAll(Arrays.asList(bookings));
    }

    @PostConstruct
    public void startUp() {
        createUsers();
        createRooms();
        createBookings();
    }
}
