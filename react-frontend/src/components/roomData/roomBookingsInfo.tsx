import BookingOnTheDay from "./bookingOnTheDay";
import { room } from "../../assets/types";

interface roomBookingsInfoProps {
  room?: room;
}

function RoomBookingsInfo({ room }: roomBookingsInfoProps) {
  if (room) {
    if (room.bookings.length > 0) {
      return (
        <section id="room-bookings-info">
          <p className="info-sub-title">Reservations on the day</p>
          {room.bookings.map((booking) => (
            <BookingOnTheDay booking={booking} key={booking.id} />
          ))}
        </section>
      );
    } else {
      return (
        <section id="room-bookings-info" className="room-info-segment">
          <p className="info-sub-title">Reservations on the day</p>
          <div id="bookings-on-the-day">
            <p id="room-available-text">
              The room is available during the selected time
            </p>
          </div>
        </section>
      );
    }
  }

  return (
    <section id="room-bookings-info" className="room-info-segment">
      <p className="info-sub-title">Reservations on the day</p>
      <div id="bookings-on-the-day">
        <p>(Choose a room)</p>
      </div>
    </section>
  );
}

export default RoomBookingsInfo;
