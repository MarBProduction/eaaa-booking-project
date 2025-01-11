package com.marbproduction.bookingproject.controllers;

import com.marbproduction.bookingproject.models.RoomAvailabilityDTO;
import com.marbproduction.bookingproject.models.RoomBookingsDTO;
import com.marbproduction.bookingproject.models.RoomDTO;
import com.marbproduction.bookingproject.services.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.Instant;
import java.time.LocalDate;

@RestController
@RequestMapping("/api/rooms")
public class RoomController {

    @Autowired
    private RoomService roomService;

    @GetMapping("/{roomId}")
    public RoomDTO getRoom(@PathVariable int roomId) {
        return roomService.getRoom(roomId);
    }

    @GetMapping("/{roomId}/bookings/{bookingDate}")
    public RoomBookingsDTO getRoomBookings(@PathVariable int roomId, @PathVariable LocalDate bookingDate) {
        return roomService.getRoomBookings(roomId, bookingDate);
    }

    @GetMapping("/check-availability")
    public RoomAvailabilityDTO getRoomAvailability(@RequestParam LocalDate date, Instant startTime, Instant endTime) {
        return roomService.getRoomAvailability(date, startTime, endTime);
    }
}
