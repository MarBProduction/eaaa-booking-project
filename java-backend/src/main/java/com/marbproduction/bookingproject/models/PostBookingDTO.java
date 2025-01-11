package com.marbproduction.bookingproject.models;

import lombok.Getter;

import java.time.Instant;
import java.time.LocalDate;

@Getter
public class PostBookingDTO {
    private int roomId;
    private int userId;
    private Instant startTime;
    private Instant endTime;
    private LocalDate bookingDate;
    private String bookingDescription;
}
