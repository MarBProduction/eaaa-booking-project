package com.marbproduction.bookingproject.repositories;


import com.marbproduction.bookingproject.models.entities.HelloEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HelloRepository extends JpaRepository<HelloEntity, Long> {
}
