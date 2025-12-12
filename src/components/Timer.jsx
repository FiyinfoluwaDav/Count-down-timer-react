import React from "react";
import { BsStopwatch } from "react-icons/bs";
import ThemeToggle from "./ThemeToggle";

export default function Timer({
  hours,
  minutes,
  seconds,
  milliSeconds,
  changeHours,
  changeMinutes,
  changeSeconds,
  theme,
  toggleTheme,
}) {
  return (
    <div className="timer">
      <div className="top-row">
        <BsStopwatch className="timer-icon" size={26} />
        <div className="timer-title">Countdown Timer</div>
        <div style={{ marginLeft: 'auto' }}>
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>
      </div>

      <div className="timer-display">
        <div className="segment">
          <div className="value">
            <input
              className="time-input"
              type="number"
              min="0"
              value={hours}
              onChange={changeHours}
            />
          </div>
          <div className="label">Hours</div>
        </div>

        <div className="segment">
          <div className="value">
            <input
              className="time-input"
              type="number"
              min="0"
              value={minutes}
              onChange={changeMinutes}
            />
          </div>
          <div className="label">Minutes</div>
        </div>

        <div className="segment">
          <div className="value">
            <input
              className="time-input"
              type="number"
              min="0"
              value={seconds}
              onChange={changeSeconds}
            />
          </div>
          <div className="label">Seconds</div>
        </div>

        <div className="segment">
          <div className="value">
            <input className="time-input" type="number" value={milliSeconds} readOnly />
          </div>
          <div className="label">Milliseconds</div>
        </div>
      </div>
    </div>
  );
}
