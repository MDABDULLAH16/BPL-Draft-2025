import deleteIcon from "../../assets/delete.svg";

const SelectedPlayers = ({ selectPlayer, handleRemovePlayer }) => {
  return (
    <>
      <div className="space-y-4">
        {selectPlayer.map((player, index) => (
          <div
            key={index}
            className="flex justify-between items-center max-w-[1200px] mx-auto px-10"
          >
            <div className="flex items-center">
              <img
                className="h-[80px] w-[80px] rounded-2xl"
                src={player.image}
                alt=""
              />
              <div className="ml-4">
                <h2 className="font-bold text-2xl">{player.name}</h2>
                <p className="font-semibold">{player.skill}</p>
              </div>
            </div>
            <div>
              <img
                onClick={() => handleRemovePlayer(player)}
                className="cursor-pointer"
                src={deleteIcon}
                alt="Delete"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SelectedPlayers;
