import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section id="projects" className="border-b border-neutral-900 pb-16">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.6 }}
        className="my-20 text-center text-4xl font-bold tracking-tight"
      >
        Projects
      </motion.h2>

      <div className="flex flex-col gap-12 px-4">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex flex-col lg:flex-row items-center lg:items-start bg-neutral-950/40 rounded-xl p-6 shadow-md hover:shadow-purple-700/20 transition-shadow duration-300"
          >
            {/* Image */}
            <div className="w-full lg:w-1/3 flex justify-center mb-4 lg:mb-0">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg w-40 h-40 object-cover border border-neutral-800"
              />
            </div>

            {/* Details */}
            <div className="w-full lg:w-2/3 lg:pl-8">
            <h6 className="text-xl font-semibold text-white mb-2">
  <a
    
    target="_blank"
    rel="noopener noreferrer"
    className="hover:underline text-purple-400"
  >
    {project.title}
  </a>
  <a className="text-gray-200" href={project.link}> - Link</a>
</h6>

              <p className="text-sm text-neutral-400 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="mr-2 mb-2 rounded bg-neutral-800 px-3 py-1 text-sm font-medium text-purple-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
