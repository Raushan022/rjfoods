import React from "react";
import { useNavigate } from "react-router-dom";
import foodItems from "../data/foodItems";
import MenuCategory from "../components/MenuCategory";

const MenuPage = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Select Menu Items</h2>

      {foodItems.map((group) => (
        <MenuCategory
          key={group.category}
          category={group.category}
          items={group.items}
        />
      ))}

      <button
        onClick={() => navigate("/review")}
        className="mt-8 bg-blue-800 text-white px-4 py-2 rounded hover:cursor-pointer"
      >
        Proceed
      </button>
    </div>
  );
};

export default MenuPage;
