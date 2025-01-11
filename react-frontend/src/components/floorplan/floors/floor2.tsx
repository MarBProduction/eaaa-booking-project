import { floorplanRoom } from "../../../assets/types";

interface floor2Props {
  roomsFloor2: floorplanRoom[];
  selectRoom(activeRoomId: number): (e?: any) => Promise<void>;
}

function Floor2({ roomsFloor2, selectRoom }: floor2Props) {
  return (
    <div id="floor-2-grid" className="floor">
      {roomsFloor2.map((room) =>
        room.id && room.bookable ? (
          <div
            id={room.id.toString()}
            className={`room ${room.short} ${room.availability}`}
            style={{
              gridArea: `${room.gridCord.rowStart} /
                ${room.gridCord.columnStart} /
                ${room.gridCord.rowEnd} /
                ${room.gridCord.columnEnd}`,
            }}
            key={room.id}
            onClick={selectRoom(room.id)}
          >
            {room.desc}
          </div>
        ) : (
          <div
            id={room.short}
            className={`${room.availability}`}
            key={room.short}
            style={{
              gridArea: `${room.gridCord.rowStart} /
              ${room.gridCord.columnStart} /
              ${room.gridCord.rowEnd} /
              ${room.gridCord.columnEnd}`,
            }}
          >
            {room.desc}
          </div>
        )
      )}
    </div>
  );
}

export default Floor2;
