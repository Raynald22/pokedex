import React, { useEffect, useState } from "react";
import useStore from "../store/store";
import Chart from "../components/Chart";

function About() {
  const { biodata, updateBiodata } = useStore();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(biodata);

  useEffect(() => {
    setFormData(biodata);
  }, [biodata]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateBiodata(formData);
    setIsEditing(false);
  };

  return (
    <div className="flex justify-between space-x-8 py-8 px-4 pl-20 pr-20 pt-52">
      <div className="max-w-3xl w-full bg-white p-6 rounded-lg shadow-lg">
      
        <div className="flex items-center mb-6">
          <img
            src={require("../assets/images/profile.png")}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover mr-6"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{formData.name}</h2>
            <p className="text-gray-600">{formData.position}</p>
          </div>
        </div>

        {!isEditing ? (
          <p className="text-gray-700 mb-6">{formData.description}</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your name"
            />
            <input
              type="text"
              name="position"
              value={formData.position}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your position"
            />
            <textarea
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Description"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded"
            >
              Save Changes
            </button>
          </form>
        )}

        <button
          onClick={() => setIsEditing((prev) => !prev)}
          className="mt-4 text-blue-500"
        >
          {isEditing ? "Cancel" : "Edit"}
        </button>
      </div>

      <div className="w-full max-w-2xl">
        <Chart />
      </div>
    </div>
  );
}

export default About;
