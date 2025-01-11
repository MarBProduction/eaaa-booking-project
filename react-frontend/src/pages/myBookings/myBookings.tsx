import MyBookingsBooking from "../../components/myBookingsBooking/myBookingsBooking";
import "./myBookings.css";
import { booking } from "../../assets/types";
import { useEffect, useState } from "react";
import PopupConfirmDelete from "../../components/popupConfirm/popupConfirmDelete";
import { BACKEND_URL } from "../../constants";
import { observer } from "mobx-react";
import { useStores } from "../../hooks/useStores";
import { toast } from "react-toastify";

const MyBookings = observer(() => {
  const { userStore, uiStore } = useStores();
  const { userId } = userStore;
  const [usersBookings, setUsersBookings] = useState<booking[]>([]);
  const [activeBooking, setActiveBooking] = useState<booking>();
  const [showPopupConfirmDelete, setShowPopupConfirmDelete] = useState(false);

  async function deleteBooking(bookingId: number) {
    uiStore.setShowLoader(true);
    fetch(`${BACKEND_URL}/api/bookings/${bookingId}`, { method: "DELETE" })
      .then((res) => {
        if (!res.ok) {
          toast.error(
            `something went wrong: ${res.statusText} (Status: ${res.status})`
          );
          return Promise.reject(res);
        }
        return res.text();
      })
      .then(() => {
        setShowPopupConfirmDelete(false);
        getUsersBookings();
        return null;
      })
      .catch((error) => {
        if (error instanceof Response) {
          console.error("HTTP error:", error);
        } else {
          console.error("Network error:", error);
          toast.error("A network error occurred! Please try again.");
        }
        uiStore.setShowLoader(false);
      });
  }

  async function getUsersBookings() {
    uiStore.setShowLoader(true);
    fetch(`${BACKEND_URL}/api/users/${userId}/bookings`)
      .then((res) => res.json())
      .then((data) => {
        setUsersBookings(data);
        uiStore.setShowLoader(false);
      });
  }

  useEffect(() => {
    getUsersBookings();
  }, []);

  return (
    <>
      <PopupConfirmDelete
        booking={activeBooking}
        deleteBooking={deleteBooking}
        showPopupConfirmDelete={showPopupConfirmDelete}
        setShowPopupConfirmDelete={setShowPopupConfirmDelete}
      />
      <article id="my-bookings-wrapper">
        <section id="booking-headers">
          <p>Date</p>
          <p>Time</p>
          <p>Room</p>
        </section>
        <div id="header-bookings-divider"></div>
        <section id="my-bookings">
          {usersBookings.map((booking) => (
            <MyBookingsBooking
              booking={booking}
              setActiveBooking={setActiveBooking}
              setShowPopupConfirmDelete={setShowPopupConfirmDelete}
              key={booking.id}
            />
          ))}
        </section>
      </article>
    </>
  );
});

export default MyBookings;
