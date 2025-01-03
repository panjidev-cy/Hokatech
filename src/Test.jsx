import profile from "./assets/profile.jpeg";
import React from "react";
import CardList from "./Card";

const SkillsList = ({ skills }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="flex items-center space-x-2 bg-white shadow-md p-2 rounded-lg"
        >
          <div className="w-3 h-3 rounded-full bg-purple flex-shrink-0"></div>
          <span className="text-black text-sm font-medium">{skill}</span>
        </div>
      ))}
    </div>
  );
};

function Test() {
  const navigasi = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Tailwind CSS",
    "TypeScript",
    "Git",
    "Express.js",
    "MongoDB",
  ];

  return (
    <>
      <nav className="w-full px-6 md:px-28 bg-white fixed top-0 left-0 h-14 flex items-center justify-between shadow-md z-[999]">
        <header className="text-lg md:text-2xl font-medium font-poppins">zastin</header>
        <ul className="flex space-x-4 text-sm md:text-base">
          {navigasi.map((item, index) => (
            <li key={index}>
              <a href={item.path} className="hover:text-purple transition">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <main className="w-full px-6 md:px-28 pt-16">
        <header className="flex flex-col-reverse md:flex-row items-center justify-between gap-6">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Code That <span className="bg-yellow-300 px-2">Speaks,</span> <span className="bg-purple text-white px-2">Design</span> That Inspires
            </h1>
            <p className="text-sm md:text-base mt-4 md:mt-12 border-l-2 pl-4">
              I am Panji Bhekti, ready to help you build stunning, high-performance apps. Discover my work and be a part of this story.
            </p>
            <div className="mt-6 flex flex-col md:flex-row gap-4">
              <a
                href="#"
                className="py-2 px-4 bg-purple text-white rounded-md font-medium"
              >
                Show Portfolio
              </a>
              <a
                href="#"
                className="py-2 px-4 bg-black text-white rounded-md font-medium"
              >
                Contact Now
              </a>
            </div>
          </div>
          <div className="relative w-40 h-40 md:w-80 md:h-80 rounded-lg overflow-hidden shadow-lg">
            <img
              src={profile}
              alt="Profile"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 w-full bg-white bg-opacity-70 text-center py-2">
              <h3 className="font-semibold">Anya Grande</h3>
            </div>
          </div>
        </header>

        <section className="mt-16 md:mt-32 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="w-full">
            <img src={profile} alt="Profile" className="w-full max-w-md mx-auto" />
          </div>
          <div className="text-center md:text-left">
            <h4 className="text-yellow-300 uppercase font-bold inline-block bg-dark px-3 py-1 rounded-md">
              he?
            </h4>
            <h1 className="text-2xl md:text-3xl font-medium leading-tight mt-4">
              Hello, I’m <span className="text-purple bg-white px-2 py-1 inline-block rotate-6">Zastin</span>, a web <span className="bg-dark text-yellow-300 px-2 inline-block -rotate-6">developer</span>
            </h1>
            <p className="text-sm md:text-base mt-4 border-l-2 pl-4">
              I am Panji Bhekti, ready to help you build stunning, high-performance apps. Discover my work and be a part of this story.
            </p>
            <div className="mt-6">
              <h2 className="text-xl font-bold bg-dark text-yellow-300 inline-block px-2 py-1 rounded-md">
                Skills
              </h2>
              <SkillsList skills={skills} />
            </div>
          </div>
        </section>

        <section className="py-16 text-center bg-slate-100 mt-16">
          <p className="text-xl md:text-5xl font-medium leading-relaxed">
            Silence is strength; <span className="bg-dark text-yellow-300 px-2">in silence,</span> <br />
            <span className="bg-blue text-white inline-block rotate-12">creativity</span> finds its way.
          </p>
        </section>

        <section className="relative mt-16 flex flex-col items-center">
          <h1 className="text-[100px] md:text-[400px] font-bold opacity-25 absolute">
            Skills
          </h1>
          <div className="relative w-full">
            <CardList />
          </div>
        </section>
      </main>

      <footer className="bg-dark text-white py-10 px-6 md:px-28">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <h2 className="text-xl md:text-3xl font-bold">Zastin</h2>
            <p className="text-sm mt-2">"Membangun pengalaman digital yang menginspirasi."</p>
          </div>
          <div className="mt-6 md:mt-0">
            <ul className="text-center md:text-right space-y-2">
              <li>
                📩 Email: <a href="mailto:[email@example.com]" className="text-yellow-300">[email@example.com]</a>
              </li>
              <li>
                🌐 LinkedIn: <a href="https://linkedin.com/in/username" className="text-yellow-300">linkedin.com/in/username</a>
              </li>
              <li>
                📱 Telepon: <a href="tel:+6281234567890" className="text-yellow-300">+62 812 3456 7890</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm">Ikuti saya di:</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="https://facebook.com" className="hover:text-yellow-300">Facebook</a>
            <a href="https://twitter.com" className="hover:text-yellow-300">Twitter</a>
            <a href="https://instagram.com" className="hover:text-yellow-300">Instagram</a>
            <a href="https://github.com" className="hover:text-yellow-300">GitHub</a>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-slate-400">
          &copy; 2024 Zastin. All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default Test;
