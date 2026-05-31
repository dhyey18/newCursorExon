export const productCategories = [
  {
    id: 'plc',
    name: 'PLC Systems',
    description: 'Programmable Logic Controllers for industrial automation',
    icon: '⚡',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'hmi',
    name: 'HMI Panels',
    description: 'Human Machine Interfaces and operator touch panels',
    icon: '🖥️',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'vfd-drives',
    name: 'VFDs & Drives',
    description: 'Variable Frequency Drives and servo drive systems',
    icon: '🔄',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'scada',
    name: 'SCADA & Software',
    description: 'Supervisory control and data acquisition solutions',
    icon: '📊',
    image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

export const brands = [
  'Siemens',
  'Allen Bradley',
  'Mitsubishi Electric',
  'Schneider Electric',
  'Delta',
  'Omron',
  'Honeywell'
];

export const products = [
  // PLC Systems
  {
    id: 'siemens-s7-1500',
    name: 'Siemens SIMATIC S7-1500 PLC',
    category: 'plc',
    brand: 'Siemens',
    price: 185000,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'High-performance modular PLC for demanding automation tasks with integrated motion control and safety functions.',
    specifications: {
      'CPU Type': 'CPU 1516-3 PN/DP',
      'Work Memory': '1 MB for program, 5 MB for data',
      'I/O Points': 'Up to 8192 DI/DO',
      'Communication': 'PROFINET, PROFIBUS, Industrial Ethernet',
      'Programming': 'TIA Portal V17',
      'Protection Rating': 'IP20'
    },
    features: [
      'Integrated motion control',
      'TIA Portal programming',
      'PROFINET / PROFIBUS',
      'Safety Integrated',
      'Trace & diagnostics',
      'Hot-swappable modules'
    ],
    applications: ['Automotive assembly', 'Textile machinery', 'Pharma packaging', 'Water treatment'],
    inStock: true,
    featured: true
  },
  {
    id: 'allen-bradley-controllogix',
    name: 'Allen Bradley ControlLogix 5580',
    category: 'plc',
    brand: 'Allen Bradley',
    price: 240000,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    description: 'Rockwell Automation ControlLogix platform offering scalable performance for complex manufacturing processes.',
    specifications: {
      'CPU Type': '5580 Series',
      'Memory': '40 MB user memory',
      'Scan Time': '0.42 ms/K logic',
      'Communication': 'EtherNet/IP, ControlNet, DeviceNet',
      'Programming': 'Studio 5000 Logix Designer',
      'Protection Rating': 'IP20'
    },
    features: [
      'EtherNet/IP native',
      'Integrated motion control',
      'Studio 5000 programming',
      'Redundancy capable',
      'Advanced diagnostics',
      'High speed processing'
    ],
    applications: ['Oil & gas', 'Food & beverage', 'Mining', 'Batch processing'],
    inStock: true,
    featured: false
  },
  {
    id: 'mitsubishi-iq-r',
    name: 'Mitsubishi iQ-R Series PLC',
    category: 'plc',
    brand: 'Mitsubishi Electric',
    price: 95000,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Next-generation iQ-R platform with ultra-high-speed processing and seamless integration with Mitsubishi robots and drives.',
    specifications: {
      'CPU Type': 'R08CPU',
      'Program Memory': '80K steps',
      'I/O Points': 'Up to 4096',
      'Scan Time': '0.98 ns/step',
      'Communication': 'CC-Link IE, Ethernet',
      'Protection Rating': 'IP20'
    },
    features: [
      'Ultra-high-speed processing',
      'CC-Link IE Field Network',
      'Built-in SD card slot',
      'e-F@ctory ready',
      'Integrated safety CPU',
      'Seamless robot integration'
    ],
    applications: ['CNC machining', 'Robotics', 'Semiconductor', 'Printing machinery'],
    inStock: true,
    featured: true
  },
  {
    id: 'omron-nx-series',
    name: 'Omron NX/NJ Series PLC',
    category: 'plc',
    brand: 'Omron',
    price: 78000,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Machine automation controller combining PLC, motion control, and robotics on a single platform.',
    specifications: {
      'CPU Type': 'NJ501-1300',
      'Program Capacity': '5 MB',
      'Axis Control': 'Up to 256 axes',
      'Communication': 'EtherNet/IP, EtherCAT',
      'Programming': 'Sysmac Studio',
      'Protection Rating': 'IP20'
    },
    features: [
      'EtherCAT motion control',
      'IEC 61131-3 compliant',
      'Integrated vision & safety',
      'NFC programming support',
      'Real-time OS',
      'Cloud connectivity'
    ],
    applications: ['Packaging lines', 'Semiconductor handling', 'Electronics assembly', 'Logistics'],
    inStock: true,
    featured: false
  },

  // HMI Panels
  {
    id: 'siemens-tp1500',
    name: 'Siemens SIMATIC TP1500 HMI',
    category: 'hmi',
    brand: 'Siemens',
    price: 72000,
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: '15.4" widescreen Comfort Panel with multi-touch, high-resolution display for intuitive machine operation.',
    specifications: {
      'Display Size': '15.4" Widescreen',
      'Resolution': '1280 x 800 px',
      'Touch': 'Multi-touch capacitive',
      'CPU': 'ARM Cortex-A8, 600 MHz',
      'RAM': '128 MB',
      'Interface': 'PROFINET, USB, SD card'
    },
    features: [
      'Multi-touch display',
      'TIA Portal integration',
      'WinCC Runtime',
      'Recipe management',
      'Trend display',
      'Alarm management'
    ],
    applications: ['Machine tools', 'Conveyor systems', 'Process plants', 'Energy management'],
    inStock: true,
    featured: true
  },
  {
    id: 'delta-dop-b',
    name: 'Delta DOP-B Series HMI',
    category: 'hmi',
    brand: 'Delta',
    price: 18500,
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Cost-effective 7" colour touch HMI with wide protocol support, ideal for small to mid-scale machine automation.',
    specifications: {
      'Display Size': '7" TFT LCD',
      'Resolution': '800 x 480 px',
      'Touch': 'Resistive touch',
      'CPU': '400 MHz processor',
      'Memory': '128 MB Flash',
      'Interface': 'RS-232/485, Ethernet, USB'
    },
    features: [
      'Wide protocol compatibility',
      'DOPSoft programming',
      'Built-in recipe editor',
      'Data logging',
      'Remote monitoring',
      'Compact & rugged design'
    ],
    applications: ['Injection moulding', 'Textile looms', 'Pumping stations', 'Small batch processes'],
    inStock: true,
    featured: false
  },

  // VFDs & Drives
  {
    id: 'siemens-sinamics-g120',
    name: 'Siemens SINAMICS G120 VFD',
    category: 'vfd-drives',
    brand: 'Siemens',
    price: 28000,
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Modular drive system for pumps, fans and compressors with integrated safety functions and energy optimisation.',
    specifications: {
      'Power Range': '0.37 – 250 kW',
      'Input Voltage': '380–480 V, 3-phase',
      'Output Frequency': '0–550 Hz',
      'Protection Rating': 'IP20 / IP55',
      'Communication': 'PROFINET, PROFIBUS, Modbus',
      'Standards': 'UL, CE, IEC'
    },
    features: [
      'Safe Torque Off (STO)',
      'Energy-saving algorithms',
      'PROFINET integrated',
      'Modular CU/PM design',
      'Bypass function',
      'Harmonic filtering'
    ],
    applications: ['Pump & fan control', 'Compressors', 'Conveyors', 'Centrifuges'],
    inStock: true,
    featured: true
  },
  {
    id: 'schneider-altivar',
    name: 'Schneider Altivar Process ATV900',
    category: 'vfd-drives',
    brand: 'Schneider Electric',
    price: 35000,
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Process-oriented VFD with built-in PLC functions, advanced diagnostics and EcoStruxure connectivity for Industry 4.0.',
    specifications: {
      'Power Range': '0.75 – 800 kW',
      'Voltage': '200–690 V, 3-phase',
      'Overload': '110% for 60 s',
      'Protection Rating': 'IP21 / IP55',
      'Communication': 'Modbus TCP, EtherNet/IP, PROFIBUS',
      'Standards': 'UL, CE, IEC 61800'
    },
    features: [
      'Built-in process PLC',
      'EcoStruxure IoT ready',
      'Advanced diagnostics',
      'Dual-port Ethernet',
      'Safe Torque Off',
      'Regenerative braking'
    ],
    applications: ['Water & wastewater', 'HVAC', 'Oil & gas', 'Material handling'],
    inStock: true,
    featured: false
  },

  // SCADA
  {
    id: 'omron-cx-one',
    name: 'Omron CX-One SCADA Suite',
    category: 'scada',
    brand: 'Omron',
    price: 55000,
    image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Comprehensive software suite for PLC programming, HMI design, motion control and network configuration in one package.',
    specifications: {
      'Includes': 'CX-Programmer, CX-Designer, CX-Motion',
      'Supported PLCs': 'CS/CJ/NX/NJ Series',
      'Licensing': 'Single & multi-seat',
      'OS': 'Windows 10/11',
      'Protocols': 'EtherNet/IP, Modbus, DeviceNet',
      'Remote Access': 'Yes — web-based'
    },
    features: [
      'All-in-one automation suite',
      'Web-based remote monitoring',
      'Alarm & event management',
      'Historical data trending',
      'Report generation',
      'Multi-language support'
    ],
    applications: ['Factory automation', 'Process control', 'Building management', 'Energy monitoring'],
    inStock: true,
    featured: true
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
