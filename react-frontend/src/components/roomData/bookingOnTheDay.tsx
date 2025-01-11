import { roomBooking } from "../../assets/types";
import { isoTimeFormatter } from "../../assets/helperFunctions";

interface bookingOnTheDayProps {
  booking: roomBooking;
}

function BookingOnTheDay({ booking }: bookingOnTheDayProps) {
  return (
    <>
      <article>
        <p className="room-bookings-time">
          {`${isoTimeFormatter(booking.startTime)} - ${isoTimeFormatter(booking.endTime)}`}
        </p>
        <p>{booking.bookingDescription}</p>
      </article>
      <div className="divider"></div>
    </>
  );
}

export default BookingOnTheDay;
