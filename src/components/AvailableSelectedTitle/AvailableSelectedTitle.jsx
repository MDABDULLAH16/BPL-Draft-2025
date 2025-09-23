const AvailableSelectedTitle = ({
  isSelected,
  setIsSelected,
  selectPlayer,
}) => {
  return (
    <div className="flex justify-between items-center mx-10 my-4">
      {isSelected ? (
        <h1 className="font-bold">Available Players</h1>
      ) : (
        <h1 className="font-bold">Selected Players</h1>
      )}

      <div className="flex ">
        <div
          onClick={() => setIsSelected(true)}
          className={`cursor-pointer ${
            isSelected ? "bg-[#E7FE29] font-bold" : ""
          }  hover:bg-[#fed004]  border-r-0 px-5   border-[#13131310] rounded-l-xl  py-3.5`}
        >
          Available
        </div>
        <div
          onClick={() => setIsSelected(false)}
          className={`cursor-pointer ${
            isSelected === false ? "bg-[#E7FE29]  font-bold " : ""
          }  hover:bg-[#fed004]  border-r-0 px-5   border-[#13131310] rounded-r-xl  py-3.5`}
        >
          Selected({selectPlayer.length})
        </div>
      </div>
    </div>
  );
};

export default AvailableSelectedTitle;
