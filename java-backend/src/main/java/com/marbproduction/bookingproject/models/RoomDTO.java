package com.marbproduction.bookingproject.models;

import com.marbproduction.bookingproject.models.entities.Room;
import lombok.Getter;

@Getter
public class RoomDTO {
    private int id;
    private int roomNumber;
    private int floor;
    private int screens;
    private int capacity;
    private int smartBoards;

    public RoomDTO(Room room) {
        this.id = room.getId();
        this.roomNumber = room.getRoomNumber();
        this.floor = room.getFloor();
        this.screens = room.getScreens();
        this.capacity = room.getCapacity();
        this.smartBoards = room.getSmartBoards();
    }
}
