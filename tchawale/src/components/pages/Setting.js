import React from "react";
import bg1Image from "../images/bg1.jpg";

function Setting() {
  return (
    <div
    className="min-h-screen flex items-center justify-center bg-cover bg-center"
    style={{ backgroundImage: `url(${bg1Image})` }}
  >
      <div className="container">
        <div className="card mt-8 bg-white bg-opacity-90 shadow-lg rounded-lg">
          <div className="card-body p-6">
            <h5 className="text-2xl font-bold text-gray-800">About</h5>
            <p className="text-gray-600 mt-2">
              This is the Contact Us page. You can include your contact details, business information, or anything else you'd like here.
            </p>
          </div>
        </div>
      </div>
    </div>
  ); 
}

export default Setting;
