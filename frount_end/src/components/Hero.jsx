import React from "react";
import heroImg from "../assets/971.png"; // replace with your image

export default function Hero() {
  return (
    <section className="  mt-20">
      <div className="max-w-screen-2xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-10 border rounded-3xl dark:bg-gray-900 bg-gray-50">
        {/* Left content */}
        <div className="flex-1">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
            We build great digital <br />
            <span className="text-sky-600">products</span> and{" "}
            <span className="text-sky-600">AI solutions.</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
            We partner with enterprises, startups, and governments worldwide to
            develop cutting-edge technology products and Artificial Intelligence
            solutions that help them achieve their goals.
          </p>

          <div className="mt-8">
            <a
              href="#contact"
              className="inline-flex items-center bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg shadow-md transition"
            >
              Book a free consultation →
            </a>
          </div>
        </div>

        {/* Right image */}
        <div className="flex-1 flex justify-center">
          <img
            src={heroImg}
            alt="Hero illustration"
            className="max-w-md rounded-lg shadow-lg bg-slate-800"
          />
        </div>
      </div>
    </section>
  );
}
