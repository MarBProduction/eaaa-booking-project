package com.marbproduction.bookingproject.models;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
public class PostHelloDTO {
    private String message;

    public String getMessage() {
        return message;
    }
}
