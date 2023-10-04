import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  const [allNews, setAllNews] = useState([]);

  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => setAllNews(data));
  }, []);

  return (
    <div className="p-4 flex bg-[#F3F3F3]">
      <button className="w-32 bg-[#D72050] text-white py-3"> Latest</button>
      <Marquee pauseOnHover={true} speed={120}>
        {allNews.map((news) => (
          <Link key={news._id} to="#" className="mr-8">
            {news.title}
          </Link>
        ))}
      </Marquee>
    </div>
  );
};

export default BreakingNews;
