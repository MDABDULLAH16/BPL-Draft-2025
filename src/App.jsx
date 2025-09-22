import { Suspense } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";

const playerDataLoad = async () => {
  const players = await fetch("/public/Players.json");
  return players.json();
};

function App() {
  const playersPromise = playerDataLoad();
  return (
    <>
      <Navbar></Navbar>
      <Suspense
        fallback={
          <span className="loading loading-xl loading-spinner text-secondary"></span>
        }
      >
        <AvailablePlayers playersPromise={playersPromise}></AvailablePlayers>
      </Suspense>
    </>
  );
}

export default App;
