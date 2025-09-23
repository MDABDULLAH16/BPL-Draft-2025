import { Suspense, useMemo, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";
import AvailableSelectedTitle from "./components/AvailableSelectedTitle/AvailableSelectedTitle";
import { toast, ToastContainer } from "react-toastify";

const playerDataLoad = async () => {
  const players = await fetch("/Players.json");
  return players.json();
};

// const playersPromise = playerDataLoad();
function App() {
  console.log("re load the page");
  const playersPromise = useMemo(() => playerDataLoad(), []);

  const [isSelected, setIsSelected] = useState(true);
  const [selectPlayer, setSelectPlayer] = useState([]);
  const [availableBalance, setAvailableBalance] = useState(1000000);
  const handleSelectPlayer = (player) => {
    const newPlayers = [...selectPlayer, player];
    const existPlayer = selectPlayer.find((pl) => pl.name === player.name);
    if (existPlayer) {
      toast.error("player is already selected");
      return;
    }
    setAvailableBalance(availableBalance - player.price);
    setSelectPlayer(newPlayers);
    toast.success(`${player.name} is Selected`, {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const handleRemovePlayer = (p) => {
    const remainingPlayer = selectPlayer.filter(
      (player) => player.name !== p.name
    );
    setSelectPlayer(remainingPlayer);
    setAvailableBalance(availableBalance + p.price);
    toast.error(`${p.name} is Unselected`, {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>

      <AvailableSelectedTitle
        selectPlayer={selectPlayer}
        isSelected={isSelected}
        setIsSelected={setIsSelected}
      ></AvailableSelectedTitle>

      <div>
        <Suspense
          fallback={
            <span className="loading loading-xl loading-spinner text-secondary"></span>
          }
        >
          {/* ✅ Keep both mounted, but hide/show with CSS instead of unmounting */}
          <div style={{ display: isSelected ? "block" : "none" }}>
            <AvailablePlayers
              handleSelectPlayer={handleSelectPlayer}
              playersPromise={playersPromise}
            />
          </div>

          <div style={{ display: isSelected ? "none" : "block" }}>
            <SelectedPlayers
              handleRemovePlayer={handleRemovePlayer}
              selectPlayer={selectPlayer}
            />
          </div>
        </Suspense>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
