import Header from "../shared/Header/Header";
import RightSideNav from "../shared/RightSideNav/RightSideNav";

const NewsDetails = () => {
  return (
    <div>
      <Header></Header>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 py-16 px-8">
        <div className="lg:col-span-3">
          <h1>News Details</h1>
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
