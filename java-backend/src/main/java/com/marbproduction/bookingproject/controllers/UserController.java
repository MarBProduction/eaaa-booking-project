package com.marbproduction.bookingproject.controllers;

import com.marbproduction.bookingproject.models.UserBookingDTO;
import com.marbproduction.bookingproject.services.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private BookingService bookingService;

    @GetMapping("/{userId}/bookings")
    public List<UserBookingDTO> getUserBookings(@PathVariable int userId){
        return bookingService.getUserBookings(userId);
    }
}
