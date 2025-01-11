package com.marbproduction.bookingproject.models.entities;

import com.marbproduction.bookingproject.models.PostHelloDTO;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
public class HelloEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long id;
    private String message;

    public HelloEntity(PostHelloDTO postHelloDTO){
        this.message = postHelloDTO.getMessage();
    }

    public long getId() {
        return id;
    }

    public String getMessage() {
        return message;
    }
}
