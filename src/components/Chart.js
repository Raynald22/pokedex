import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import useStore from "../store/store";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Chart() {
  const { pokemonList } = useStore();

  const typeCounts = pokemonList.reduce((list, pokemon) => {
    list[pokemon.type] = (list[pokemon.type] || 0) + 1;
    return list;
  }, {});

  const typeColors = {
    Fire: "rgba(255, 99, 132, 0.6)",
    Water: "rgba(54, 162, 235, 0.6)",
    Electric: "rgba(255, 206, 86, 0.6)",
    Physic: "rgba(153, 102, 255, 0.6)",
    Grass: "rgba(75, 192, 192, 0.6)",
  };

  const chartData = {
    labels: Object.keys(typeCounts),
    datasets: [
      {
        label: "Pokémon Types",
        data: Object.values(typeCounts),
        backgroundColor: Object.keys(typeCounts).map((type) => typeColors[type]),
        borderColor: Object.keys(typeCounts).map((type) => typeColors[type]),
        borderWidth: 1,
        barThickness: 12,
        categoryPercentage: 0.6,
        barPercentage: 0.7,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Pokémon Registered",
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `${tooltipItem.raw} Pokémon`,
        },
      },
    },
  };

  return (
    <div className="w-full p-8">
      <Bar data={chartData} options={options} />
    </div>
  );
}

export default Chart;
