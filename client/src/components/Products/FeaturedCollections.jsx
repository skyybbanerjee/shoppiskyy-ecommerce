import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import featuredImg from "../../assets/featured.webp";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function FeaturedCollections() {
  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center bg-green-50 rounded-3xl">
        {/* Left Content */}
        <motion.div
          className="lg:w-1/2 p-8 text-center lg:text-left"
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8 }}
          variants={textVariants}>
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            Comfort And Style
          </h2>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Apparel made for everyday life
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Discover high-quality, comfortable clothing that effortlessly blends
            fashion and function. Designed to make you look and feel great every
            day.
          </p>
          <Link
            to="/collections/all"
            className="bg-black text-white px-6 py-3 rounded-lg text-lg hover:bg-gray-800">
            Shop Now
          </Link>
        </motion.div>
        {/* Right Content */}
        <div className="lg:w-1/2">
          <img
            src={featuredImg}
            alt="Featured-Collection Img"
            className="w-full h-full object-cover lg:rounded-tr-3xl lg:rounded-br-3xl"
          />
        </div>
      </div>
    </section>
  );
}

export default FeaturedCollections;
