import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDFDocument from "../components/PDFDocument";
import foodItems from "../data/foodItems";

const ReviewPage = () => {
  const navigate = useNavigate();
  const formData = useSelector((state) => state.form);
  const selectedIds = useSelector((state) => state.menu.selectedItems);

  // Prepare category-wise selected items
  const selectedItemsWithCategory = foodItems
    .map((group) => ({
      category: group.category,
      items: group.items.filter((item) => selectedIds.includes(item.id)),
    }))
    .filter((group) => group.items.length > 0);

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Review Your Order</h2>

      {/* You can also render this as a summary on screen if needed */}
      {/* Printable Section */}
      <div className="bg-white p-6 rounded shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-center text-red-600">
          RJEvents
        </h1>

        <div className="mb-4">
          <p>
            <strong>Name: </strong> {formData.name}
          </p>
          <p>
            <strong>Address: </strong> {formData.address}
          </p>
          <p>
            <strong>Date of Event: </strong> {formData.eventDate}
          </p>
          <p>
            <strong>Number of People: </strong> {formData.numberOfPeople}
          </p>
        </div>

        <h3 className="text-xl font-semibold mt-6 mb-2">Selected Food Items</h3>

        {/* Category-wise Selected Items */}
        {foodItems.map((group) => {
          const selectedInCategory = group.items.filter((item) =>
            selectedIds.includes(item.id)
          );

          if (selectedInCategory.length === 0) return null;

          return (
            <div key={group.category} className="mb-4">
              <h4 className="text-lg font-bold mb-2">{group.category}</h4>
              <table className="w-full border-collapse border">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border p-2 text-left">English</th>
                    <th className="border p-2 text-left">Hindi</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedInCategory.map((item) => (
                    <tr key={item.id}>
                      <td className="border p-2">{item.en}</td>
                      <td className="border p-2">{item.hi}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        })}
      </div>

      <div className="flex justify-end mt-6">
        <button
          onClick={() => navigate("/menu")}
          className="bg-yellow-500 text-white px-4 py-2 rounded"
        >
          Edit
        </button>

        <PDFDownloadLink
          document={
            <PDFDocument
              formData={formData}
              selectedItemsWithCategory={selectedItemsWithCategory}
            />
          }
          fileName="RJEvents_Order.pdf"
        >
          {({ loading }) =>
            loading ? (
              <button
                disabled
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                Preparing PDF...
              </button>
            ) : (
              <button className="bg-green-600 text-white px-4 py-2 rounded">
                Download PDF
              </button>
            )
          }
        </PDFDownloadLink>
      </div>
    </div>
  );
};

export default ReviewPage;
