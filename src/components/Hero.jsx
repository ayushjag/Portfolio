import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/myProfile.png";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay,
      duration: 0.6,
      ease: "easeOut",
    },
  },
});

const Hero = () => {
  return (
    <section className="border-b border-neutral-800 pb-16 lg:pb-32">
      <div className="flex flex-col-reverse items-center lg:flex-row lg:items-start lg:justify-between">
        {/* Left Side (Text Content) */}
        <div className="w-full lg:w-1/2 text-center lg:text-left px-4">
          <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-white"
          >
            Ayush Jagwan
          </motion.h1>

          <motion.h2
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="mt-4 bg-gradient-to-r from-pink-400 via-slate-500 to-purple-500 bg-clip-text text-2xl md:text-3xl font-semibold text-transparent"
          >
            Web Developer
          </motion.h2>

          <motion.p
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="mt-6 max-w-xl text-base text-gray-300 font-light leading-relaxed"
          >
            {HERO_CONTENT}
          </motion.p>

          <div className="mt-6">
            <a
              href="https://drive.google.com/file/d/1nsUZaYHxaDGNuFRVl9rYyPlaQvtdNt2b/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-400 via-slate-500 to-purple-500 bg-clip-text text-xl md:text-2xl font-semibold text-transparent hover:underline"
            >
              Resume
              <FontAwesomeIcon  icon={faArrowUpRightFromSquare} className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>

        {/* Right Side (Image) */}
        <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            src={profilePic}
            alt="Ayush Jagwan"
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-lg border-4 border-slate-700"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
