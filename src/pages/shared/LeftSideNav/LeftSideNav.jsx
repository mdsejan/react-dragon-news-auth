import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import TrendingNewsCard from "./TrendingNewsCard";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);
  const [trendNews, setTrendNews] = useState([]);

  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((newsdata) => setTrendNews(newsdata));
  }, []);

  const trendNewsFilter = trendNews.filter(
    (news) => news.others_info.is_trending === true
  );

  return (
    <div>
      <div>
        <h1 className="text-xl font-semibold mb-8 text-[#403F3F]">
          All Caterogy
        </h1>
        {categories.map((category) => (
          <NavLink
            key={category.id}
            to={`/category/${category.id}`}
            className="py-4 pl-16 block w-full"
          >
            {category.name}
          </NavLink>
        ))}
      </div>

      <div className="mt-20">
        {trendNewsFilter.slice(0, 3).map((trndNews) => (
          <TrendingNewsCard
            key={trndNews._id}
            trndNews={trndNews}
            categories={categories}
          ></TrendingNewsCard>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNav;
