import { useState } from "react";
import { useRef } from "react";

export default function Player() {
    const playerName = useRef();
    const [ playerNameInput, setPlayerNameInput ] = useState(null);

    function handleClick() {
        setPlayerNameInput(playerName.current.value);
    }

    return (
      <section id="player">
        <h2>Welcome {playerNameInput ?? 'unknown entity'}</h2>
        <p>
          <input ref={playerName} type="text" />
          <button onClick={handleClick}>Set Name</button>
        </p>
      </section>
    );
  }
  