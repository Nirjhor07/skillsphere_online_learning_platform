"use client";
import Image from "next/image";
import Nirjhor from "../../../../assets/images/nir.png";
import { motion } from "framer-motion";

const RightSideHome = () => {
  return (
    <div className="relative">
      <div className="w-full max-w-md bg-linear-to-b from-violet-50 via-blue-50 to-white mx-auto flex items-center justify-center">
        <Image src={Nirjhor} alt="Nirjhor" width={400} height={400} />
      </div>
      <motion.div
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}
        dragElastic={0.2}
        dragDirectionLock
        onDirectionLock={(axis) => console.log(`Locked to ${axis} axis`)}
        initial={{ opacity: 0, y: 50, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="card bg-white flex flex-col justify-center items-center w-3/10 rounded-xl shadow-2xl absolute left-73 top-40 p-0.5 sm:left-68"
      >
        <motion.p
          whileHover={{ scale: 1.1 }}
          className="text-blue-600 text-xl font-bold"
        >
          5+ courses
        </motion.p>
        <p className="font-light text-sm">Multiple Categories</p>
      </motion.div>
    </div>
  );
};

export default RightSideHome;
