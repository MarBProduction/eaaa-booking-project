package com.marbproduction.bookingproject.models.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor
public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int id;
    private int roomNumber;
    private int floor;
    private int screens;
    private int capacity;
    private int smartBoards;

    public Room(int roomNumber, int floor, int screens, int capacity, int smartBoards) {
        this.id = 0;
        this.roomNumber = roomNumber;
        this.floor = floor;
        this.screens = screens;
        this.capacity = capacity;
        this.smartBoards = smartBoards;
    }
}
