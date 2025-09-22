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
  const [selectPlayer, setSelectPlayer] = useState([]);

  const handleSelectPlayer = (player) => {
    const newPlayers = [...selectPlayer, player];
    setSelectPlayer(newPlayers);
  };
  console.log(selectPlayer);

  return (
    <>
      <Navbar></Navbar>

      <AvailableSelectedTitle
        selectPlayer={selectPlayer}
        isSelected={isSelected}
        setIsSelected={setIsSelected}
      ></AvailableSelectedTitle>

      {isSelected ? (
        <Suspense
          fallback={
            <span className="loading loading-xl loading-spinner text-secondary"></span>
          }
        >
          <AvailablePlayers
            handleSelectPlayer={handleSelectPlayer}
            playersPromise={playersPromise}
          ></AvailablePlayers>
        </Suspense>
      ) : (
        <SelectedPlayers selectPlayer={selectPlayer}></SelectedPlayers>
      )}
    </>
  );
}

export default App;
