import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importing useNavigate hook
import bgImage from "../images/bg1.jpg"; // Importing the background image

const Settings = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate(); // useNavigate hook to redirect

  // Handle Profile Picture Change
  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
        setSuccessMessage("Profile picture updated successfully!");
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle Password Change
  const handlePasswordChange = () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setSuccessMessage(""); // Reset success message
    } else {
      setError("");
      setSuccessMessage("Password updated successfully!");
    }
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle profile picture logic
    if (profilePic) {
      console.log("Profile Picture selected:", profilePic);
      // Handle profile picture upload logic here (API call or file storage)
    }

    // Handle password change logic
    handlePasswordChange();

    // Navigate to the dashboard after form submission
    if (!error) {
      navigate("/dashboard"); // Redirect to dashboard or any other route you want
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center py-10"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="max-w-3xl mx-auto bg-white bg-opacity-80 rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-black mb-8">Settings</h1>

        {/* Success Message */}
        {successMessage && (
          <div className="text-green-500 mb-6 text-center">
            <p>{successMessage}</p>
          </div>
        )}

        {/* Profile Picture Section */}
        <div className="mb-6 text-center">
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden">
            <img
              src={profilePic || "https://via.placeholder.com/150"}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={handleProfilePicChange}
            className="mt-4 p-2 bg-blue-500 text-white rounded-lg cursor-pointer hover:bg-blue-600 transition"
          />
        </div>

        {/* Password Change Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">Change Password</h2>
          <div>
            <label htmlFor="password" className="block text-gray-600 mb-2">New Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your new password"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="confirmPassword" className="block text-gray-600 mb-2">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Confirm your new password"
            />
          </div>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            onClick={handleSubmit}
            className="px-6 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
