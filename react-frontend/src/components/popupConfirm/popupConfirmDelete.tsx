import "./popupConfirm.css";
import backButtonImage from "../../assets/arrow-left-circle.svg";
import { booking } from "../../assets/types";
import {
  formatFloorNumber,
  formatRoomNumber,
  isoTimeFormatter,
} from "../../assets/helperFunctions";

interface popupConfirmDeleteProps {
  booking?: booking;
  deleteBooking: (bookingId: number) => void;
  showPopupConfirmDelete: boolean;
  setShowPopupConfirmDelete: React.Dispatch<React.SetStateAction<boolean>>;
}

function PopupConfirmDelete({
  booking,
  deleteBooking,
  showPopupConfirmDelete,
  setShowPopupConfirmDelete,
}: popupConfirmDeleteProps) {
  if (!booking) return <></>;

  return (
    <section
      id="popup-confirmation"
      style={showPopupConfirmDelete ? { display: "flex" } : { display: "none" }}
    >
      <div className="centerPopUp">
        <div className="pop-up-header">
          <img
            src={backButtonImage}
            alt="Go back"
            onClick={() => setShowPopupConfirmDelete(false)}
          />
          <p className="pop-up-titel">Delete booking: </p>
        </div>
        <div className="scroll-wrapper">
          <form method="post" className="popup-confirm-form">
            <p className="popup-info-sub-title">Room</p>
            <p className="popup-confirm-time">
              {`${formatFloorNumber(booking.floor)} . 
              ${formatRoomNumber(booking.roomNumber)}`}
            </p>
            <p className="popup-info-sub-title">Date</p>
            <input
              className="date-confirm-input"
              type="date"
              name="booking_date"
              value={booking.bookingDate}
              readOnly
            />
            <p className="popup-info-sub-title">Time</p>
            <p className="popup-confirm-time">
              {isoTimeFormatter(booking.startTime) +
                " - " +
                isoTimeFormatter(booking.endTime)}
            </p>
            <p className="popup-info-sub-title">Booking description</p>
            <p className="confirm-popup-booking-description">
              {booking.bookingDescription}
            </p>
          </form>
          <button
            className="popup-submit-delete popup-submit"
            onClick={() => {
              deleteBooking(booking.id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </section>
  );
}

export default PopupConfirmDelete;
