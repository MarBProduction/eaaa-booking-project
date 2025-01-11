package com.marbproduction.bookingproject.repositories;

import com.marbproduction.bookingproject.models.entities.BookingUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingUserRepository extends JpaRepository<BookingUser, Integer> {
}
