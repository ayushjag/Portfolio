import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div id="contact" className="border-b border-neutral-900 pb-20 px-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl font-bold"
      >
        Get In Touch
      </motion.h2>

      <div className="text-center tracking-tight space-y-4 text-lg text-neutral-300">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
        >
          {CONTACT.address}
        </motion.p>

        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.8 }}
        >
          {CONTACT.phoneNo}
        </motion.p>

        <motion.a
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
          href={`mailto:${CONTACT.email}`}
          className="inline-block text-purple-400 hover:text-purple-300 border-b border-purple-400 hover:border-purple-300 transition duration-300"
        >
          {CONTACT.email}
        </motion.a>
      </div>
    </div>
  );
};

export default Contact;
