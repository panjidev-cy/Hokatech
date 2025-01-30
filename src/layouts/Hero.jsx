import profile from "../assets/profile.jpeg";

import { useEffect } from "react";
const Hero = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hide");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <header className=" bg-white w-full h-screen relative flex items-center justify-between md:items-center md:justify-center px-4    md:min-h-screen " id="home">
        <div className="w-1/2 md:w-full hide">
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

        <div className="relative border-2 shadow-md shadow-slate-200 rounded-lg overflow-hidden md:hidden">
          <img src={profile} alt="" className="w-[300px]  " />
          <div className="w-full h-12 bg-white absolute bottom-0 bg-opacity-10 backdrop-blur-sm">
            <h3 className="text-center text-lg font-poppins font-semibold py-2">anya grande</h3>
          </div>
        </div>
      </header>
    </>
  );
};

export default Hero;
