import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimeChallenge({ title, time }) {
  const timer = useRef();
  const [timeExpired, setTimeExpired] = useState(false);
  const [start, setStart] = useState(false);
  const [ result, setResult] = useState(false);
  const dialog = useRef();

  function handleStart() {
    setStart(!start);
    if (timeExpired) setTimeExpired(false);
    timer.current = setTimeout(() => {
      setTimeExpired(true);
      dialog.current.showModal();
    }, time * 1000);
    
  }

  function handleStop() {
    clearTimeout(timer.current);
    setStart(false);
    setTimeExpired(true);
    setResult(true);
    dialog.current.showModal();
  }

  return (
    <>
      <ResultModal result={result} targetTime={time} ref={dialog}/>
      <section className="challenge">
        <h2>{title}</h2>
        {!result && timeExpired ? <p>You lost</p> : null}
        <p className="challenge-time">
          {time} second{time > 1 ? "s" : null};
        </p>
        <p className="">Time is running</p>
        <button onClick={start ? handleStop : handleStart}>
          {start ? "Stop" : "Start"} challenge
        </button>
        <p className={start ? "active" : undefined}>
          {start ? "Time is running..." : "timer Inactive"}
        </p>
      </section>
    </>
  );
}
