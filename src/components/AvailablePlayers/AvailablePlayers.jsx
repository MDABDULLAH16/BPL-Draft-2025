import { use } from "react";
import PlayerCard from "../PlayerCard/PlayerCard";

const AvailablePlayers = ({ playersPromise, handleSelectPlayer }) => {
  const players = use(playersPromise);

  return (
    <div className="px-10">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 ">
        {players.map((player) => (
          <PlayerCard
            key={player.name}
            handleSelectPlayer={handleSelectPlayer}
            player={player}
          ></PlayerCard>
        ))}
      </div>
    </div>
  );
};

export default AvailablePlayers;
