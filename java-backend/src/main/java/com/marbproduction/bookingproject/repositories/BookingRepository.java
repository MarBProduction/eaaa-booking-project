package com.marbproduction.bookingproject.repositories;

import com.marbproduction.bookingproject.models.BookingDTO;
import com.marbproduction.bookingproject.models.UserBookingDTO;
import com.marbproduction.bookingproject.models.entities.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.Instant;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public interface BookingRepository extends JpaRepository<Booking, Integer> {
    List<Booking> findAllByRoomIdAndBookingDate(int roomId, LocalDate bookingDate);
    List<Booking> findBookingsByUserId(int userId);

    @Query("""
        SELECT b
        FROM Booking b
        WHERE b.room.id = :roomId
        AND (
            (b.startTime <= :startTime AND b.endTime >= :endTime)
            OR (b.startTime BETWEEN :startTime AND :endTime)
            OR (b.endTime BETWEEN :startTime AND :endTime)
        )
    """)
    Optional<Booking> findConflictingBooking(int roomId, Instant startTime, Instant endTime);
}
