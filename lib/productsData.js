export const productCategories = [
  {
    id: 'cnc-machines',
    name: 'CNC Machines',
    description: 'High-precision computer numerical control machines for manufacturing',
    icon: '⚙️',
    image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'packaging-equipment',
    name: 'Packaging Equipment',
    description: 'Complete packaging automation solutions',
    icon: '📦',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'conveyor-systems',
    name: 'Conveyor Systems',
    description: 'Automated material handling and transport systems',
    icon: '🔄',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'inspection-systems',
    name: 'Inspection Systems',
    description: 'Quality control and inspection automation',
    icon: '🔍',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

export const brands = [
  'MetronixSystem',
  'Siemens',
  'ABB',
  'Fanuc',
  'Mitsubishi',
  'Allen Bradley',
  'Schneider Electric'
];

export const products = [
  // CNC Machines
  {
    id: 'cnc-milling-center-mx500',
    name: 'CNC Milling Center MX-500',
    category: 'cnc-machines',
    brand: 'MetronixSystem',
    price: 125000,
    image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'High-precision 5-axis CNC milling center designed for complex manufacturing operations with exceptional accuracy and reliability.',
    specifications: {
      'Work Area': '500 x 400 x 350 mm',
      'Spindle Speed': '12,000 RPM',
      'Tool Capacity': '24 tools',
      'Positioning Accuracy': '±0.003 mm',
      'Power Consumption': '15 kW',
      'Weight': '3,500 kg'
    },
    features: [
      '5-axis simultaneous machining',
      'Automatic tool changer',
      'Coolant system',
      'CNC control system',
      'Safety enclosure',
      'Remote monitoring'
    ],
    applications: ['Aerospace parts', 'Medical devices', 'Automotive components', 'Precision tooling'],
    inStock: true,
    featured: true
  },
  {
    id: 'cnc-lathe-mx300',
    name: 'CNC Lathe MX-300',
    category: 'cnc-machines',
    brand: 'MetronixSystem',
    price: 85000,
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    description: 'Robust CNC lathe for turning operations with advanced control systems and high productivity features.',
    specifications: {
      'Max Turning Diameter': '300 mm',
      'Max Turning Length': '800 mm',
      'Spindle Speed': '4,000 RPM',
      'Chuck Size': '250 mm',
      'Power Consumption': '12 kW',
      'Weight': '2,800 kg'
    },
    features: [
      'Live tooling capability',
      'Sub-spindle option',
      'Automatic bar feeder ready',
      'Chip conveyor',
      'Coolant system',
      'Touch screen HMI'
    ],
    applications: ['Shaft manufacturing', 'Pipe fittings', 'Automotive parts', 'General turning'],
    inStock: true,
    featured: false
  },

  // Packaging Equipment
  {
    id: 'automatic-filling-machine-pf200',
    name: 'Automatic Filling Machine PF-200',
    category: 'packaging-equipment',
    brand: 'MetronixSystem',
    price: 65000,
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'High-speed automatic filling machine for liquid and semi-liquid products with precise volume control.',
    specifications: {
      'Filling Speed': '200 bottles/min',
      'Container Size': '50ml - 2L',
      'Filling Accuracy': '±0.5%',
      'Power Supply': '380V, 50Hz',
      'Air Pressure': '0.6-0.8 MPa',
      'Weight': '1,200 kg'
    },
    features: [
      'Servo-driven filling system',
      'Touch screen control',
      'Automatic bottle feeding',
      'Level sensors',
      'CIP cleaning system',
      'Variable speed control'
    ],
    applications: ['Beverage industry', 'Pharmaceutical', 'Cosmetics', 'Chemical products'],
    inStock: true,
    featured: true
  },
  {
    id: 'sealing-machine-ps150',
    name: 'Heat Sealing Machine PS-150',
    category: 'packaging-equipment',
    brand: 'MetronixSystem',
    price: 35000,
    image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Continuous heat sealing machine for flexible packaging materials with consistent seal quality.',
    specifications: {
      'Sealing Width': '10mm',
      'Sealing Speed': '0-15 m/min',
      'Temperature Range': '0-300°C',
      'Power Consumption': '3 kW',
      'Material Thickness': '0.05-0.5mm',
      'Weight': '450 kg'
    },
    features: [
      'Digital temperature control',
      'Adjustable sealing pressure',
      'Cooling system',
      'Date coding option',
      'Emergency stop',
      'Compact design'
    ],
    applications: ['Food packaging', 'Medical packaging', 'Electronics packaging', 'Industrial bags'],
    inStock: true,
    featured: false
  },

  // Conveyor Systems
  {
    id: 'belt-conveyor-bc500',
    name: 'Belt Conveyor System BC-500',
    category: 'conveyor-systems',
    brand: 'MetronixSystem',
    price: 15000,
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Heavy-duty belt conveyor system for material transport in manufacturing and packaging lines.',
    specifications: {
      'Belt Width': '500mm',
      'Length': '5m (customizable)',
      'Load Capacity': '100 kg/m',
      'Speed Range': '0.1-2.0 m/s',
      'Motor Power': '2.2 kW',
      'Frame Material': 'Stainless Steel 304'
    },
    features: [
      'Variable frequency drive',
      'Emergency stop stations',
      'Safety guards',
      'Modular design',
      'Easy maintenance',
      'Food-grade option'
    ],
    applications: ['Assembly lines', 'Packaging lines', 'Material handling', 'Food processing'],
    inStock: true,
    featured: false
  },

  // Inspection Systems
  {
    id: 'vision-inspection-vi100',
    name: 'Vision Inspection System VI-100',
    category: 'inspection-systems',
    brand: 'MetronixSystem',
    price: 45000,
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Advanced machine vision system for automated quality inspection and defect detection.',
    specifications: {
      'Camera Resolution': '12 MP',
      'Inspection Speed': '100 parts/min',
      'Detection Accuracy': '99.5%',
      'Processing Unit': 'Intel i7',
      'Communication': 'Ethernet, USB',
      'Operating Temp': '0-45°C'
    },
    features: [
      'AI-powered detection',
      'Multiple camera support',
      'Real-time processing',
      'Statistical reporting',
      'Network connectivity',
      'User-friendly interface'
    ],
    applications: ['Electronic components', 'Automotive parts', 'Medical devices', 'Food quality'],
    inStock: true,
    featured: true
  },

  // Additional products for better catalog
  {
    id: 'robotic-arm-ra600',
    name: 'Industrial Robotic Arm RA-600',
    category: 'cnc-machines',
    brand: 'MetronixSystem',
    price: 95000,
    image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: '6-axis industrial robotic arm for automated manufacturing and assembly operations.',
    specifications: {
      'Payload': '20 kg',
      'Reach': '1,800 mm',
      'Repeatability': '±0.1 mm',
      'Axes': '6',
      'Power Consumption': '8 kW',
      'Weight': '600 kg'
    },
    features: [
      '6-axis articulation',
      'Teach pendant',
      'Safety monitoring',
      'Multiple I/O options',
      'Flexible programming',
      'Collision detection'
    ],
    applications: ['Welding', 'Pick and place', 'Assembly', 'Material handling'],
    inStock: true,
    featured: true
  },

  {
    id: 'labeling-machine-lm300',
    name: 'Automatic Labeling Machine LM-300',
    category: 'packaging-equipment',
    brand: 'MetronixSystem',
    price: 28000,
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'High-speed automatic labeling machine for round, square, and oval containers.',
    specifications: {
      'Labeling Speed': '300 bottles/min',
      'Container Diameter': '20-120mm',
      'Label Width': '10-180mm',
      'Label Length': '10-350mm',
      'Power Supply': '220V, 50Hz',
      'Weight': '380 kg'
    },
    features: [
      'Servo motor control',
      'Photo sensor detection',
      'Label counting',
      'Easy changeover',
      'Stainless steel construction',
      'CE certification'
    ],
    applications: ['Beverage bottles', 'Pharmaceutical vials', 'Cosmetic containers', 'Food jars'],
    inStock: true,
    featured: false
  }
];

export const getProductsByCategory = (categoryId) => {
  return products.filter(product => product.category === categoryId);
};

export const getProductById = (productId) => {
  return products.find(product => product.id === productId);
};

export const getFeaturedProducts = () => {
  return products.filter(product => product.featured);
};

export const getProductsByBrand = (brand) => {
  return products.filter(product => product.brand === brand);
};

export const searchProducts = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.category.toLowerCase().includes(lowercaseQuery) ||
    product.brand.toLowerCase().includes(lowercaseQuery)
  );
}; 