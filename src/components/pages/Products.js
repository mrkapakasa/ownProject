import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importing useNavigate hook

// Importing images
import topaccessImage from "../images/topaccess.jpg";
import topImage from "../images/top.jpg";
import chargerImage from "../images/charger.jpg";
import batryImage from "../images/batry.jpg";
import hddImage from "../images/hdd.jpg";
import keyboardImage from "../images/keyboard.jpg";
import lcdImage from "../images/lcd.jpg";
import moiseImage from "../images/moise.jpg";
import appleImage from "../images/apple.jpg";
import hpImage from "../images/hp.jpg";
import acerImage from "../images/acer.jpg";
import toshibaImage from "../images/toshiba.jpg";
import dellImage from "../images/dell.jpg";
import PHONEACCESSImage from "../images/PHONEACCESS.jpg";
import oraimoheadphonesImage from "../images/oraimoheadphones.jpg";
import oraimopodsImage from "../images/oraimopods.jpg";
import headphonesImage from "../images/headphones.jpg";
import earphonesImage from "../images/earphones.jpg";
import chargersImage from "../images/chargers.jpg";
import otherImage from "../images/other.jpg";
import ricecookerImage from "../images/ricecooker.jpg";
import watchImage from "../images/watch.jpg";
import xtensionImage from "../images/xtension.jpg";
import kettleImage from "../images/kettle.jpg";
import hotplateImage from "../images/hotplate.jpg";
import bg1Image from "../images/bg1.jpg";

const products = [
  {
    id: 1,
    name: "LAPTOPS",
    image: topImage,
    quantity: 5,
    similar: [
      { id: 5, name: "acer", price: 450000.99, image: acerImage },
      { id: 6, name: "Apple", price: 700000.99, image: appleImage },
      { id: 7, name: "Dell", price: 600000.99, image: dellImage },
      { id: 8, name: "Hp", price: 550000.99, image: hpImage },
      { id: 9, name: "Toshiba", price: 400000.99, image: toshibaImage },
    ],
  },
  {
    id: 2,
    name: "LAPTOP ACCESSORIES",
    image: topaccessImage,
    quantity: 6,
    similar: [
      { id: 10, name: "Charger", price: 55000.0, image: chargerImage },
      { id: 11, name: "Battery", price: 74000.0, image: batryImage },
      { id: 12, name: "External hard drive", price: 40000.0, image: hddImage },
      { id: 13, name: "Keyboard", price: 14000.0, image: keyboardImage },
      { id: 14, name: "LCD", price: 70000.0, image: lcdImage },
      { id: 15, name: "Mouse", price: 7000.0, image: moiseImage },
    ],
  },
  {
    id: 3,
    name: "PHONE ACCESSORIES",
    image: PHONEACCESSImage,
    quantity: 5,
    similar: [
      { id: 16, name: "Oraimo Headphones", price: 14000.0, image: oraimoheadphonesImage },
      { id: 17, name: "Ear sets", price: 5000.0, image: earphonesImage },
      { id: 18, name: "Chargers", price: 7000.0, image: chargersImage },
      { id: 19, name: "Pods", price: 14500.0, image: oraimopodsImage },
      { id: 20, name: "Headphones", price: 21000.0, image: headphonesImage },
    ],
  },
  {
    id: 4,
    name: "OTHER PRODUCTS",
    image: otherImage,
    quantity: 100,
    similar: [
      { id: 21, name: "WATCH", price: 4999.99, image: watchImage },
      { id: 22, name: "EXTENSION", price: 7999.99, image: xtensionImage },
      { id: 23, name: "KETTLE", price: 17000.0, image: kettleImage },
      { id: 24, name: "HOTPLATE", price: 39999.99, image: hotplateImage },
      { id: 25, name: "RICE COOKER", price: 34999.99, image: ricecookerImage },
    ],
  },
];

