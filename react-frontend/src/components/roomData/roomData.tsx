import "./roomData.css";
import RoomBookingsInfo from "./roomBookingsInfo";
import RoomInfo from "./roomInfo";
import { room } from "../../assets/types";
import ResponsiveLoadingScreen from "../loadingScreen/responsiveLoadingScreen";

interface roomDataProps {
  activeRoom?: room;
  buttonActivated: boolean;
  setShowPopupConfirm: React.Dispatch<React.SetStateAction<boolean>>;
  roomDataLoader: boolean;
}

function RoomData({
  activeRoom,
  buttonActivated,
  setShowPopupConfirm,
  roomDataLoader
}: roomDataProps) {
  return (
    <article id="room-info-wrapper">
      <ResponsiveLoadingScreen showLoader={roomDataLoader} />
      <RoomInfo room={activeRoom} />
      <RoomBookingsInfo room={activeRoom} />
      <button
        onClick={() => {
          if (buttonActivated) setShowPopupConfirm(true);
        }}
        id="book-selected-room"
        className={buttonActivated ? "button-activated" : "button-deactivated"}
      >
        Book
      </button>
    </article>
  );
}

export default RoomData;
