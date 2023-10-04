import PropTypes from "prop-types";
import { AiFillEye } from "react-icons/ai";
import { FaRegBookmark, FaShareNodes } from "react-icons/fa6";
import reviews from "../../assets/revviews.png";

const HomeNewsCard = ({ news }) => {
  const { title, image_url, details, rating, total_view, author } = news || {};
  return (
    <div className="border mt-6 rounded-md">
      <div className=" flex justify-between items-center p-4 min-h-[5rem] bg-[#F3F3F3]">
        <div className="flex items-center">
          <div className="avatar mr-4">
            <div className="w-14 rounded-full">
              <img src={author.img} />
            </div>
          </div>

          <div>
            <h3 className="font-bold text-[#403F3F]"> {author.name} </h3>
            <p className="text-[#706F6F]">{author.published_date}</p>
          </div>
        </div>

        <div className="flex items-center text-xl">
          <FaRegBookmark className="mr-3 cursor-pointer"></FaRegBookmark>
          <FaShareNodes className="cursor-pointer"></FaShareNodes>
        </div>
      </div>
      <div className="p-5">
        <h2 className="text-2xl font-bold"> {title} </h2>
        <figure>
          <img className="w-full mt-6" src={image_url} alt={title} />
        </figure>
        <p className="text-[#706F6F] text-lg mt-8 text-justify">
          {details.substring(0, 250)} .....
        </p>

        <button className="font-bold text-[#FE8B4F] cursor-pointer mt-5 ">
          Read More
        </button>
        <div className="divider my-5"></div>

        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src={reviews} alt="reviews" />
            <span className="text-[#706F6F] text-lg ml-3">{rating.number}</span>
          </div>
          <div>
            <h4 className="flex items-center text-[#706F6F]">
              <AiFillEye className="text-2xl mr-3"></AiFillEye>
              <span> {total_view} </span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

HomeNewsCard.propTypes = {
  news: PropTypes.object,
};

export default HomeNewsCard;
