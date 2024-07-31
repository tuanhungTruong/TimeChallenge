import Player from "./components/Player";
import TimeChallenge from "./components/TimeChallenge";


function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimeChallenge title="Easy" time={1} />
        <TimeChallenge title="Medium" time={5} />
        <TimeChallenge title="Hard" time={10} />
        <TimeChallenge title="Expert" time={15} />
      </div>
    </>
  );
}

export default App;
