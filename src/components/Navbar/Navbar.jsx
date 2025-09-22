import logo from "../../assets/logo.png";
import coin from "../../assets/dollar-1.svg";

const Navbar = () => {
  return (
    <nav
      className="max-w-[1200px] px-10 mx-auto flex flex-col sm:flex-col md:flex-col lg:flex-row
     items-center justify-between"
    >
      <img className="h-[70px] w-[72px]" src={logo} alt="Logo" />
      <div className="flex items-center gap-12 underline-none  ">
        <a className="" href="">
          Home
        </a>
        <a href="`">Fixture </a>
        <a href="">Teams </a>
        <a href="">Schedules</a>
        <button className="flex gap-2">
          <p>0 Coin</p> <img src={coin} alt="" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
