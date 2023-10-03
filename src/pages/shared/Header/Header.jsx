import logo from "../../../assets/logo.png";
import moment from "moment";

const Header = () => {
  return (
    <div className="flex flex-col items-center py-16">
      <figure>
        <img className="w-full  px-4" src={logo} alt="logo" />
      </figure>
      <p className="mt-4 text-lg">Journalism Without Fear or Favour</p>
      <h3 className="mt-2 font-semibold text-xl">
        {moment().format("dddd, MMMM D, YYYY")}
      </h3>
    </div>
  );
};

export default Header;
