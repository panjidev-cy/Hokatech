import profile from "./assets/profile.jpeg"
import React from 'react';



import CardList from "./components/Card";
const SkillsList = ({ skills }) => {
  return (
    <div className="grid grid-cols-3 gap-x-8 gap-y-2">
      {skills.map((skill, index) => (
        <div key={index} className="list-disc flex items-star relative">
          <div className="w-3 h-3 rounded-full bg-purple  flex-shrink-0 absolute -top-1 -left-1 shadow-sm shadow-slate-300  border-2 border-slate-200"></div>
          <span className="bg-white text-black px-2 py-1 shadow-sm shadow-slate-300 rounded-sm mt-1">{skill}</span>
        </div>
      ))}
    </div>
  );
};
function AppLast() {
  const navigasi = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];
  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node.js',
    'Tailwind CSS',
    'TypeScript',
    'Git',
    'Express.js',
    'MongoDB',
  ];



  return (
    <>
      <nav className="w-full px-28 bg-white fixed top-0 left-0 ring-0 h-14 flex items-center justify-between shadow-md shadow-slate-100 z-[999]">
        <header className="text-2xl font-medium font-poppins">zastin</header>
        <nav>
          <ul>
            {
              navigasi.map((item, index) => {
                return (
                  <li key={index} className="inline-block mx-3 font-poppins font-normal text-sm">
                    <a href={item.path}>{item.name}</a>
                  </li>
                )
              })
            }
          </ul>
        </nav>

      </nav>
      <main  className="  w-full px-28">
        <header className=" bg-white w-full h-screen flex items-center justify-between px-4 ">
          <div className="w-1/2">
            <h1 className="text-5xl font-bold font-poppins leading-tight">Code That <span className="px-2 bg-yellow-300">Speaks,</span> <span className=" bg-purple text-white">Design</span>That Inspires</h1>
            <p className="text-base font-poppins mt-12 w-[80%] border-l-2 pl-4">
              I am Panji Bhekti, ready to help you build stunning, high-performance apps. Discover my work and be a part of this story.
            </p>

            <button className=" py-2 px-4 bg-purple text-white rounded-md">
              <a href="" className="font-medium font-fredoka capitalize">
                show portofolio
              </a>
            </button>
            <button className="mt-6 py-2 px-4 bg-black text-white mx-4 rounded-md">
              <a href="" className="font-medium font-fredoka capitalize">
                contact now
              </a>
            </button>
          </div>

          <div className="relative border-2 shadow-md shadow-slate-200 rounded-lg overflow-hidden ">
            <img src={profile} alt="" className="w-[300px]  "/>
            <div className="w-full h-12 bg-white absolute bottom-0 bg-opacity-10 backdrop-blur-sm">
              <h3 className="text-center text-lg font-poppins font-semibold py-2">anya grande</h3>
            </div>
          </div>

        </header>

        <section className="w-full h-screen flex items-center justify-between ">
          <div className="w-1/2">
            <div className="overflow-hidden ">
              <img src={profile} alt="" className="w-[400px]"/>
            </div>
          </div>
          <div className=" w-1/2">
            <h4 className="bg-dark text-yellow-300 inline-block px-3 font-afacad font-bold uppercase shadow-md shadow-slate-300 rounded-md ">he?</h4>
            <h1 className="text-3xl font-medium font-poppins leading-tight">hello im <span className="text-purple bg-white shadow-lg shadow-slate-300 px-2 py-1 font-semibold capitalize -rotate-6 inline-block">zastin</span> a web <span className="bg-dark text-yellow-300  px-2 inline-block rotate-6">developer</span></h1>
            <p className="text-base font-poppins mt-10 w-[90%] border-l-2 pl-4">
              I am Panji Bhekti, ready to help you build stunning, high-performance apps. Discover my work and be a part of this story.
            </p>
            
            <div className="pt-4 ">
              <h1 className="text-2xl font-bold mb-4 font-poppins bg-dark text-yellow-300 inline-block px-2 py-1 rounded-md">Skills</h1>
              <SkillsList skills={skills} />
            </div>
          </div>
        </section>


        <section className="w-full py-20 text-center bg-slate-100 absolute left-0 right-0">
          < span className="text-5xl font-medium font-poppins leading-relaxed">Silence is strength; <span className="bg-dark text-yellow-300 px-2 shadow-lg shadow-slate-400">in silence,</span> <br /> <span className="bg-blue text-white shadow-lg shadow-purple inline-block rotate-12 font-semibold">creativity</span> finds its way.</span>
        </section>
        


        <section className="w-full h-screen mt-96 flex flex-col items-center justify-center relative md:top-72 md:h-fulls">
          <h1 className="font-bold text-[400px] opacity-25  bottom-28 font-poppins absolute">skills</h1>
          <div className=" absolute w-full flex items-center justify-center">
            <CardList />
          </div>
          
        </section>


        <footer className="bg-dark text-white py-10 px-28 md:px-6 absolute left-0 right-0">
        <div className="grid grid-cols-2 md:grid-cols-1 gap-8 p-4 place-items-center mb-12">
          <div className="w-full">
            <h1 className="text-xl font-bold font-poppins">zastin</h1>
            <p className="text-xs opacity-50 font-poppins mt-4 w-[80%] border-l-2 pl-2">
              I am Panji Bhekti, ready to help you build stunning, high-performance apps. Discover my work and be a part of this story.
            </p>
          </div>
          <div>
            <ul className="space-y-2">
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

          <div className="text-center">
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

      </main>

    </>
  )
}

export default AppLast
