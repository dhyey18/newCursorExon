"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { products, productCategories, brands, getProductsByCategory, searchProducts, getProductsByBrand } from '../../lib/productsData';

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('name');

  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = getProductsByCategory(selectedCategory);
    }

    // Filter by brand
    if (selectedBrand !== 'all') {
      filtered = filtered.filter(product => product.brand === selectedBrand);
    }

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        default:
          return 0;
      }
    });

    return filtered;
  }, [selectedCategory, selectedBrand, searchQuery, sortBy]);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-steel-900 via-steel-800 to-industrial-900">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="container relative">
          <motion.div
            className="text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Industrial Machinery Catalog
            </h1>
            <p className="text-xl text-steel-200 max-w-3xl mx-auto">
              Discover our comprehensive range of precision-engineered automation machinery and equipment designed for modern manufacturing excellence.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container py-16">
        {/* Search and Filter Section */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Search Input */}
              <div>
                <label className="form-label">Search Products</label>
                <input
                  type="text"
                  placeholder="Search machinery..."
                  className="form-input"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Category Filter */}
              <div>
                <label className="form-label">Category</label>
                <select
                  className="form-input"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="all">All Categories</option>
                  {productCategories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Brand Filter */}
              <div>
                <label className="form-label">Brand</label>
                <select
                  className="form-input"
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                >
                  <option value="all">All Brands</option>
                  {brands.map((brand) => (
                    <option key={brand} value={brand}>
                      {brand}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort Options */}
              <div>
                <label className="form-label">Sort By</label>
                <select
                  className="form-input"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="name">Name</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>

          {/* Product Count */}
          <div className="flex justify-between items-center mb-6">
            <p className="text-steel-600">
              Showing {filteredProducts.length} of {products.length} products
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedBrand('all');
                  setSearchQuery('');
                  setSortBy('name');
                }}
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                Clear Filters
              </button>
            </div>
          </div>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="initial"
          animate="animate"
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              variants={fadeIn}
              className="machinery-card group"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {product.featured && (
                  <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                )}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium ${
                  product.inStock 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {product.inStock ? 'In Stock' : 'Pre-Order'}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-steel-800 group-hover:text-primary-600 transition-colors">
                    {product.name}
                  </h3>
                  <span className="text-sm text-steel-500 bg-steel-100 px-2 py-1 rounded">
                    {product.brand}
                  </span>
                </div>

                <p className="text-steel-600 mb-4 line-clamp-2">
                  {product.description}
                </p>

                <div className="mb-4">
                  <div className="text-2xl font-bold text-primary-600 mb-2">
                    {formatPrice(product.price)}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {product.features.slice(0, 3).map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="text-xs bg-steel-100 text-steel-600 px-2 py-1 rounded"
                      >
                        {feature}
                      </span>
                    ))}
                    {product.features.length > 3 && (
                      <span className="text-xs text-steel-500">
                        +{product.features.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex gap-3">
                  <Link
                    href={`/products/${product.id}`}
                    className="flex-1 btn-primary text-center"
                  >
                    View Details
                  </Link>
                  <Link
                    href={`/contact?product=${product.id}`}
                    className="btn-secondary"
                  >
                    Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold text-steel-800 mb-2">
              No products found
            </h3>
            <p className="text-steel-600 mb-6">
              Try adjusting your search criteria or browse our categories
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedBrand('all');
                setSearchQuery('');
              }}
              className="btn-primary"
            >
              View All Products
            </button>
          </motion.div>
        )}

        {/* Categories Overview */}
        <AnimatedSection>
          <section className="mt-20 py-16 bg-white rounded-2xl">
            <div className="container">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                <span className="heading-gradient">Product Categories</span>
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {productCategories.map((category, index) => (
                  <motion.div
                    key={category.id}
                    className="text-center p-6 rounded-xl bg-gradient-to-b from-steel-50 to-steel-100/50 hover:shadow-md transition-all cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    <div className="text-4xl mb-4">{category.icon}</div>
                    <h3 className="text-lg font-semibold mb-2 text-steel-800">
                      {category.name}
                    </h3>
                    <p className="text-steel-600 text-sm mb-4">
                      {category.description}
                    </p>
                    <div className="text-sm text-primary-600 font-medium">
                      {getProductsByCategory(category.id).length} products
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>
      </div>
    </div>
  );
} 