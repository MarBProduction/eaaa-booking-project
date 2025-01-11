import { formatFloorNumber, formatRoomNumber, isoTimeFormatter } from "../../assets/helperFunctions";
import { booking } from "../../assets/types";
import "./myBookingsBooking.css";

interface myBookingsBookingProps {
  booking: booking;
  setActiveBooking: React.Dispatch<React.SetStateAction<booking | undefined>>;
  setShowPopupConfirmDelete: React.Dispatch<React.SetStateAction<boolean>>;
}

function MyBookingsBooking({
  booking,
  setActiveBooking,
  setShowPopupConfirmDelete,
}: myBookingsBookingProps) {
  return (
    <>
      <article className="booking">
        <div className="booking-details">
          <section className="date-time-location">
            <input
              type="text"
              className="booking_date"
              name="booking_date"
              value={booking.bookingDate}
              readOnly
            />
            <div className="my-bookings-time">
              <input
                type="text"
                name="start_time"
                value={isoTimeFormatter(booking.startTime)}
                readOnly
              />
              <p>-</p>
              <input
                type="text"
                name="end_time"
                value={isoTimeFormatter(booking.endTime)}
                readOnly
              />
            </div>
            <div className="my-bookings-room">
              <input
                type="text"
                className="my-bookings-room-var"
                name="room_var"
                value={formatFloorNumber(booking.floor)}
                readOnly
              />
              <p>.</p>
              <input
                type="text"
                className="my-bookings-room-number"
                name="room_number"
                value={formatRoomNumber(booking.roomNumber)}
                readOnly
              />
            </div>
          </section>
          <section className="description-delete">
            <p>{booking.bookingDescription}</p>
            <button
              className="delete-button"
              value="Delete"
              onClick={() => {
                setActiveBooking(booking);
                setShowPopupConfirmDelete(true);
              }}
            >
              Delete
            </button>
          </section>
        </div>
      </article>
      <div className="divider"></div>
    </>
  );
}

export default MyBookingsBooking;
