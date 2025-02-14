import React, { useState } from "react";
import useStore from "../store/store";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Form() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [type, setType] = useState("");
  const { addPokemon } = useStore();
  const { setImageUrl } = useStore();

  const navigate = useNavigate();

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
            const imageUrl = reader.result;
            setImage(imageUrl);
            setImageUrl(imageUrl);
        };
        reader.readAsDataURL(file);
    }
  };

  const handleBack = () => {
    console.log("Back to Home");
    navigate("/pokemon");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('e', e);

    if (!name || !description || !image || !type) {
      alert("Semua form harus diisi");
      return;
    }

    const newPokemon = {
      name,
      description,
      imageUrl: image,
      type,
    };

    addPokemon(newPokemon);

    setName("");
    setDescription("");
    setImage(null);
    setType("Fire");

    Swal.fire({
        title: "Success",
        text: "Pokemon has been added to pokedex",
        icon: "success",
        confirmButtonText: "Done",
      }).then(() => {
        navigate("/pokemon");
      })
  };

  return (
    <div className="pt-20 justify-center text-nowrap">
      <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="pokemon_name"
            id="pokemon_name"
            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label
            htmlFor="pokemon_name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Pokemon Name
          </label>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="pokemon_description"
            id="pokemon_description"
            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <label
            htmlFor="pokemon_description"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Description
          </label>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input
            type="file"
            name="pokemon_image"
            id="pokemon_image"
            className="block cursor-pointer py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            onChange={handleImage}
            required
          />
          <label
            htmlFor="pokemon_image"
            className="block peer-focus:font-medium absolute text-sm cursor-pointer text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Image
          </label>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <select
            name="pokemon_type"
            id="pokemon_type"
            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
          >
            <option className="text-black" value="Fire">Fire</option>
            <option className="text-black" value="Water">Water</option>
            <option className="text-black" value="Electric">Electric</option>
            <option className="text-black" value="Physic">Physic</option>
          </select>
          <label
            htmlFor="pokemon_type"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Type
          </label>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button> &nbsp;
        <button
          type="button"
          onClick={handleBack}
          className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Back
        </button>
      </form>
    </div>
  );
}

export default Form;
