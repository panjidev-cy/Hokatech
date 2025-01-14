import React from 'react';
import img1 from "../assets/image1.gif"
import img2 from "../assets/image2.gif" 
import img3 from "../../hoks_assets/img/1000/hoka_dark.png"

    const Card = ({ title, description, imageSrc }) => {
    return (
        <div className="flex flex-col items-center overflow-hidden  rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-white ">
          <img 
              src={imageSrc} 
              alt={title} 
              className="w-full h-32 object-cover mb-4" 
          />
          <div className=" py-1 px-4">
            <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
            <p className="text-sm text-gray-500 text-center mt-2">{description}</p>
            <div className="mt-4">
                <button className="text-indigo-500 hover:underline flex items-center">
                Learn More <span className="ml-2">→</span>
                </button>
            </div>
          </div>
        </div>

    );
    };

    const CardList = () => {
        const cards = [
            {
              title: 'Track time',
              description: 'Create your projects and start tracking time immediately',
              imageSrc: img1, // Gunakan gambar yang diimpor
            },
            {
              title: 'Performance',
              description: 'Manage your time on your tasks and increase your efficiency',
              imageSrc: img2,
            },
            {
              title: 'Reports',
              description: 'Generate and export reports of all your approved projects',
              imageSrc: img3,
            },
          ];
          

    return (
        <div className="grid md:grid-cols-1 grid-cols-3 gap-6 px-4  py-8">
        {cards.map((card, index) => (
            <Card
            key={index}
            title={card.title}
            description={card.description}
            imageSrc={card.imageSrc}
            />
        ))}
        </div>
    );
    };

    export default CardList;
