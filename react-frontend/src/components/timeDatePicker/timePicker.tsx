import { useEffect, useState } from "react";
import "./timePicker.css";

interface TimePickerProps {
  startTime?: boolean;
  setStartTime: React.Dispatch<React.SetStateAction<string>>;
  setEndTime: React.Dispatch<React.SetStateAction<string>>;
}

function TimePicker({
  startTime = false,
  setStartTime,
  setEndTime,
}: TimePickerProps) {
  const [startHour, setStartHour] = useState("08");
  const [startMinute, setStartMinute] = useState("00");
  const [endHour, setEndHour] = useState("14");
  const [endMinute, setEndMinute] = useState("00");

  function timeChange() {
    if (startTime) {
      setStartTime(`${startHour}:${startMinute}`);
    } else {
      setEndTime(`${endHour}:${endMinute}`);
    }
  }

  useEffect(() => {
    timeChange();
  }, [startHour, startMinute, endHour, endMinute]);

  return (
    <div className="time-picker-flex">
      <p className="time-label">{startTime ? "From:" : "To:"}</p>
      <div className="time-select-wrapper">
        <select
          className="time-picker"
          id={startTime ? "start_hour" : "end_hour"}
          defaultValue={startTime ? "08" : "14"}
          onChange={
            startTime
              ? (e) => setStartHour(e.target.value)
              : (e) => setEndHour(e.target.value)
          }
        >
          <option value="01">01</option>
          <option value="02">02</option>
          <option value="03">03</option>
          <option value="04">04</option>
          <option value="05">05</option>
          <option value="06">06</option>
          <option value="07">07</option>
          <option value="08">08</option>
          <option value="09">09</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
        </select>
        <p>:</p>
        <select
          className="time-picker"
          id={startTime ? "start_minute" : "end_minute"}
          onChange={
            startTime
              ? (e) => setStartMinute(e.target.value)
              : (e) => setEndMinute(e.target.value)
          }
        >
          <option value="00">00</option>
          <option value="15">15</option>
          <option value="30">30</option>
          <option value="45">45</option>
        </select>
      </div>
    </div>
  );
}

export default TimePicker;
