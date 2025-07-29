import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Mail, Lock, Sparkles, Leaf, Heart } from 'lucide-react';
import './Login.css';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', formData);
  };

  // Create floating particles
  const particles = Array.from({ length: 15 }, (_, i) => (
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
    <div className="login-container">
      {/* Animated Background Gradient */}
      <div className="login-bg-gradient" />
      
      {/* Floating Particles */}
      <div className="login-particles">
        {particles}
      </div>

      {/* Main Login Content */}
      <div className="login-content">
        {/* Floating Brand Elements */}
        <div className="floating-icon" style={{ top: '10%', left: '15%' }}>
          <Leaf className="icon-leaf" />
        </div>
        <div className="floating-icon" style={{ top: '20%', right: '20%' }}>
          <Sparkles className="icon-sparkles" />
        </div>
        <div className="floating-icon" style={{ top: '75%', left: '10%' }}>
          <Heart className="icon-heart" />
        </div>

        {/* Login Card */}
        <motion.div
          className="login-card"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Header */}
          <div className="login-header">
            <motion.h1 
              className="login-title"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Welcome Back
            </motion.h1>
            <motion.p 
              className="login-subtitle"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Sign in to continue your wellness journey
            </motion.p>
          </div>

          {/* Login Form */}
          <motion.form 
            className="login-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {/* Email Field */}
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <div className="input-container">
                <Mail className="input-icon" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="form-group">
              <label className="form-label">Password</label>
              <div className="input-container">
                <Lock className="input-icon" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="form-options">
              <label className="checkbox-container">
                <input type="checkbox" className="checkbox" />
                <span className="checkbox-text">Remember me</span>
              </label>
              <a href="#" className="forgot-password">
                Forgot Password?
              </a>
            </div>

            {/* Login Button */}
            <motion.button
              type="submit"
              className="login-button"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="button-text">Sign In</span>
            </motion.button>

            {/* Divider */}
            <div className="divider">
              <span className="divider-text">or continue with</span>
            </div>

            {/* Social Login Buttons */}
            <div className="social-buttons">
              <motion.button
                type="button"
                className="social-button google"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Google</span>
              </motion.button>
              <motion.button
                type="button"
                className="social-button facebook"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Facebook</span>
              </motion.button>
            </div>

            {/* Sign Up Link */}
            <div className="signup-link">
              <span className="signup-text">Don't have an account? </span>
              <a href="#" className="signup-button">Sign Up</a>
            </div>
          </motion.form>
        </motion.div>

        {/* Brand Badge */}
        <motion.div 
          className="brand-badge"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <span className="brand-text">Frutivá Premium</span>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;