import React from 'react'
import ProductShowcase from '../Sections/ProductShowcase'
import { motion, AnimatePresence } from 'framer-motion';
import Footer from '../Sections/Footer'

const Products = () => {
  return (
   <>
        
        <AnimatePresence mode="wait">
          <ProductShowcase />
        </AnimatePresence>
         <Footer />
        
     
   </>
  )
}

export default Products