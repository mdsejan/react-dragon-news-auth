import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";

const RightSideNav = () => {
  return (
    <div>
      <div>
        <h1 className="text-xl font-semibold mb-8 text-[#403F3F]">
          Login With
        </h1>
        <button className="btn btn-outline w-full mb-4 capitalize text-blue-600">
          <FaGoogle></FaGoogle>
          <span>Login With Google</span>
        </button>
        <button className="btn btn-outline w-full capitalize">
          <FaGithub></FaGithub>
          <span>Login With GitHub</span>
        </button>
      </div>

      <div className="mt-12">
        <h1 className="text-xl font-semibold mb-8 text-[#403F3F]">
          Find Us On
        </h1>
        <a
          className="p-4 flex border font-medium items-center rounded-t-lg hover:text-[#D72050]"
          href="https://www.facebook.com/"
        >
          <FaFacebook className="mr-3"></FaFacebook>
          <span>Facebook</span>
        </a>
        <a
          className="p-4 flex border-x font-medium items-center hover:text-[#D72050]"
          href="https://twitter.com/"
        >
          <FaTwitter className="mr-3"></FaTwitter>
          <span>Twitter</span>
        </a>
        <a
          className="p-4 flex border font-medium items-center rounded-b-lg hover:text-[#D72050]"
          href="https://www.instagram.com/"
        >
          <FaInstagram className="mr-3"></FaInstagram>
          <span>Instagram</span>
        </a>
      </div>

      <div className="mt-12 bg-[#F3F3F3] p-4 rounded-lg">
        <h1 className="text-xl font-semibold mb-8 text-[#403F3F]">Q-Zone</h1>

        <figure>
          <img className="w-full" src={qZone1} alt="qZone1" />
        </figure>
        <figure>
          <img className="w-full mt-16" src={qZone2} alt="qZone2" />
        </figure>
        <figure>
          <img className="w-full mt-16" src={qZone3} alt="qZone3" />
        </figure>
      </div>
    </div>
  );
};

export default RightSideNav;
