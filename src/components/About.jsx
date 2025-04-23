import { ABOUT_TEXT } from "../constants";
import aboutImg from "../assets/about.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="border-b border-neutral-900 pb-16">
      <h2 className="my-20 text-center text-4xl font-bold tracking-tight">
        About <span className="text-neutral-500">Me</span>
      </h2>

      <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-8">
        {/* Image Section */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 px-4"
        >
          <div className="flex justify-center">
            <img
              className="rounded-2xl shadow-lg max-w-full h-auto"
              src={aboutImg}
              alt="About"
            />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 px-4"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="text-gray-300 text-base leading-relaxed font-light max-w-xl py-6">
              {ABOUT_TEXT}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
