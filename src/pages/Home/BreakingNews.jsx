import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="p-4 flex bg-[#F3F3F3]">
      <button className="w-32 bg-[#D72050] text-white py-3"> Latest</button>
      <Marquee pauseOnHover={true} speed={100}>
        <Link to="#" className="mr-8">
          I can be a React component, multiple React components....
        </Link>
        <Link to="#" className="mr-8">
          I can be a React component, multiple React components....
        </Link>
        <Link to="#" className="mr-8">
          I can be a React component, multiple React components....
        </Link>
        <Link to="#" className="mr-8">
          I can be a React component, multiple React components....
        </Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
