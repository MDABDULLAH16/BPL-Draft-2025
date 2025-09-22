import { useState } from "react";
import userLogo from "../../assets/user.svg";
import flag from "../../assets/flag.svg";
const PlayerCard = ({ player, handleSelectPlayer }) => {
  const [isSelectPlayer, setIsSelectPlyer] = useState(false);
  const handleSelect = (player) => {
    handleSelectPlayer(player);
  };
  return (
    <div className="  shadow-sm p-4">
      <figure>
        <img
          className="w-full h-[200px] object-cover rounded-md"
          src={player.image}
          alt="Shoes"
        />
      </figure>
      <div className="mt-6">
        <div
          className="flex
            gap-4 mb-4"
        >
          <img src={userLogo} alt="" />
          <h2 className="card-title">{player.name}</h2>
        </div>
        {/* skill  */}
        <div className="flex justify-between items-center border-b-1 pb-4 border-b-gray-400">
          <div
            className="flex gap-3 items-center
              "
          >
            <img src={flag} alt="Flag" />
            <p className="font-bold">{player.country}</p>
          </div>
          <button>{player.skill}</button>
        </div>
        <div className="flex justify-between items-center font-semibold mt-4">
          <span>Category </span> <span>{player.category}</span>
        </div>
        <div className="flex justify-between items-center  mt-4">
          <span className="font-semibold">{player.playing_side}</span>
          <span>{player.bowling_style}</span>
        </div>
        <div
          className="flex justify-between items-center mt-4
             "
        >
          <p className="font-semibold">Price: {player.price} BDT</p>
          <button
            disabled={isSelectPlayer}
            onClick={() => {
              setIsSelectPlyer(true);
              handleSelect(player);
            }}
            className="btn"
          >
            {isSelectPlayer === true ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
