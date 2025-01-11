import "./timeDatePicker.css";
import TimePicker from "./timePicker";

interface TimeDatePickerProps {
  currentDate: () => string;
  setDate: React.Dispatch<React.SetStateAction<string>>;
  setStartTime: React.Dispatch<React.SetStateAction<string>>;
  setEndTime: React.Dispatch<React.SetStateAction<string>>;
}

function TimeDatePicker({
  currentDate,
  setDate,
  setStartTime,
  setEndTime,
}: TimeDatePickerProps) {
  return (
    <article id="time-date-wrapper">
      <input
        id="date"
        type="date"
        defaultValue={currentDate()}
        onChange={(e) => setDate(e.target.value)}
      />
      <TimePicker
        startTime
        setStartTime={setStartTime}
        setEndTime={setEndTime}
      />
      <TimePicker setStartTime={setStartTime} setEndTime={setEndTime} />
    </article>
  );
}

export default TimeDatePicker;
