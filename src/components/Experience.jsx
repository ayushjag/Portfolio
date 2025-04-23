import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section id="experience" className="border-b border-neutral-900 pb-16">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.6 }}
        className="my-20 text-center text-4xl font-bold tracking-tight"
      >
        Experience
      </motion.h2>

      <div className="space-y-12 px-4">
        {EXPERIENCES.map((experience, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row lg:items-start lg:space-x-10"
          >
            {/* Year */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }}
              className="mb-2 w-full lg:w-1/4 text-center lg:text-left"
            >
              <p className="text-sm text-neutral-400">{experience.year}</p>
            </motion.div>

            {/* Details */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-3/4 max-w-3xl"
            >
              <h6 className="mb-2 text-lg font-semibold text-white">
                {experience.role}{" "}
                <span className="text-sm font-normal text-purple-400">
                  @ {experience.company}
                </span>
              </h6>
              <p className="mb-4 text-sm text-neutral-400 leading-relaxed">
                {experience.description}
              </p>
              <div className="flex flex-wrap">
                {experience.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="mr-2 mb-2 rounded bg-neutral-800 px-3 py-1 text-sm font-medium text-purple-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
