package com.marbproduction.bookingproject.models;

import com.marbproduction.bookingproject.models.entities.Booking;
import lombok.Getter;

import java.time.Instant;
import java.time.LocalDate;

@Getter
public class BookingDTO {
    private int id;
    private int userId;
    private int roomId;
    private Instant startTime;
    private Instant endTime;
    private LocalDate bookingDate;
    private String bookingDescription;

    public BookingDTO(Booking booking) {
        this.id = booking.getId();
        this.userId = booking.getUserId();
        this.roomId = booking.getRoomId();
        this.startTime = booking.getStartTime();
        this.endTime = booking.getEndTime();
        this.bookingDate = booking.getBookingDate();
        this.bookingDescription = booking.getBookingDescription();
    }
}
