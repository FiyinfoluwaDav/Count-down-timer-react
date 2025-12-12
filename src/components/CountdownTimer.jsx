import React, { useState, useEffect } from "react";
import Timer from "./Timer";
import { BsFillPlayFill, BsPauseFill, BsStopFill } from "react-icons/bs";

export default function CountdownTimer() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [milliSeconds, setMilliseconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [endScreen, setEndScreen] = useState({
    show: false,
    message: "Timer Ended!",
  });

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        if (milliSeconds > 0) {
          setMilliseconds((ms) => ms - 1);
        } else if (seconds > 0) {
          setSeconds((s) => s - 1);
          setMilliseconds(99);
        } else if (minutes > 0) {
          setMinutes((m) => m - 1);
          setSeconds(59);
          setMilliseconds(99);
        } else if (hours > 0) {
          setHours((h) => h - 1);
          setMinutes(59);
          setSeconds(59);
          setMilliseconds(99);
        } else {
          // Timer reached 0
          setEndScreen({ ...endScreen, show: true });
          resetTimer();
        }
      }, 10);
    }
    return () => clearInterval(interval);
  }, [milliSeconds, seconds, minutes, hours, isRunning, endScreen.show]);

  const changeHours = (e) => setHours(Number(e.target.value));
  const changeMinutes = (e) => setMinutes(Number(e.target.value));
  const changeSeconds = (e) => setSeconds(Number(e.target.value));

  function startTimer() {
    if (hours !== 0 || minutes !== 0 || seconds !== 0 || milliSeconds !== 0) {
      setIsRunning(true);
      setEndScreen({ ...endScreen, show: false });
    } else {
      window.alert("Add Time.");
    }
  }

  function pauseTimer() {
    setIsRunning(false);
  }

  function stopTimer() {
    resetTimer();
    setEndScreen({ ...endScreen, show: true });
  }

  function resetTimer() {
    setIsRunning(false);
    setMilliseconds(0);
    setSeconds(0);
    setMinutes(0);
    setHours(0);
  }

  return (
    <div className="timer-card">
      {endScreen.show && <div className="end-screen">{endScreen.message}</div>}

      <Timer
        milliSeconds={milliSeconds}
        seconds={seconds}
        minutes={minutes}
        hours={hours}
        changeHours={changeHours}
        changeMinutes={changeMinutes}
        changeSeconds={changeSeconds}
      />

      <div className="controls">
        {!isRunning ? (
          <button className="btn" onClick={startTimer} aria-label="start">
            <BsFillPlayFill />
          </button>
        ) : (
          <>
            <button className="btn" onClick={pauseTimer} aria-label="pause">
              <BsPauseFill />
            </button>
            <button className="btn secondary" onClick={stopTimer} aria-label="stop">
              <BsStopFill />
            </button>
          </>
        )}
      </div>
    </div>
  );
}
