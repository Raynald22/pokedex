import { create } from "zustand";

const useStore = create((set) => ({
  username: localStorage.getItem("username") || "lalala",
  setUsername: (username) => {
    localStorage.setItem("username", username);
    set({ username });
  },

  biodata: JSON.parse(localStorage.getItem("biodata")) || {
    name: "Reynaldi",
    position: "FrontEnd Developer",
    description: "test",
  },

  updateBiodata: (updatedBiodata) => {
    set({ biodata: updatedBiodata });
    localStorage.setItem("biodata", JSON.stringify(updatedBiodata));
  },

  pokemonList: JSON.parse(localStorage.getItem("pokemonList")) || [],

  generatePokemonId: () => {
    console.log('pokemonId', localStorage.getItem("pokemonId"));
    let idPokemon = parseInt(localStorage.getItem("pokemonId")) || 0;
    const addId = idPokemon + 1;
    localStorage.setItem("pokemonId", addId);
    return addId;
  },

  addPokemon: (newPokemon) => {
    const addId = useStore.getState().generatePokemonId();
    const pokemonWithId = { ...newPokemon, id: addId };
    set((state) => {
      const pokemonList = [...state.pokemonList, pokemonWithId];
      localStorage.setItem("pokemonList", JSON.stringify(pokemonList));
      return { pokemonList: pokemonList };
    });
  },

  removePokemon: (pokemonId) =>
    set((state) => {
      const deletePokemon = state.pokemonList.filter(
        (pokemon) => pokemon.id !== pokemonId
      );
      localStorage.setItem("pokemonList", JSON.stringify(deletePokemon));
      return { pokemonList: deletePokemon };
    }),
  

  updatePokemon: (updatedPokemon) =>
    set((state) => {
      const updatedList = state.pokemonList.map((pokemon) =>
        pokemon.id === updatedPokemon.id ? updatedPokemon : pokemon
      );
      localStorage.setItem("pokemonList", JSON.stringify(updatedList));
      return { pokemonList: updatedList };
    }),

  imageUrl: localStorage.getItem("imageUrl") || "",

  setImageUrl: (imageUrl) => {
    localStorage.setItem("imageUrl", imageUrl);
    set({ imageUrl });
  },
}));

export default useStore;
