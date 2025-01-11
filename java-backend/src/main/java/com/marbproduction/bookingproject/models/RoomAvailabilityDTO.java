package com.marbproduction.bookingproject.models;

import lombok.Getter;

import java.util.Set;

@Getter
public class RoomAvailabilityDTO {
    private Set<Integer> unavailable;
    private Set<Integer> partlyAvailable;

    public RoomAvailabilityDTO(Set<Integer> unavailable, Set<Integer> partlyAvailable){
        this.unavailable = unavailable;
        this.partlyAvailable = partlyAvailable;
    }
}
