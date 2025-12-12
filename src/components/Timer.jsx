import React from "react";
import { BsStopwatch } from "react-icons/bs";
export default function Timer({
  hours,
  minutes,
  seconds,
  milliSeconds,
  changeHours,
  changeMinutes,
  changeSeconds,
}) {
  return (
    <div>
      <BsStopwatch size={40} />

      <div>
        <label>Hours</label>
        <input value={hours} onChange={changeHours} />
      </div>

      <div>
        <label>Minutes</label>
        <input value={minutes} onChange={changeMinutes} />
      </div>

      <div>
        <label>Seconds</label>
        <input value={seconds} onChange={changeSeconds} />
      </div>

      <div>
        <label>Milliseconds</label>
        <input value={milliSeconds} readOnly />
      </div>
    </div>
  );
}
