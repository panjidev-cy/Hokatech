import React, { useEffect, useState } from "react";
import "./StackedCards.css"; // Import file CSS terpisah

const StackedCards = () => {
  const [awayCards, setAwayCards] = useState([]); // Menyimpan kartu yang diberi kelas "away"

  // Fungsi untuk memperbarui posisi kartu berdasarkan scroll
  const handleScroll = () => {
    const stackArea = document.querySelector(".stacked-cards");
    const distance = window.innerHeight * 0.5;
    const topVal = stackArea.getBoundingClientRect().top;
    const index = Math.floor(-1 * (topVal / distance + 1));

    const updatedAwayCards = [];
    for (let i = 0; i < 4; i++) {
      if (i <= index) {
        updatedAwayCards.push(i);
      }
    }
    setAwayCards(updatedAwayCards);
  };

  // Efek untuk menambahkan event listener scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="stacked-cards w-full h-[200vh] flex relative">
      {/* Bagian kiri dengan judul dan deskripsi */}
      <div className="h-screen basis-1/2 sticky top-0 left-0 flex items-center justify-center flex-col">
        {/* <h1 className="title">Stacked Cards</h1>
        <p className="sub-title">
          A smooth stacking effect
          <br />
          <button>Learn More</button>
        </p> */}
        <div className="w-full md:w-full">
          <h1 className="text-5xl font-bold font-poppins leading-tight md:w-full md:text-4xl ">
            Code That <span className="px-2 bg-yellow-300">Speaks,</span> <span className=" bg-purple text-white">Design</span>That Inspires
          </h1>
          <p className="text-base font-poppins mt-12 w-[80%] sm:w-[90%] border-l-2 pl-4 md:text-sm">I am Panji Bhekti, ready to help you build stunning, high-performance apps. Discover my work and be a part of this story.</p>
          <div className=" mt-5">
            <button className=" py-2 px-4 bg-purple text-white rounded-md inline-block">
              <a href="" className="font-medium font-fredoka capitalize">
                show portofolio
              </a>
            </button>

            <button className="mt-6 py-2 px-4 bg-black text-white mx-4 rounded-md inline-block md:hidden">
              <a href="" className="font-medium font-fredoka capitalize">
                contact now
              </a>
            </button>
          </div>
        </div>
      </div>

      {/* Bagian kanan dengan kartu */}
      <div className="right">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className={`card ${awayCards.includes(index) ? "away" : ""}`}
            style={{
              transform: awayCards.includes(index) ? `translateY(-120vh) rotate(-48deg)` : `rotate(${index * -10}deg)`,
              zIndex: 4 - index,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default StackedCards;
