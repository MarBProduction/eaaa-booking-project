package com.marbproduction.bookingproject.models;

import lombok.Getter;

import java.util.List;

@Getter
public class RoomBookingsDTO {
    private int id;
    private int roomNumber;
    private int floor;
    private int screens;
    private int capacity;
    private int smartBoards;
    private List<RoomBookingDTO> bookings;

    public RoomBookingsDTO(RoomDTO room, List<RoomBookingDTO> bookings) {
        this.id = room.getId();
        this.roomNumber = room.getRoomNumber();
        this.floor = room.getFloor();
        this.screens = room.getScreens();
        this.capacity = room.getCapacity();
        this.smartBoards = room.getSmartBoards();
        this.bookings = bookings;
    }
}
