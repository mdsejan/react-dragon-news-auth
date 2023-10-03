import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  console.log(categories);
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
    </div>
  );
};

export default LeftSideNav;
