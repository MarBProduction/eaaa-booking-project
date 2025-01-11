package com.marbproduction.bookingproject.models;

import lombok.Getter;

import java.time.Instant;
import java.time.LocalDate;

@Getter
public class UserBookingDTO {
    private int floor;
    private int roomNumber;
    private int id;
    private Instant startTime;
    private Instant endTime;
    private LocalDate bookingDate;
    private String bookingDescription;

    public UserBookingDTO(BookingDTO booking, RoomDTO room){
        this.floor = room.getFloor();
        this.roomNumber = room.getRoomNumber();
        this.id = booking.getId();
        this.startTime = booking.getStartTime();
        this.endTime = booking.getEndTime();
        this.bookingDate = booking.getBookingDate();
        this.bookingDescription = booking.getBookingDescription();
    }
}