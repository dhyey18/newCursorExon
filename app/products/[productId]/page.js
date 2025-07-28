"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
import { notFound } from 'next/navigation';
import { getProductById, products, getProductsByCategory } from '../../../lib/productsData';

export default function ProductDetail({ params }) {
  const { productId } = params;
  const product = getProductById(productId);
  const [selectedTab, setSelectedTab] = useState('overview');
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    notFound();
  }

  // Get related products from the same category
  const relatedProducts = getProductsByCategory(product.category)
    .filter(p => p.id !== product.id)
    .slice(0, 3);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'specifications', label: 'Specifications' },
    { id: 'features', label: 'Features' },
    { id: 'applications', label: 'Applications' }
  ];

  const productImages = [
    product.image,
    product.image, // In a real app, you'd have multiple product images
    product.image,
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-steel-200 pt-32 pb-4">
        <div className="container">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-steel-500">
              <li>
                <Link href="/" className="hover:text-steel-700">Home</Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/products" className="hover:text-steel-700">Products</Link>
              </li>
              <li>/</li>
              <li className="text-steel-800 font-medium">{product.name}</li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="container py-12">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-4">
              <div className="relative aspect-square bg-white rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={productImages[selectedImage]}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
                {product.featured && (
                  <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured Product
                  </div>
                )}
              </div>
              {/* Image thumbnails - commented out since we're using same image */}
              {/* <div className="flex gap-2">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 ${
                      selectedImage === index ? 'border-primary-500' : 'border-steel-200'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div> */}
            </div>
          </motion.div>

          {/* Product Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-sm bg-steel-100 text-steel-600 px-3 py-1 rounded-full">
                  {product.brand}
                </span>
                <span className={`text-sm px-3 py-1 rounded-full ${
                  product.inStock 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {product.inStock ? 'In Stock' : 'Pre-Order'}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-steel-800 mb-4">
                {product.name}
              </h1>
              <p className="text-xl text-steel-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="border-t border-steel-200 pt-6">
              <div className="text-4xl font-bold text-primary-600 mb-6">
                {formatPrice(product.price)}
              </div>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <Link
                    href={`/contact?product=${product.id}&inquiry=quote`}
                    className="flex-1 btn-primary text-center"
                  >
                    Request Quote
                  </Link>
                  <Link
                    href={`/contact?product=${product.id}&inquiry=demo`}
                    className="btn-secondary"
                  >
                    Schedule Demo
                  </Link>
                </div>

                <div className="text-sm text-steel-500 space-y-1">
                  <p>✓ Free consultation and site survey</p>
                  <p>✓ Professional installation and training</p>
                  <p>✓ 24/7 technical support</p>
                  <p>✓ 2-year comprehensive warranty</p>
                </div>
              </div>
            </div>

            {/* Quick Specs */}
            <div className="bg-steel-50 rounded-xl p-6">
              <h3 className="font-semibold text-steel-800 mb-4">Key Specifications</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                {Object.entries(product.specifications).slice(0, 4).map(([key, value]) => (
                  <div key={key}>
                    <div className="text-steel-500">{key}</div>
                    <div className="font-medium text-steel-800">{value}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Product Details Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden mb-16"
        >
          <div className="border-b border-steel-200">
            <nav className="flex">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedTab(tab.id)}
                  className={`px-6 py-4 font-medium transition-colors ${
                    selectedTab === tab.id
                      ? 'text-primary-600 border-b-2 border-primary-600 bg-primary-50/50'
                      : 'text-steel-600 hover:text-steel-800'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-8">
            {selectedTab === 'overview' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-steel-800 mb-4">Product Overview</h3>
                  <p className="text-steel-600 leading-relaxed text-lg">
                    {product.description}
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-steel-800 mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {product.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-center text-steel-600">
                          <svg className="w-5 h-5 mr-3 text-primary-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-steel-800 mb-3">Applications</h4>
                    <ul className="space-y-2">
                      {product.applications.map((application, index) => (
                        <li key={index} className="flex items-center text-steel-600">
                          <svg className="w-5 h-5 mr-3 text-primary-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                          </svg>
                          {application}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {selectedTab === 'specifications' && (
              <div>
                <h3 className="text-xl font-semibold text-steel-800 mb-6">Technical Specifications</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-3 border-b border-steel-100">
                      <span className="font-medium text-steel-700">{key}</span>
                      <span className="text-steel-600">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedTab === 'features' && (
              <div>
                <h3 className="text-xl font-semibold text-steel-800 mb-6">Features & Benefits</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <svg className="w-6 h-6 mr-4 text-primary-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <h4 className="font-medium text-steel-800 mb-1">{feature}</h4>
                        <p className="text-steel-600 text-sm">
                          Advanced functionality that enhances productivity and operational efficiency.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedTab === 'applications' && (
              <div>
                <h3 className="text-xl font-semibold text-steel-800 mb-6">Industry Applications</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {product.applications.map((application, index) => (
                    <div key={index} className="flex items-start">
                      <svg className="w-6 h-6 mr-4 text-primary-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <div>
                        <h4 className="font-medium text-steel-800 mb-1">{application}</h4>
                        <p className="text-steel-600 text-sm">
                          Ideal for {application.toLowerCase()} operations requiring high precision and reliability.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              <span className="heading-gradient">Related Products</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/products/${relatedProduct.id}`}
                  className="machinery-card group block"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-steel-800 group-hover:text-primary-600 transition-colors mb-2">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-steel-600 text-sm mb-3 line-clamp-2">
                      {relatedProduct.description}
                    </p>
                    <div className="text-xl font-bold text-primary-600">
                      {formatPrice(relatedProduct.price)}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </motion.section>
        )}
      </div>
    </div>
  );
} 