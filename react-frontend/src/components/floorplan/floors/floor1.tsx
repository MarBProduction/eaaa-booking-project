import { floorplanRoom } from "../../../assets/types";

interface floor1Props {
  roomsFloor1: floorplanRoom[];
  selectRoom(activeRoomId: number): (e?: any) => Promise<void>;
}

function Floor1({ roomsFloor1, selectRoom }: floor1Props) {
  return (
    <div id="floor-1-grid" className="floor">
      {roomsFloor1.map((room) =>
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

export default Floor1;
