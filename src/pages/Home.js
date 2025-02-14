import React from "react";
import "../styles/home.css";

function Home() {

  return (
    <div className="bg-dark text-white p-8 h-screen flex justify-center items-center">
      <div className="flex justify-center items-center w-full max-w-7xl">
        <div className="hero text-wrap w-full md:w-1/2 p-4">
          <h1 className="text-6xl mb-5 first">
            Lorem ipsum dolor sit amet
            <br />
            consectetur adipiscing elit,
          </h1>
          <p className="text-2xl second mb-5">You've caught 100 Pokémon</p>
          <button
            type="button"
            className="px-6 py-3.5 text-base font-medium text-black bg-yellow-300 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Caught More
          </button>
        </div>

        <div className="w-full md:w-1/2 flex justify-center p-4 img-hero">
          <img
            src={require("../assets/images/hero.png")}
            alt="hero"
            className="h-auto max-w-full"
            width="500px"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
