package com.marbproduction.bookingproject.repositories;

import com.marbproduction.bookingproject.models.entities.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.Instant;
import java.time.LocalDate;
import java.util.List;
import java.util.Set;

public interface RoomRepository extends JpaRepository<Room, Integer> {
    List<Room> findByIdIn(Set<Integer> roomIds);

    @Query("""
        SELECT b.roomId
        FROM Booking b
        WHERE b.bookingDate = :date
        AND (b.startTime <= :startTime AND b.endTime >= :endTime)
   """)
    Set<Integer> findUnavailable(LocalDate date, Instant startTime, Instant endTime);

    @Query("""
        SELECT b.roomId
        FROM Booking b
        WHERE b.bookingDate = :date
        AND (
            (b.startTime BETWEEN :startTime AND :endTime)
            OR (b.endTime BETWEEN :startTime AND :endTime)
        )
        AND NOT(b.startTime <= :startTime AND b.endTime >= :endTime)
   """)
    Set<Integer> findPartlyAvailable(LocalDate date, Instant startTime, Instant endTime);
}
