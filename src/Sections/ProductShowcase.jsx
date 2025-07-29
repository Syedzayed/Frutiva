import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { products } from '../Data/Products';
import './Product.css'
import { Sparkles, Leaf, Heart } from 'lucide-react';

const ProductShowcase = () => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  // Create floating particles
  const particles = Array.from({ length: 20 }, (_, i) => (
    <div
      key={i}
      className="particle"
      style={{
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 15}s`,
        animationDuration: `${15 + Math.random() * 10}s`
      }}
    />
  ));

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
      {/* Main Page Container - Centers everything */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        width: '100%'
      }}>
        <div style={{
          width: '100%',
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 1rem'
        }}>
          {/* Animated Background Gradient */}
          <div className="showcase-bg-gradient" />
          
          {/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles}
          </div>

          {/* Main Content Container */}
          <div className="relative z-10 flex flex-col min-h-screen">
        {/* Hero Section */}
        <motion.section 
          className="flex-shrink-0 flex items-center justify-center pt-20 pb-16 px-4"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="w-full max-w-7xl mx-auto text-center relative">
            {/* Floating Brand Elements */}
            <div className="absolute hero-floating-icons" style={{ top: '2.5rem', left: '25%' }}>
              <Leaf className="w-8 h-8 text-green-400 opacity-60" />
            </div>
            <div className="absolute hero-floating-icons" style={{ top: '5rem', right: '25%' }}>
              <Sparkles className="w-6 h-6 text-yellow-400 opacity-60" />
            </div>
            <div className="absolute hero-floating-icons" style={{ top: '8rem', left: '33.333333%' }}>
              <Heart className="w-7 h-7 text-red-400 opacity-60" />
            </div>

            <motion.h1 
              className="text-7xl md:text-8xl font-bold mb-6 gradient-text font-serif"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Our Complete Collection
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-12 "
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              Discover our premium range of fermented fruit juices, each crafted with precision and passion to deliver exceptional taste and wellness benefits.
            </motion.p>

            <motion.div 
              className="flex flex-wrap justify-center gap-6 mb-16"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              <div className="feature-badge text-green-400">
                <span className="font-semibold">12 Unique Flavors</span>
              </div>
              <div className="feature-badge text-blue-400">
                <span className="font-semibold">3+ Billion Probiotics</span>
              </div>
              <div className="feature-badge text-purple-400">
                <span className="font-semibold">Premium Ingredients</span>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Product Grid - Centered Content */}
        <motion.section 
          className="flex-1 flex items-center justify-center px-4 pb-20"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
        >
          <div className="w-full max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {products.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 100, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: 1.3 + (index * 0.1),
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ 
                      y: -10, 
                      scale: 1.05,
                      transition: { duration: 0.3 }
                    }}
                    className="product-card"
                    onClick={() => handleProductClick(product.id)}
                  >
                    {/* Glow effect on hover */}
                    <div 
                      className="product-glow"
                      style={{ 
                        background: `radial-gradient(circle at center, ${product.color}, transparent)`
                      }}
                    />
                    
                    {/* Product Image */}
                    <div className="relative mb-6 overflow-hidden rounded-lg">
                      <img 
                        src={product.image}
                        alt={product.name}
                        className="product-image"
                      />
                      
                      {/* Floating fruit elements */}
                      <div className="absolute floating-element" style={{ top: '0.5rem', right: '0.5rem', backgroundColor: product.color }} />
                      <div className="absolute floating-element" style={{ bottom: '0.5rem', left: '0.5rem', backgroundColor: product.accentColor }} />
                    </div>

                    {/* Product Info */}
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold mb-2 text-white transition-all duration-300">
                        {product.name}
                      </h3>
                      
                      <p className="text-sm text-gray-400 mb-4 font-medium">
                        {product.shortDescription}
                      </p>
                      
                      <p className="text-gray-300 mb-6 line-clamp-2">
                        {product.description}
                      </p>

                      {/* Price and Status */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-bold text-white">
                          ${product.price}
                        </span>
                        <span className="launch-badge">
                          Launching Soon
                        </span>
                      </div>

                      {/* Learn More Button */}
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full premium-button"
                        style={{
                          background: `linear-gradient(135deg, ${product.color}, ${product.accentColor})`
                        }}
                      >
                        Learn More
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section 
          className="flex-shrink-0 py-20 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Transform Your Health?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our exclusive launch list and be the first to experience Frutivá's premium fermented juices.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="premium-button text-lg px-12 py-4"
            >
              Notify Me When Available
            </motion.button>
          </div>
        </motion.section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;