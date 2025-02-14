import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useStore from "../store/store";

function Pokemon() {
  const { pokemonList, removePokemon, updatePokemon } = useStore();
  const [isEditing, setIsEditing] = useState(false);
  const [editedPokemon, setEditedPokemon] = useState({});
  
  const navigate = useNavigate();

  const navigateToForm = () => {
    navigate("/form-add");
  };

  const handleRemovePokemon = (pokemonId) => {
	console.log('pokemon id', pokemonId);
    removePokemon(pokemonId);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
	console.log('name', name);
	console.log('value', value);
    setEditedPokemon({
      ...editedPokemon,
      [name]: value,
    });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    updatePokemon(editedPokemon);
    setIsEditing(false);
  };

  const handleEditPokemon = (pokemon) => {
    setEditedPokemon(pokemon);
    setIsEditing(true);
  };

  return (
    <div className="pt-10 px-4 pb-10">
      <div className="flex justify-end mb-10">
        <button
          className="px-6 py-3.5 text-base font-medium text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 rounded-full text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition duration-200"
          type="button"
          onClick={navigateToForm}
        >
          Add Pokemon
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {pokemonList.length === 0 ? (
          <p className="text-center text-xl text-white">No Pokémon available</p>
        ) : (
          pokemonList.map((pokemon) => (
            <div
              key={pokemon.id}
              className="relative bg-gradient-to-br from-yellow-200 via-red-200 to-yellow-500 border border-yellow-400 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105"
            >
              <div className="relative w-full h-72 overflow-hidden rounded-t-lg">
                <img
                  className="w-full h-full object-contain"
                  src={pokemon.imageUrl}
                  alt={pokemon.name}
                />
                <div className="absolute bottom-3 left-3 text-white px-3 py-1 text-sm rounded-full">
                  {pokemon.type === "Fire" && (
                    <span className="bg-red-500 px-2 py-1 rounded-full text-white text-xs">
                      {`🔥` + pokemon.type}
                    </span>
                  )}
                  {pokemon.type === "Water" && (
                    <span className="bg-blue-500 px-2 py-1 rounded-full text-white text-xs">
                      {`💧` + pokemon.type}
                    </span>
                  )}
                  {pokemon.type === "Electric" && (
                    <span className="bg-yellow-500 px-2 py-1 rounded-full text-white text-xs">
                      {`⚡` + pokemon.type}
                    </span>
                  )}
                  {pokemon.type === "Physic" && (
                    <span className="bg-purple-500 px-2 py-1 rounded-full text-white text-xs">
                      {`🧠` + pokemon.type}
                    </span>
                  )}
                  {pokemon.type === "Grass" && (
                    <span className="bg-green-500 px-2 py-1 rounded-full text-white text-xs">
                      {`🌿` + pokemon.type}
                    </span>
                  )}
                </div>
              </div>

              <div className="p-5 space-y-4">
                <h5 className="text-2xl font-semibold text-gray-800 dark:text-white">
                  {pokemon.name}
                </h5>
                <p className="text-sm text-gray-600 dark:text-gray-400 text-wrap">
                  {pokemon.description}
                </p>

                <div className="flex flex-wrap gap-x-2">
                  <p className="flex items-center text-xs font-medium text-white py-1.5 px-3 rounded-full bg-red-500">
                    Weakness: {pokemon.weakness}
                  </p>
                </div>

                <div className="mt-4 flex items-center justify-between text-xs font-medium text-gray-700 dark:text-white">
                  <div className="space-x-3">
                    <button
                      className="px-6 py-2.5 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full transition duration-200"
                      type="button"
                      onClick={() => handleEditPokemon(pokemon)}
                    >
                      Edit
                    </button>
                    <button
                      className="px-6 py-2.5 text-base font-medium text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 rounded-full transition duration-200"
                      type="button"
                      onClick={() => handleRemovePokemon(pokemon.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {isEditing && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-all"
          id="crud-modal"
        >
          <div className="relative p-4 w-full max-w-md max-h-full">
            {/* Modal content */}
            <div className="relative rounded-lg shadow-sm dark:bg-gray-700 modal-edit">
              {/* Modal header */}
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                <h3 className="text-lg font-semibold text-white dark:text-white">
                  Edit Pokémon
                </h3>
              </div>
              {/* Modal body */}
              <form onSubmit={handleEditSubmit} className="p-4 md:p-5">
                <div className="grid gap-4 mb-4 grid-cols-2">
                  <div className="col-span-2">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-white dark:text-white"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Type Pokémon name"
                      value={editedPokemon.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-span-2">
                    <label
                      htmlFor="type"
                      className="block mb-2 text-sm font-medium text-white dark:text-white"
                    >
                      Type
                    </label>
                    <select
                      id="type"
                      name="type"
                      value={editedPokemon.type}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      required
                    >
                      <option value="Fire">Fire</option>
                      <option value="Water">Water</option>
                      <option value="Electric">Electric</option>
                      <option value="Physic">Physic</option>
                      <option value="Grass">Grass</option>
                    </select>
                  </div>

                  <div className="col-span-2">
                    <label
                      htmlFor="description"
                      className="block mb-2 text-sm font-medium text-white dark:text-white"
                    >
                      Description
                    </label>
                    <textarea
                      id="description"
                      rows="4"
					  name="description"
                      value={editedPokemon.description}
                      onChange={handleInputChange}
                      className="block p-2.5 w-full text-sm text-black bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Write Pokémon description here"
                    ></textarea>
                  </div>
                </div>
				<div className="flex justify-between">
				<button
                  type="submit"
                  className="px-6 py-2.5 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full transition duration-200"
                >
                  Save
                </button>
                <button
                  type="button"
                  className="px-6 py-2.5 text-base font-medium text-white bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full transition duration-200"
                  onClick={() => setIsEditing(false)} 
                >
                  Cancel
                </button>
				</div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Pokemon;
