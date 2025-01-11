import { useEffect, useState } from "react";
import "./floorplan.css";
import Floor1 from "./floors/floor1";
import Floor2 from "./floors/floor2";
import FloorG from "./floors/floorG";
import { floorplanRooms as orgFloorplanRooms } from "../../floorplanRooms";
import { floorplanRoom } from "../../assets/types";

interface floorplanProps {
  unavailableRooms: number[] | string[];
  partlyAvailableRooms: number[] | string[];
  activeRoomId?: number;
  setButtonActivated: React.Dispatch<React.SetStateAction<boolean>>;
  selectRoom(activeRoomId: number): (e?: any) => Promise<void>;
}

function Floorplan({
  unavailableRooms,
  partlyAvailableRooms,
  activeRoomId,
  setButtonActivated,
  selectRoom,
}: floorplanProps) {
  const [floor, setFloor] = useState(0);
  const [floorplanRooms, setFloorplanRooms] = useState(orgFloorplanRooms);
  let roomsFloorG: floorplanRoom[] = [];
  let roomsFloor1: floorplanRoom[] = [];
  let roomsFloor2: floorplanRoom[] = [];

  floorplanRooms.forEach((room) => {
    switch (room.floor) {
      case 0:
        roomsFloorG.push(room);
        break;

      case 1:
        roomsFloor1.push(room);
        break;

      case 2:
        roomsFloor2.push(room);
        break;

      default:
        break;
    }
  });

  /* ----- Coloring rooms based on the two lists ----- */
  function updateFloorplan() {
    setFloorplanRooms((computedFloorplanRooms) => {
      computedFloorplanRooms.forEach((room) => {
        if (room.bookable) {
          for (let i = 0; i < unavailableRooms.length; i++) {
            if (room.id === unavailableRooms[i]) {
              room.availability = "fully-booked";
              if (room.id === activeRoomId) {
                setButtonActivated(false);
              }
              return;
            }
          }

          for (let j = 0; j < partlyAvailableRooms.length; j++) {
            if (room.id === partlyAvailableRooms[j]) {
              room.availability = "partly-available";
              if (room.id === activeRoomId) {
                setButtonActivated(false);
              }
              return;
            }
          }

          room.availability = "available";

          if (room.id === activeRoomId) {
            setButtonActivated(true);
          }
        }
      });
      return [...computedFloorplanRooms]
    });
  }

  function updateBookButton() {
    if (activeRoomId) {
      for (let i = 0; i < unavailableRooms.length; i++) {
        if (activeRoomId == unavailableRooms[i]) {
          setButtonActivated(false);
          return;
        }
      }

      for (let i = 0; i < partlyAvailableRooms.length; i++) {
        if (activeRoomId == partlyAvailableRooms[i]) {
          setButtonActivated(false);
          return;
        }
      }

      setButtonActivated(true);
    } else {
      setButtonActivated(false);
    }
  }

  useEffect(() => {
    updateFloorplan();
  }, [unavailableRooms, partlyAvailableRooms]);

  useEffect(() => {
    updateBookButton();
  }, [activeRoomId]);

  useEffect(() => {
    floorplanRooms.forEach((room) => {
      switch (room.floor) {
        case 0:
          roomsFloorG.push(room);
          break;

        case 1:
          roomsFloor1.push(room);
          break;

        case 2:
          roomsFloor2.push(room);
          break;

        default:
          break;
      }
    });
  }, [floorplanRooms]);

  return (
    <article>
      <div id="switch-floor">
        <p
          id="ground-floor-btn"
          className={`floor-btns ${floor === 0 && "active-floor-btns"}`}
          onClick={() => setFloor(0)}
        >
          Ground Floor
        </p>
        <p
          id="first-floor-btn"
          className={`floor-btns ${floor === 1 && "active-floor-btns"}`}
          onClick={() => setFloor(1)}
        >
          First Floor
        </p>
        <p
          id="second-floor-btn"
          className={`floor-btns ${floor === 2 && "active-floor-btns"}`}
          onClick={() => setFloor(2)}
        >
          Second Floor
        </p>
      </div>
      <div id="size-definer">
        <div id="fixed-ratio">
          <div id="grid-wrapper" style={{ left: `${floor * -100}%` }}>
            <FloorG roomsFloorG={roomsFloorG} selectRoom={selectRoom} />
            <Floor1 roomsFloor1={roomsFloor1} selectRoom={selectRoom} />
            <Floor2 roomsFloor2={roomsFloor2} selectRoom={selectRoom} />
          </div>
        </div>
      </div>
    </article>
  );
}

export default Floorplan;
