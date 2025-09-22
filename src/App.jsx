import { Suspense, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";
import AvailableSelectedTitle from "./components/AvailableSelectedTitle/AvailableSelectedTitle";

const playerDataLoad = async () => {
  const players = await fetch("/public/Players.json");
  return players.json();
};

const playersPromise = playerDataLoad();
function App() {
  const [isSelected, setIsSelected] = useState(true);
  return (
    <>
      <Navbar></Navbar>

      <AvailableSelectedTitle
        isSelected={isSelected}
        setIsSelected={setIsSelected}
      ></AvailableSelectedTitle>

      {isSelected ? (
        <Suspense
          fallback={
            <span className="loading loading-xl loading-spinner text-secondary"></span>
          }
        >
          <AvailablePlayers playersPromise={playersPromise}></AvailablePlayers>
        </Suspense>
      ) : (
        <SelectedPlayers></SelectedPlayers>
      )}
    </>
  );
}

export default App;
