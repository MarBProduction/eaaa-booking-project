package com.marbproduction.bookingproject.models.entities;


import com.marbproduction.bookingproject.models.PostBookingDTO;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.Instant;
import java.time.LocalDate;

@Entity
@Getter
@NoArgsConstructor
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int id;
    private int userId;
    private int roomId;
    private Instant startTime;
    private Instant endTime;
    private LocalDate bookingDate;
    private String bookingDescription;

    @ManyToOne @JoinColumn(name = "userId", insertable = false, updatable = false)
    private BookingUser user;
    @ManyToOne @JoinColumn(name = "roomId", insertable = false, updatable = false)
    private Room room;

    public Booking(int userId, int roomId, Instant startTime, Instant endTime, String bookingDescription, LocalDate bookingDate) {
        this.userId = userId;
        this.roomId = roomId;
        this.startTime = startTime;
        this.endTime = endTime;
        this.bookingDescription = bookingDescription;
        this.bookingDate = bookingDate;
    }

    public static Booking from(PostBookingDTO postBookingDTO){
        return new Booking(
            postBookingDTO.getUserId(),
            postBookingDTO.getRoomId(),
            postBookingDTO.getStartTime(),
            postBookingDTO.getEndTime(),
            postBookingDTO.getBookingDescription(),
            postBookingDTO.getBookingDate()
        );
    }
}
