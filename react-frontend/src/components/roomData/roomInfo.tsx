import { formatFloorNumber, formatRoomNumber } from "../../assets/helperFunctions";
import { room } from "../../assets/types";

interface roomInfoProps {
  room?: room;
}

function RoomInfo({ room }: roomInfoProps) {
  if (room) {
    return (
      <section className="room-info">
        <div className="room-info-segment">
          <p className="info-sub-title">Room</p>
          <p>{formatFloorNumber(room.floor) + "." + formatRoomNumber(room.roomNumber)}</p>
        </div>
        <div className="room-info-segment">
          <p className="info-sub-title">Facilities</p>
          <p>Number of seats: {room.capacity}</p>
          <p>Number of screens: {room.screens}</p>
          <p>Number of smartboards: {room.smartBoards}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="room-info">
      <div className="room-info-segment">
        <p className="info-sub-title">Room</p>
        <p>(Choose a room)</p>
      </div>
      <div className="room-info-segment">
        <p className="info-sub-title">Facilities</p>
        <p>(Choose a room)</p>
      </div>
    </section>
  );
}

export default RoomInfo;