const App = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCommodities, setSelectedCommodities] = useState({});
  const navigate = useNavigate();

  const handleViewDetails = (productId) => {
    const product = products.find((p) => p.id === productId);
    setSelectedProduct(product);
  };

  const handleSelectCommodity = (commodity, productId) => {
    setSelectedCommodities((prev) => {
      const updated = { ...prev };
      if (!updated[productId]) {
        updated[productId] = [];
      }
      if (!updated[productId].some((item) => item.id === commodity.id)) {
        updated[productId].push(commodity);
      }
      return updated;
    });
  };

  const handleRemoveCommodity = (commodityId, productId) => {
    setSelectedCommodities((prev) => {
      const updated = { ...prev };
      updated[productId] = updated[productId].filter((item) => item.id !== commodityId);
      if (updated[productId].length === 0) {
        delete updated[productId];
      }
      return updated;
    });
  };

  const calculateTotalPrice = () =>
    Object.values(selectedCommodities)
      .flat()
      .reduce((total, item) => total + item.price, 0)
      .toFixed(2);

  const handleOrder = () => {
    alert(
      `Order placed successfully!\nItems: ${Object.values(selectedCommodities)
        .flat()
        .map((item) => item.name)
        .join(", ")}\nTotal Price: MK${calculateTotalPrice()}`
    );
    setSelectedCommodities({});
    navigate("/");
  };

  return (
    <div
      className="min-h-screen py-8 bg-cover bg-center"
      style={{ backgroundImage: `url(${bg1Image})` }}
    >
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-extrabold text-center text-white mb-10">
          Our Products
        </h1>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-green-200"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  {product.name}
                </h2>
                <button
                  onClick={() => handleViewDetails(product.id)}
                  className="mt-4 px-4 py-2 bg-blue-400 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
        {selectedProduct && (
          <div className="mt-10 bg-white p-6 rounded-lg shadow-md border border-green-300 max-w-xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800">
              {selectedProduct.name}
            </h2>
            <p className="text-xl text-gray-600 mt-2">
              Quantity:{" "}
              <span className="font-bold text-green-700">{selectedProduct.quantity}</span>
            </p>
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-700 mb-3">
                Similar Commodities:
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {selectedProduct.similar.map((commodity) => (
                  <div
                    key={commodity.id}
                    className="border rounded-lg p-4 shadow-md hover:shadow-lg transition"
                  >
                    <img
                      src={commodity.image}
                      alt={commodity.name}
                      className="w-70 h-40 object-cover rounded-md"
                    />
                    <h4 className="text-lg font-bold text-gray-800 mt-2">
                      {commodity.name}
                    </h4>
                    <p className="text-blue-600 font-semibold">
                      MK{commodity.price.toFixed(2)}
                    </p>
                    <button
                      onClick={() =>
                        handleSelectCommodity(commodity, selectedProduct.id)
                      }
                      className="mt-2 px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-700 transition"
                    >
                      Select
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={() => setSelectedProduct(null)}
              className="mt-6 px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition"
            >
              Close
            </button>
          </div>
        )}
        {Object.keys(selectedCommodities).length > 0 && (
          <div className="mt-10 bg-white p-6 rounded-lg shadow-md border border-blue-300 max-w-xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Selected Commodities
            </h2>
            <ul className="space-y-3">
              {Object.entries(selectedCommodities).flatMap(([productId, commodities]) =>
                commodities.map((commodity) => (
                  <li
                    key={commodity.id}
                    className="flex justify-between items-center border-b pb-2"
                  >
                    <span className="text-lg font-semibold text-gray-800">
                      {commodity.name}
                    </span>
                    <span className="text-blue-600 font-semibold">
                      MK{commodity.price.toFixed(2)}
                    </span>
                    <button
                      onClick={() => handleRemoveCommodity(commodity.id, productId)}
                      className="ml-2 px-2 py-1 text-red-500 bg-gray-100 border border-red-500 rounded-md hover:bg-red-200"
                    >
                      Remove
                    </button>
                  </li>
                ))
              )}
            </ul>
            <div className="mt-4 flex justify-between items-center">
              <p className="text-xl font-bold text-gray-800">
                Total Price: MK{calculateTotalPrice()}
              </p>
              <button
                onClick={handleOrder}
                className="px-6 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition"
              >
                Order Now
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
