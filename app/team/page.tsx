"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const Founders = () => {
  return (
    <div
      style={{ backgroundImage: "url(main-bg.webp)" }}
      className="min-h-screen w-screen flex items-center justify-center bg-cover bg-center"
    >
      <div className="flex flex-col gap-20 max-w-[80%] text-center items-center">
        <motion.h1
          className="font-semibold text-white text-[50px]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Founders
        </motion.h1>

        <div className="flex flex-col lg:flex-row gap-16 justify-center"> {/* Increased gap to 16 */}
          {/* CEO */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="/Andy.jpg"
              alt="CEO"
              width={200}
              height={200}
              className="rounded-full shadow-lg"
            />
            <h3 className="text-white font-semibold text-[24px] mt-4">
              Andi Ahmad Zaelani
            </h3>
            <p className="text-gray-400 text-[18px]">CEO</p>

            {/* Social Media Links */}
            <div className="flex gap-4 mt-4">
              <a href="https://www.instagram.com/andy_parawali" target="_blank">
                <FaInstagram className="text-pink-600 text-[30px] hover:text-pink-400" />
              </a>
              <a href="https://www.linkedin.com/in/andiahmadz/" target="_blank">
                <FaLinkedin className="text-blue-500 text-[30px] hover:text-blue-300" />
              </a>
            </div>
          </motion.div>

          {/* CTO */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Image
              src="/Raihan.jpg"
              alt="CTO"
              width={200}
              height={200}
              className="rounded-full shadow-lg"
            />
            <h3 className="text-white font-semibold text-[24px] mt-4">
              Raihan Desfitra
            </h3>
            <p className="text-gray-400 text-[18px]">CTO</p>

            {/* Social Media Links */}
            <div className="flex gap-4 mt-4">
              <a href="https://www.instagram.com/raihan.desfitra/" target="_blank">
                <FaInstagram className="text-pink-600 text-[30px] hover:text-pink-400" />
              </a>
              <a href="https://www.linkedin.com/in/raihan-desfitra-0a6403234/" target="_blank">
                <FaLinkedin className="text-blue-500 text-[30px] hover:text-blue-300" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Founders;
