export const products = [
  {
    id: 'orange-zest',
    name: 'Orange Zest',
    tagline: 'Classic Citrus Burst',
    shortDescription: 'Vibrant citrus energy',
    description: 'A perfect balance of sweet and tangy, our Orange Zest delivers the pure essence of freshly squeezed oranges with a probiotic twist that awakens your senses.',
    ingredients: ['Fresh Oranges', 'Natural Probiotics', 'Organic Cane Sugar', 'Citrus Peel Extract'],
    healthBenefits: ['High in Vitamin C', 'Immune System Support', 'Natural Energy Boost', 'Digestive Health'],
    flavorProfile: { sweetness: 7, tartness: 6, intensity: 8 },
    color: '#ff8c42',
    accentColor: '#ffa366',
    price: 4.99,
    image: 'https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=400',
    fermentationStory: 'Fermented for 72 hours using traditional methods, allowing natural probiotics to develop while preserving the bright citrus flavor.',
    suggestedPairings: ['Morning breakfast', 'Post-workout refresh', 'Afternoon energy boost'],
    nutritionFacts: {
      probiotics: '2 billion CFU',
      vitamins: ['Vitamin C', 'Folate', 'Thiamine'],
      calories: 45
    }
  },
  {
    id: 'berry-bloom',
    name: 'Berry Bloom',
    tagline: 'Mixed Berry Explosion',
    shortDescription: 'Antioxidant powerhouse',
    description: 'A symphony of berries including blueberries, strawberries, and raspberries, carefully fermented to create a complex flavor profile rich in antioxidants.',
    ingredients: ['Mixed Berries', 'Blueberry Extract', 'Natural Probiotics', 'Organic Honey'],
    healthBenefits: ['Rich in Antioxidants', 'Anti-inflammatory', 'Brain Health Support', 'Heart Health'],
    flavorProfile: { sweetness: 8, tartness: 5, intensity: 7 },
    color: '#8e4ec6',
    accentColor: '#a569d1',
    price: 5.49,
    image: 'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=400',
    fermentationStory: 'Our berries are cold-pressed and fermented at low temperatures to preserve delicate anthocyanins and natural enzymes.',
    suggestedPairings: ['Evening relaxation', 'Pre-workout fuel', 'Dessert alternative'],
    nutritionFacts: {
      probiotics: '2.5 billion CFU',
      vitamins: ['Vitamin C', 'Vitamin K', 'Manganese'],
      calories: 52
    }
  },
  {
    id: 'mint-splash',
    name: 'Mint Splash',
    tagline: 'Refreshing Mint Fusion',
    shortDescription: 'Cool refreshment',
    description: 'Crisp and invigorating, our Mint Splash combines fresh mint with subtle lime notes, creating the perfect refreshing drink for any time of day.',
    ingredients: ['Fresh Mint Leaves', 'Lime Extract', 'Natural Probiotics', 'Coconut Water'],
    healthBenefits: ['Digestive Aid', 'Natural Cooling', 'Mental Clarity', 'Breath Freshening'],
    flavorProfile: { sweetness: 4, tartness: 3, intensity: 6 },
    color: '#4ecdc4',
    accentColor: '#6dd9d2',
    price: 4.79,
    image: 'https://images.pexels.com/photos/1414651/pexels-photo-1414651.jpeg?auto=compress&cs=tinysrgb&w=400',
    fermentationStory: 'Mint leaves are carefully selected and fermented using our signature process that maintains the essential oils responsible for that refreshing taste.',
    suggestedPairings: ['Hot summer days', 'After spicy meals', 'Meditation sessions'],
    nutritionFacts: {
      probiotics: '1.8 billion CFU',
      vitamins: ['Vitamin A', 'Vitamin C', 'Iron'],
      calories: 35
    }
  },
  {
    id: 'cool-grape',
    name: 'Cool Grape',
    tagline: 'Smooth Grape Refreshment',
    shortDescription: 'Elegant sophistication',
    description: 'Made from premium Concord grapes, this sophisticated blend offers a smooth, refined taste with subtle complexity from our fermentation process.',
    ingredients: ['Concord Grapes', 'Natural Probiotics', 'Grape Skin Extract', 'Organic Sugar'],
    healthBenefits: ['Heart Health', 'Natural Resveratrol', 'Antioxidant Rich', 'Cognitive Support'],
    flavorProfile: { sweetness: 9, tartness: 3, intensity: 6 },
    color: '#6b46c1',
    accentColor: '#8b5fbf',
    price: 5.29,
    image: 'https://images.pexels.com/photos/760281/pexels-photo-760281.jpeg?auto=compress&cs=tinysrgb&w=400',
    fermentationStory: 'Our grapes undergo a gentle fermentation process that enhances natural sugars while developing beneficial probiotics.',
    suggestedPairings: ['Evening wind-down', 'Elegant dinners', 'Social gatherings'],
    nutritionFacts: {
      probiotics: '2.2 billion CFU',
      vitamins: ['Vitamin C', 'Vitamin K', 'Potassium'],
      calories: 58
    }
  },
  {
    id: 'tropical-storm',
    name: 'Tropical Storm',
    tagline: 'Pineapple, Mango, Passion Fruit Blend',
    shortDescription: 'Exotic adventure',
    description: 'Transport yourself to paradise with this exotic blend of tropical fruits, perfectly balanced and fermented to create a vacation in every sip.',
    ingredients: ['Pineapple', 'Mango', 'Passion Fruit', 'Natural Probiotics', 'Coconut Extract'],
    healthBenefits: ['Vitamin C Boost', 'Digestive Enzymes', 'Mood Enhancement', 'Immune Support'],
    flavorProfile: { sweetness: 9, tartness: 4, intensity: 8 },
    color: '#f59e0b',
    accentColor: '#fbbf24',
    price: 5.99,
    image: 'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=400',
    fermentationStory: 'Each tropical fruit is individually fermented before blending, preserving unique flavor notes and maximizing probiotic diversity.',
    suggestedPairings: ['Beach days', 'Tropical meals', 'Celebration moments'],
    nutritionFacts: {
      probiotics: '2.8 billion CFU',
      vitamins: ['Vitamin C', 'Vitamin A', 'Folate'],
      calories: 62
    }
  },
  {
    id: 'green-goddess',
    name: 'Green Goddess',
    tagline: 'Cucumber, Celery, Green Apple Detox',
    shortDescription: 'Cleansing elixir',
    description: 'A refreshing detox blend that combines the crispness of cucumber, the earthiness of celery, and the sweetness of green apples for ultimate rejuvenation.',
    ingredients: ['Cucumber', 'Celery', 'Green Apple', 'Spinach Extract', 'Natural Probiotics'],
    healthBenefits: ['Detoxification', 'Hydration', 'Alkalizing', 'Liver Support'],
    flavorProfile: { sweetness: 5, tartness: 2, intensity: 5 },
    color: '#10b981',
    accentColor: '#34d399',
    price: 5.79,
    image: 'https://images.pexels.com/photos/1414651/pexels-photo-1414651.jpeg?auto=compress&cs=tinysrgb&w=400',
    fermentationStory: 'Cold-pressed vegetables are fermented using specialized probiotic strains that enhance nutrient absorption and bioavailability.',
    suggestedPairings: ['Morning cleanse', 'Pre-yoga session', 'Health-focused meals'],
    nutritionFacts: {
      probiotics: '3.2 billion CFU',
      vitamins: ['Vitamin K', 'Vitamin C', 'Potassium'],
      calories: 28
    }
  },
  {
    id: 'ruby-sunset',
    name: 'Ruby Sunset',
    tagline: 'Pomegranate, Cranberry, Cherry Mix',
    shortDescription: 'Antioxidant champion',
    description: 'A rich, jewel-toned blend that combines the tartness of cranberries, the sweetness of cherries, and the complexity of pomegranates.',
    ingredients: ['Pomegranate', 'Cranberries', 'Cherries', 'Natural Probiotics', 'Hibiscus'],
    healthBenefits: ['Antioxidant Powerhouse', 'Anti-inflammatory', 'Heart Health', 'Urinary Tract Health'],
    flavorProfile: { sweetness: 6, tartness: 8, intensity: 9 },
    color: '#dc2626',
    accentColor: '#ef4444',
    price: 6.49,
    image: 'https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=400',
    fermentationStory: 'This premium blend undergoes extended fermentation to develop complex tannins and concentrate antioxidant compounds.',
    suggestedPairings: ['Evening ritual', 'Romantic dinners', 'Health-conscious treats'],
    nutritionFacts: {
      probiotics: '2.6 billion CFU',
      vitamins: ['Vitamin C', 'Vitamin K', 'Manganese'],
      calories: 48
    }
  },
  {
    id: 'golden-glow',
    name: 'Golden Glow',
    tagline: 'Turmeric, Ginger, Lemon Wellness Shot',
    shortDescription: 'Wellness warrior',
    description: 'A potent wellness elixir featuring the golden power of turmeric, the warming spice of ginger, and the brightness of fresh lemon.',
    ingredients: ['Fresh Turmeric', 'Ginger Root', 'Lemon', 'Black Pepper', 'Natural Probiotics'],
    healthBenefits: ['Anti-inflammatory', 'Immune Boost', 'Digestive Support', 'Joint Health'],
    flavorProfile: { sweetness: 4, tartness: 7, intensity: 10 },
    color: '#f59e0b',
    accentColor: '#fcd34d',
    price: 3.99,
    image: 'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=400',
    fermentationStory: 'Our wellness shot is concentrated through slow fermentation, allowing beneficial compounds to develop while maintaining potency.',
    suggestedPairings: ['Morning ritual', 'Cold season', 'Pre-workout boost'],
    nutritionFacts: {
      probiotics: '1.5 billion CFU',
      vitamins: ['Vitamin C', 'Curcumin', 'Gingerols'],
      calories: 25
    }
  },
  {
    id: 'purple-rain',
    name: 'Purple Rain',
    tagline: 'Blueberry, Blackberry, Acai Superfruit',
    shortDescription: 'Superfruit symphony',
    description: 'An indulgent blend of nature\'s most powerful superfruits, delivering exceptional antioxidant content and unforgettable flavor.',
    ingredients: ['Blueberries', 'Blackberries', 'Acai Berry', 'Natural Probiotics', 'Elderberry'],
    healthBenefits: ['Superfruit Antioxidants', 'Brain Health', 'Anti-aging', 'Immune Support'],
    flavorProfile: { sweetness: 7, tartness: 6, intensity: 8 },
    color: '#7c3aed',
    accentColor: '#8b5fbf',
    price: 6.99,
    image: 'https://images.pexels.com/photos/760281/pexels-photo-760281.jpeg?auto=compress&cs=tinysrgb&w=400',
    fermentationStory: 'Rare acai berries are combined with local superfruits in a proprietary fermentation process that maximizes anthocyanin retention.',
    suggestedPairings: ['Luxury moments', 'Post-workout recovery', 'Special occasions'],
    nutritionFacts: {
      probiotics: '3.5 billion CFU',
      vitamins: ['Vitamin C', 'Vitamin E', 'Anthocyanins'],
      calories: 55
    }
  },
  {
    id: 'citrus-spark',
    name: 'Citrus Spark',
    tagline: 'Grapefruit, Lime, Lemon Energizer',
    shortDescription: 'Zesty awakening',
    description: 'An electrifying citrus blend that combines the boldness of grapefruit, the tartness of lime, and the brightness of lemon for ultimate invigoration.',
    ingredients: ['Pink Grapefruit', 'Fresh Lime', 'Meyer Lemon', 'Natural Probiotics', 'Citrus Bioflavonoids'],
    healthBenefits: ['Vitamin C Mega-dose', 'Metabolism Boost', 'Detoxification', 'Energy Enhancement'],
    flavorProfile: { sweetness: 3, tartness: 9, intensity: 9 },
    color: '#eab308',
    accentColor: '#facc15',
    price: 4.99,
    image: 'https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=400',
    fermentationStory: 'Triple-citrus blend fermented with specialized cultures that enhance natural citrus oils and preserve maximum vitamin content.',
    suggestedPairings: ['Morning wake-up', 'Pre-workout energy', 'Afternoon slump'],
    nutritionFacts: {
      probiotics: '2.4 billion CFU',
      vitamins: ['Vitamin C', 'Limonene', 'Citric Acid'],
      calories: 32
    }
  },
  {
    id: 'forest-fresh',
    name: 'Forest Fresh',
    tagline: 'Kale, Spinach, Apple Green Blend',
    shortDescription: 'Nutrient powerhouse',
    description: 'A vibrant green blend that combines nutrient-dense leafy greens with the natural sweetness of apples for a perfectly balanced health drink.',
    ingredients: ['Organic Kale', 'Baby Spinach', 'Green Apples', 'Cucumber', 'Natural Probiotics'],
    healthBenefits: ['Nutrient Dense', 'Alkalizing', 'Energy Sustaining', 'Detox Support'],
    flavorProfile: { sweetness: 6, tartness: 2, intensity: 6 },
    color: '#059669',
    accentColor: '#10b981',
    price: 5.49,
    image: 'https://images.pexels.com/photos/1414651/pexels-photo-1414651.jpeg?auto=compress&cs=tinysrgb&w=400',
    fermentationStory: 'Leafy greens are flash-processed and fermented using specialized techniques that preserve chlorophyll and enhance mineral absorption.',
    suggestedPairings: ['Health-focused meals', 'Morning nutrition', 'Post-workout recovery'],
    nutritionFacts: {
      probiotics: '3.0 billion CFU',
      vitamins: ['Vitamin K', 'Iron', 'Folate'],
      calories: 38
    }
  },
  {
    id: 'crimson-fire',
    name: 'Crimson Fire',
    tagline: 'Beet, Carrot, Ginger Power Shot',
    shortDescription: 'Energizing elixir',
    description: 'A powerful root vegetable blend that combines the earthiness of beets, the sweetness of carrots, and the warming kick of fresh ginger.',
    ingredients: ['Fresh Beets', 'Organic Carrots', 'Ginger Root', 'Natural Probiotics', 'Cayenne'],
    healthBenefits: ['Nitric Oxide Boost', 'Circulation Support', 'Energy Enhancement', 'Anti-inflammatory'],
    flavorProfile: { sweetness: 8, tartness: 3, intensity: 8 },
    color: '#dc2626',
    accentColor: '#f87171',
    price: 4.49,
    image: 'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=400',
    fermentationStory: 'Root vegetables are slow-juiced and fermented to concentrate natural nitrates and preserve beneficial enzymes.',
    suggestedPairings: ['Pre-workout fuel', 'Athletic performance', 'Energy boost'],
    nutritionFacts: {
      probiotics: '2.1 billion CFU',
      vitamins: ['Vitamin A', 'Folate', 'Potassium'],
      calories: 42
    }
  }
];