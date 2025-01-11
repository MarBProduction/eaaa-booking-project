package com.marbproduction.bookingproject.controllers;

import com.marbproduction.bookingproject.models.BookingDTO;
import com.marbproduction.bookingproject.models.PostBookingDTO;
import com.marbproduction.bookingproject.models.entities.Booking;
import com.marbproduction.bookingproject.services.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/bookings")
public class BookingController {

    @Autowired
    private BookingService bookingService;

    @PostMapping
    public ResponseEntity<BookingDTO> postBooking(@RequestBody PostBookingDTO booking){
        BookingDTO savedBooking = bookingService.createBooking(booking);
        return new ResponseEntity<>(savedBooking, HttpStatus.CREATED);
    }

    @DeleteMapping("/{bookingId}")
    public void deleteBooking(@PathVariable int bookingId){
        bookingService.deleteBookingById(bookingId);
    }


}
