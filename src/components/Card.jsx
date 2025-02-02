import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variant";
import img1 from "../assets/code.jpg";
import img2 from "../../hoks_assets/img/1000/hoka_dark.png";
import img3 from "../assets/computer.jpg";

const Card = ({ title, description, imageSrc }) => {
  return (
    <motion.div
      variants={fadeIn("left")}
      initial="hidden"
      whileInView={"show"}
      whileHover={{ scale: 1.05 }}
      className="flex flex-col items-center overflow-hidden  rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-white hover:scale-[3]"
    >
      <img src={imageSrc} alt={title} className="w-full h-32 object-cover " />
      <div className=" py-4   px-4 relative">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500 text-center mt-2">{description}</p>
        <div className=" absolute  -top-4 -right-1 py-2 px-3 rounded-s-lg border   border-indigo-500 bg-white">
          <button className="text-indigo-500 hover:underline flex items-center">
            Learn More <span className="ml-2">→</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const CardList = () => {
  const cards = [
    {
      title: "Track time",
      description: "Create your projects and start tracking time immediately",
      imageSrc: img1, // Gunakan gambar yang diimpor
    },
    {
      title: "Performance",
      description: "Manage your time on your tasks and increase your efficiency",
      imageSrc: img2,
    },
    {
      title: "Reports",
      description: "Generate and export reports of all your approved projects",
      imageSrc: img3,
    },
  ];

  return (
    <div className="grid md:grid-cols-1 grid-cols-3 gap-6 px-4  py-8">
      {cards.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} imageSrc={card.imageSrc} />
      ))}
    </div>
  );
};

export default CardList;
