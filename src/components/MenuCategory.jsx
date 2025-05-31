import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleItem } from "../features/menu/menuSlice";

const MenuCategory = ({ category, items }) => {
  const selectedItems = useSelector((store) => store.menu.selectedItems);
  const dispatch = useDispatch();

  return (
    <div className="mb-6">
      <h3 className="font-bold text-lg mb-2">{category}</h3>

      <div className="grid grid-cols-3 gap-4 border-b pb-2 font-semibold text-sm text-gray-600">
        <div>English</div>
        <div>Hindi</div>
        <div>Action</div>
      </div>

      {items.map((item) => (
        <div
          key={item.id}
          className="grid grid-cols-3 gap-4 items-center py-2 border-b"
        >
          <div>{item.en}</div>
          <div>{item.hi}</div>
          <button
            onClick={() => dispatch(toggleItem(item.id))}
            className={`px-3 py-1 rounded text-sm font-medium ${
              selectedItems.includes(item.id)
                ? "bg-red-500 text-white"
                : "bg-green-500 text-white"
            }`}
          >
            {selectedItems.includes(item.id) ? "Remove" : "Select"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default MenuCategory;
