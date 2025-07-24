import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './FrutivaHero.css';

// Product Images
import OrangeJuice from '../assets/Productimages/Orangejuice.png';
import Berrybloom from '../assets/Productimages/Berrybloomjuice.png';
import Mintsplash from '../assets/Productimages/Mintsplashjuice.png';
import Coolgrape from '../assets/Productimages/Coolgrapejuice.png';

// Floating Items
import OrangeFloat from '../assets/FloatingItems/orange-zest-float-orange-slice.png';
import BerryFloat from '../assets/FloatingItems/berry-bloom-float-berry-splash.png';
import MintFloat from '../assets/FloatingItems/mint-splash-float-mint-leaf.png';
import GrapeFloat from '../assets/FloatingItems/cool-grape-float-mini-grape-bunch.png';

const bottles = [
  {
    image: OrangeJuice,
    name: "Orange Zest",
    float: OrangeFloat,
    float1: OrangeFloat,
  },
  {
    image: Berrybloom,
    name: "Berry Bloom",
    float: BerryFloat,
    float1: BerryFloat,
  },
  {
    image: Mintsplash,
    name: "Mint Splash",
    float: MintFloat,
    float1: MintFloat,
  },
  {
    image: Coolgrape,
    name: "Cool Grape",
    float: GrapeFloat,
    float1: GrapeFloat,
  },
];

const FrutivaHero = () => {
  const [currentBottleIndex, setCurrentBottleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBottleIndex((prevIndex) => (prevIndex + 1) % bottles.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentBottle = bottles[currentBottleIndex];

  return (
    <section className="hero-container">
      {/* Background Gradient */}
      <div className="hero-gradient"></div>

      {/* Faint Background Text */}
      <motion.h2
        className="hero-behind-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.12 }}
        transition={{ duration: 1.5 }}
      >
        Refreshingly Pure.
      </motion.h2>

      <div className="hero-content">
        {/* Bottle Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentBottle.image}
            className="bottle-container"
            initial={{ opacity: 0, rotate: -15, scale: 0.9 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 15, scale: 0.9 }}
            transition={{ duration: 1 }}
          >
            {/* Floating items */}
          {/* Floating items */}
<motion.img
  key={`${currentBottle.name}-float-1`}
  src={currentBottle.float}
  alt={`${currentBottle.name} float`}
  className="floating-item"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -30 }}
  transition={{ duration: 1 }}
/>

<motion.img
  key={`${currentBottle.name}-float-2`}
  src={currentBottle.float1}
  alt={`${currentBottle.name} float-1`}
  className="floating-item-1"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -30 }}
  transition={{ duration: 1 }}
/>

            {/* Main Bottle */}
            <motion.img
              src={currentBottle.image}
              alt={currentBottle.name}
              className="bottle-image rotating-bottle"
            />

            {/* Shadow */}
            <div className="bottle-shadow"></div>
          </motion.div>
        </AnimatePresence>

        {/* Flavor Name */}
        <AnimatePresence mode="wait">
          <motion.span
            key={currentBottle.name}
            className="flavor-label"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            {currentBottle.name}
          </motion.span>
        </AnimatePresence>

        {/* Tagline */}
        <motion.p
          className="hero-tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Naturally fermented. Unforgettably fresh.
        </motion.p>

        {/* CTA Buttons */}
        <div className="hero-cta">
          <motion.button
            className="cta-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Try Frutivá →
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default FrutivaHero;
