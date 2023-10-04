import PropTypes from "prop-types";
import { CiCalendarDate } from "react-icons/ci";

const TrendingNewsCard = ({ trndNews }) => {
  const { title, thumbnail_url, author } = trndNews || {};

  return (
    <div>
      <figure>
        <img
          className="w-full h-[220px] object-cover object-left-top  rounded-md"
          src={thumbnail_url}
          alt="post thumbnail"
        />
      </figure>
      <h1 className="text-xl font-semibold mt-8">{title}</h1>
      <div className="flex mt-3">
        <h3 className="font-medium text-xl mr-5">Sports</h3>
        <div className="flex items-center font-medium text-[#9F9F9F]">
          <CiCalendarDate className="text-xl mr-3"></CiCalendarDate>
          <span> {author.published_date} </span>
        </div>
      </div>

      <br />
      <br />
    </div>
  );
};

TrendingNewsCard.propTypes = {
  trndNews: PropTypes.object,
};

export default TrendingNewsCard;
