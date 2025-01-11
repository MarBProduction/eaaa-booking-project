package com.marbproduction.bookingproject.models;

import com.marbproduction.bookingproject.models.entities.Booking;
import lombok.Getter;

import java.time.Instant;
import java.time.LocalDate;

@Getter
public class RoomBookingDTO {
    private int id;
    private Instant startTime;
    private Instant endTime;
    private String bookingDescription;

    public RoomBookingDTO(Booking booking) {
        this.id = booking.getId();
        this.startTime = booking.getStartTime();
        this.endTime = booking.getEndTime();
        this.bookingDescription = booking.getBookingDescription();
    }
}
