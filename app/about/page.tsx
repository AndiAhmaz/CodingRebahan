"use client";
import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div
      style={{ backgroundImage: "url(/bg-3.jpg)" }}
      className="h-screen w-screen flex items-center justify-center bg-cover bg-center"
    >
      <div className="flex flex-col lg:flex-row gap-20 max-w-[80%] text-center lg:text-left items-center lg:items-start">
        {/* Company Description */}
        <div className="flex flex-col items-center lg:items-start gap-4">
          <h1 className="font-semibold text-white text-[50px]">
            About Our Company
          </h1>
          <p className="text-gray-400 text-[20px] max-w-[500px]">
            We are a cutting-edge technology company committed to delivering
            innovative solutions for the modern world. Our team specializes in
            software development, web design, and digital transformation to
            help businesses grow and thrive in an ever-changing digital
            landscape.
          </p>
          <p className="text-gray-400 text-[20px] max-w-[500px]">
            With years of experience, we pride ourselves on using the latest
            technology and staying ahead of industry trends to deliver the best
            results for our clients.
          </p>
        </div>

        {/* Company Image */}
        <div className="flex justify-center">
          <Image
            src="/kantor.JFIF"
            alt="Company Image"
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
