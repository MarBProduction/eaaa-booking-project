import "./popupConfirm.css";
import backButtonImage from "../../assets/arrow-left-circle.svg";
import { room } from "../../assets/types";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../../constants";
import {
  formatFloorNumber,
  formatRoomNumber,
  isoTimeFormatter,
} from "../../assets/helperFunctions";

interface popupConfirmProps {
  userId: number;
  date: string;
  startTime: string;
  endTime: string;
  activeRoom: room | undefined;
  showPopupConfirm: boolean;
  setShowPopupConfirm: React.Dispatch<React.SetStateAction<boolean>>;
  setShowLoader: (showLoader: boolean) => void;
}

function PopupConfirm({
  userId,
  date = "",
  startTime = "",
  endTime = "",
  activeRoom,
  showPopupConfirm = false,
  setShowPopupConfirm,
  setShowLoader,
}: popupConfirmProps) {
  const navigate = useNavigate();
  const [bookingError, setBookingError] = useState("");
  const [showBookingError, setShowBookingError] = useState(false);
  const [bookingDescription, setBookingDescription] = useState("");

  useEffect(() => {
    setShowBookingError(false);
  }, [showPopupConfirm]);

  if (!activeRoom) return <></>;

  async function postBooking(activeRoom: room) {
    setShowLoader(true);

    try {
      const res = await fetch(`${BACKEND_URL}/api/bookings?message=true`, {
        method: "POST",
        body: JSON.stringify({
          roomId: activeRoom.id,
          userId: userId,
          startTime: startTime,
          endTime: endTime,
          bookingDate: date,
          bookingDescription: bookingDescription,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        const error = await res.json();
        throw error;
      }

      setShowLoader(false);
      navigate("/my-bookings");
    } catch (error: any) {
      setBookingError(error.message);
      setShowBookingError(true);
      setShowLoader(false);
    }
  }

  const floor = activeRoom ? formatFloorNumber(activeRoom.floor) : "";
  const roomNumber = activeRoom
    ? formatRoomNumber(activeRoom.roomNumber)
    : "00";

  return (
    <section
      id="popup-confirmation"
      style={showPopupConfirm ? { display: "flex" } : { display: "none" }}
    >
      <div className="centerPopUp">
        <div className="pop-up-header">
          <img
            src={backButtonImage}
            alt="Go back"
            onClick={() => setShowPopupConfirm(false)}
          />
          <p className="pop-up-titel">Confirm booking</p>
        </div>
        <div className="scroll-wrapper">
          <p
            className="booking-submit-error-text"
            style={
              showBookingError ? { display: "block" } : { display: "none" }
            }
          >
            {bookingError}
          </p>
          <div className="popup-confirm-form">
            <p className="popup-info-sub-title">Room</p>
            <p className="popup-confirm-time">{floor + "." + roomNumber}</p>
            <p className="popup-info-sub-title">Date</p>
            <input
              className="date-confirm-input"
              type="date"
              name="booking_date"
              value={date}
              readOnly
            />
            <p className="popup-info-sub-title">Time</p>
            <p className="popup-confirm-time">
              {isoTimeFormatter(startTime) + " - " + isoTimeFormatter(endTime)}
            </p>
            <p className="popup-info-sub-title">Booking description</p>
            <input
              type="text"
              name="booking-description"
              className="booking-description-input-post"
              value={bookingDescription}
              onChange={(e) => setBookingDescription(e.target.value)}
              maxLength={50}
            />
          </div>
          <button
            className="popup-submit-post popup-submit"
            onClick={() => {
              postBooking(activeRoom);
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </section>
  );
}

export default PopupConfirm;
