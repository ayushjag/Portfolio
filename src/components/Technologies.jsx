import { SiMongodb, SiMysql, SiExpress, SiNodedotjs } from "react-icons/si";
import { TbLetterC } from "react-icons/tb";
import { PiFileCppDuotone } from "react-icons/pi";
import { FaJava } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center font-bold text-4xl"
      >
        Technologies
      </motion.h2>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbLetterC className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <PiFileCppDuotone className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaJava className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div variants={iconVariants(3.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaJs className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div variants={iconVariants(4)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div variants={iconVariants(4.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiExpress className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div variants={iconVariants(5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiNodedotjs className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div variants={iconVariants(5.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div variants={iconVariants(6)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMysql className="text-7xl text-cyan-400" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
