import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../Data/Products';
import './Product.css'
import { 
  ArrowLeft, 
  Star, 
  Heart, 
  Share2, 
  ChevronLeft, 
  ChevronRight,
  Zap,
  Shield,
  Leaf,
  Award
} from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('overview');
  
  const product = products.find(p => p.id === id);
  const currentIndex = products.findIndex(p => p.id === id);
  
  if (!product) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <p className="text-white text-xl">Product not found</p>
      </div>
    );
  }

  const nextProduct = () => {
    const nextIndex = (currentIndex + 1) % products.length;
    navigate(`/product/${products[nextIndex].id}`);
  };

  const prevProduct = () => {
    const prevIndex = currentIndex === 0 ? products.length - 1 : currentIndex - 1;
    navigate(`/product/${products[prevIndex].id}`);
  };

  const relatedProducts = products
    .filter(p => p.id !== product.id)
    .slice(0, 3);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="detail-container"
      style={{
        background: `linear-gradient(135deg, ${product.color}15, ${product.accentColor}10, #000000)`
      }}
    >
      {/* Background Elements */}
      <div className="detail-bg" />
      <div 
        className="detail-bg-overlay"
        style={{
          background: `radial-gradient(circle at 30% 20%, ${product.color}, transparent 50%), radial-gradient(circle at 70% 80%, ${product.accentColor}, transparent 50%)`
        }}
      />

      {/* Navigation */}
      <motion.div 
        className="fixed z-50"
        style={{ top: '1.5rem', left: '1.5rem' }}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.button
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => navigate('/')}
          className="nav-button"
        >
          <ArrowLeft className="w-6 h-6" />
        </motion.button>
      </motion.div>

      {/* Product Navigation */}
      <div className="fixed z-40 space-y-4" style={{ top: '50%', left: '1.5rem', transform: 'translateY(-50%)' }}>
        <motion.button
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.9 }}
          onClick={prevProduct}
          className="nav-button"
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.9 }}
          onClick={nextProduct}
          className="nav-button"
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>
      </div>

      <div className="relative z-10 pt-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Product Image */}
            <motion.div 
              className="relative"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative group">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="product-detail-image"
                  style={{
                    filter: `drop-shadow(0 20px 40px ${product.color}40)`
                  }}
                />
                
                {/* Floating Elements */}
                <div className="absolute floating" style={{ top: '-1rem', right: '-1rem' }}>
                  <div 
                    className="price-badge"
                    style={{ background: `linear-gradient(135deg, ${product.color}, ${product.accentColor})` }}
                  >
                    ${product.price}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.h1 
                className="text-5xl md:text-6xl font-bold mb-4 text-white"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                {product.name}
              </motion.h1>
              
              <motion.p 
                className="text-2xl mb-6 font-medium"
                style={{ color: product.accentColor }}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                {product.tagline}
              </motion.p>

              <motion.p 
                className="text-gray-300 text-lg mb-8 leading-relaxed"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                {product.description}
              </motion.p>

              {/* Flavor Profile */}
              <motion.div 
                className="mb-8"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <h3 className="text-white text-lg font-semibold mb-4">Flavor Profile</h3>
                <div className="space-y-3">
                  {Object.entries(product.flavorProfile).map(([key, value]) => (
                    <div key={key} className="flex items-center space-x-4">
                      <span className="text-gray-400 capitalize" style={{ width: '5rem' }}>{key}:</span>
                      <div className="flavor-bar">
                        <motion.div
                          className="flavor-bar-fill"
                          style={{ background: `linear-gradient(90deg, ${product.color}, ${product.accentColor})` }}
                          initial={{ width: 0 }}
                          animate={{ width: `${(value / 10) * 100}%` }}
                          transition={{ duration: 1, delay: 1.2 + (Object.keys(product.flavorProfile).indexOf(key) * 0.1) }}
                        />
                      </div>
                      <span className="text-white" style={{ width: '2rem' }}>{value}/10</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Quick Actions */}
              <motion.div 
                className="flex items-center space-x-4 mb-8"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.1 }}
              >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="glass-card p-3 text-white hover:text-red-400 transition-colors duration-300"
                >
                  <Heart className="w-6 h-6" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="glass-card p-3 text-white hover:text-blue-400 transition-colors duration-300"
                >
                  <Share2 className="w-6 h-6" />
                </motion.button>
                <div className="flex items-center space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-gray-400 ml-2">(4.9/5)</span>
                </div>
              </motion.div>

              {/* Purchase Section */}
              <motion.div 
                className="space-y-4"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <label className="text-white">Quantity:</label>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="quantity-button"
                    >
                      -
                    </button>
                    <span className="text-white font-bold w-8 text-center">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="quantity-button"
                    >
                      +
                    </button>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="launch-button"
                  style={{
                    background: `linear-gradient(135deg, ${product.color}, ${product.accentColor})`
                  }}
                >
                  Launching Soon - Notify Me
                </motion.button>
              </motion.div>
            </motion.div>
          </div>

          {/* Detailed Information Tabs */}
          <motion.div 
            className="mb-16"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center mb-8 space-x-4">
              {['overview', 'ingredients', 'nutrition', 'story'].map((tab) => (
                <motion.button
                  key={tab}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTab(tab)}
                  className={`tab-button ${activeTab === tab ? 'active' : ''}`}
                  style={{
                    background: activeTab === tab 
                      ? `linear-gradient(135deg, ${product.color}, ${product.accentColor})`
                      : 'transparent'
                  }}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </motion.button>
              ))}
            </div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="tab-content"
              >
                {activeTab === 'overview' && (
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                        <Zap className="w-6 h-6 mr-2" style={{ color: product.color }} />
                        Health Benefits
                      </h3>
                      <ul className="space-y-2">
                        {product.healthBenefits.map((benefit, index) => (
                          <li key={index} className="text-gray-300 flex items-center">
                            <div 
                              className="w-2 h-2 rounded-full mr-3"
                              style={{ backgroundColor: product.accentColor }}
                            />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                        <Shield className="w-6 h-6 mr-2" style={{ color: product.color }} />
                        Perfect Pairings
                      </h3>
                      <ul className="space-y-2">
                        {product.suggestedPairings.map((pairing, index) => (
                          <li key={index} className="text-gray-300 flex items-center">
                            <div 
                              className="w-2 h-2 rounded-full mr-3"
                              style={{ backgroundColor: product.accentColor }}
                            />
                            {pairing}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {activeTab === 'ingredients' && (
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                      <Leaf className="w-6 h-6 mr-2" style={{ color: product.color }} />
                      Premium Ingredients
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {product.ingredients.map((ingredient, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="ingredient-card"
                        >
                          <h4 className="text-white font-semibold mb-2">{ingredient}</h4>
                          <p className="text-gray-400 text-sm">
                            Premium quality ingredient carefully selected for optimal flavor and health benefits.
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'nutrition' && (
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                      <Award className="w-6 h-6 mr-2" style={{ color: product.color }} />
                      Nutrition Facts
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="nutrition-card">
                        <div className="text-3xl font-bold text-white mb-2">{product.nutritionFacts.calories}</div>
                        <div className="text-gray-400">Calories per serving</div>
                      </div>
                      <div className="nutrition-card">
                        <div className="text-3xl font-bold mb-2" style={{ color: product.color }}>
                          {product.nutritionFacts.probiotics}
                        </div>
                        <div className="text-gray-400">Live probiotics</div>
                      </div>
                      <div className="nutrition-card">
                        <h4 className="text-white font-semibold mb-3">Essential Vitamins</h4>
                        <ul className="space-y-1">
                          {product.nutritionFacts.vitamins.map((vitamin, index) => (
                            <li key={index} className="text-gray-300 text-sm">{vitamin}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'story' && (
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6">Fermentation Story</h3>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      {product.fermentationStory}
                    </p>
                    <div className="glass-card p-6">
                      <h4 className="text-white font-semibold mb-3">Our Commitment</h4>
                      <p className="text-gray-300">
                        Every bottle of {product.name} represents our dedication to crafting the perfect 
                        balance of flavor, nutrition, and wellness. We use only the finest ingredients 
                        and time-tested fermentation techniques to ensure every sip delivers exceptional quality.
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Related Products */}
          <motion.section 
            className="pb-20"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <h2 className="text-3xl font-bold text-white text-center mb-12">You Might Also Like</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct, index) => (
                <motion.div
                  key={relatedProduct.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.7 + (index * 0.1) }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="related-product-card"
                  onClick={() => navigate(`/product/${relatedProduct.id}`)}
                >
                  <img 
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="related-product-image"
                  />
                  <h3 className="text-white font-bold text-lg mb-2">{relatedProduct.name}</h3>
                  <p className="text-gray-400 text-sm mb-3">{relatedProduct.shortDescription}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-white font-bold">${relatedProduct.price}</span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="related-product-button"
                      style={{
                        background: `linear-gradient(135deg, ${relatedProduct.color}, ${relatedProduct.accentColor})`
                      }}
                    >
                      View Details
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductDetail;