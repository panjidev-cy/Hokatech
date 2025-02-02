// import SkillsList from "../components/SkillsList";
import profile from "../assets/profile.jpeg";
import { motion } from "framer-motion";
import { fadeIn } from "../variant";
const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Tailwind CSS", "TypeScript", "Git", "Express.js", "MongoDB"];

const About = () => {
  return (
    <>
      <section className="w-full min-h-screen flex items-center justify-between  md:mb-12 scr" id="about">
        <div className="w-1/2 lg:hidden ">
          <motion.div className="overflow-hidden " variants={fadeIn("left")} initial="hidden" whileInView={"show"}>
            <img src={profile} alt="" className="w-[400px]" />
          </motion.div>
        </div>
        <motion.div className="w-1/2 lg:w-full md:min-h-screen" variants={fadeIn("right")} initial="hidden" whileInView={"show"}>
          <h4 classN ame="bg-dark text-yellow-300 inline-block px-3 font-afacad font-bold uppercase shadow-md shadow-slate-300 rounded-md">
            he?
          </h4>
          <h1 className="text-3xl font-medium font-poppins leading-tight scroll-mt-16 md:scroll-mt-24">
            hello im <span className="text-purple bg-white shadow-lg shadow-slate-300 px-2 py-1 font-semibold capitalize -rotate-6 inline-block">Hoka</span> a web{" "}
            <span className="bg-dark text-yellow-300 px-2 inline-block rotate-6">developer</span>
          </h1>
          <p className="text-base font-poppins mt-10 w-[90%] border-l-2 pl-4">I am Panji Bhekti, ready to help you build stunning, high-performance apps. Discover my work and be a part of this story.</p>
          {/* <div className="pt-4">
            <h1 className="text-2xl font-bold mb-4 font-poppins bg-dark text-yellow-300 inline-block px-2 py-1 rounded-md">Skills</h1>
            <SkillsList skills={skills} />
          </div> */}
        </motion.div>
      </section>
    </>
  );
};

export default About;
