import { useEffect, useState } from "react";
import Header from "../shared/Header/Header";
import LeftSideNav from "../shared/LeftSideNav/LeftSideNav";
import Navbar from "../shared/Navbar/Navbar";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import HomeNewsCard from "./HomeNewsCard";

const Home = () => {
  const [allNews, setAllNews] = useState([]);

  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => setAllNews(data));
  }, []);

  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 py-16 px-8 ">
        <div>
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="lg:col-span-2">
          <h1 className="text-xl font-semibold mb-8 text-[#403F3F]">
            Dragon News Home
          </h1>
          <div>
            {allNews.map((news) => (
              <HomeNewsCard key={news._id} news={news}></HomeNewsCard>
            ))}
          </div>
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
