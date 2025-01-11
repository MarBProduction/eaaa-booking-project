import "./booking.css";
import Floorplan from "../../components/floorplan/floorplan";
import TimeDatePicker from "../../components/timeDatePicker/timeDatePicker";
import { useEffect, useState } from "react";
import RoomData from "../../components/roomData/roomData";
import PopupConfirm from "../../components/popupConfirm/popupConfirm";
import { room } from "../../assets/types";
import { BACKEND_URL } from "../../constants";
import moment from "moment-timezone";
import { observer } from "mobx-react";
import { useStores } from "../../hooks/useStores";
import { currentDate } from "../../assets/helperFunctions";

const Booking = observer(() => {
  const { userStore, uiStore } = useStores();
  const { userId } = userStore;
  const [date, setDate] = useState<string>(currentDate());
  const [startTime, setStartTime] = useState<string>("08:00");
  const [endTime, setEndTime] = useState<string>("14:00");
  const [activeRoom, setActiveRoom] = useState<room | undefined>();
  const [buttonActivated, setButtonActivated] = useState<boolean>(false);
  const [showPopupConfirm, setShowPopupConfirm] = useState<boolean>(false);
  const [roomDataLoader, setRoomDataLoader] = useState<boolean>(false);

  const [unavailableRooms, setUnavailableRooms] = useState<number[] | string[]>(
    []
  );
  const [partlyAvailableRooms, setPartlyAvailableRooms] = useState<
    number[] | string[]
  >([]);

  function timeToIsoString(date: string, time: string) {
    const dateTime = `${date}T${time}`;
    return moment(dateTime).toISOString();
  }

  function selectRoom(activeRoomId: number) {
    return async (e: any = {}) => {
      setRoomDataLoader(true);
      const id = e.target ? e.target.id : activeRoomId;

      fetch(`${BACKEND_URL}/api/rooms/${id}/bookings/${date}`, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => {
          setActiveRoom(data);
          setRoomDataLoader(false);
        });
    };
  }

  /* ----- Creating unavailable and partly unavailable lists ----- */
  async function checkAvailability() {
    uiStore.setShowLoader(true);

    const startIsoString = timeToIsoString(date, startTime);
    const endIsoString = timeToIsoString(date, endTime);

    fetch(
      `${BACKEND_URL}/api/rooms/check-availability?date=${date}&startTime=${startIsoString}&endTime=${endIsoString}`,
      { method: "GET" }
    )
      .then((res) => res.json())
      .then((data) => {
        setUnavailableRooms(data.unavailable);
        setPartlyAvailableRooms(data.partlyAvailable);
        uiStore.setShowLoader(false);
      });
  }

  useEffect(() => {
    checkAvailability();
  }, [date, startTime, endTime]);

  useEffect(() => {
    if (activeRoom) selectRoom(activeRoom.id)();
  }, [date]);

  return (
    <>
      <PopupConfirm
        userId={userId}
        date={date}
        startTime={timeToIsoString(date, startTime)}
        endTime={timeToIsoString(date, endTime)}
        activeRoom={activeRoom}
        showPopupConfirm={showPopupConfirm}
        setShowPopupConfirm={setShowPopupConfirm}
        setShowLoader={uiStore.setShowLoader}
      />
      <article id="booking-wrapper">
        <section id="time-date-map-wrapper">
          <TimeDatePicker
            currentDate={currentDate}
            setDate={setDate}
            setStartTime={setStartTime}
            setEndTime={setEndTime}
          />
          <Floorplan
            unavailableRooms={unavailableRooms}
            partlyAvailableRooms={partlyAvailableRooms}
            activeRoomId={activeRoom?.id}
            setButtonActivated={setButtonActivated}
            selectRoom={selectRoom}
          />
        </section>
        <RoomData
          activeRoom={activeRoom}
          buttonActivated={buttonActivated}
          setShowPopupConfirm={setShowPopupConfirm}
          roomDataLoader={roomDataLoader}
        />
      </article>
    </>
  );
});

export default Booking;
