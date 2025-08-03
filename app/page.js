"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AnimatedSection, { StaggerContainer, RevealOnScroll, TextReveal } from './components/AnimatedSection';
import FloatingElements, { AnimatedBackground } from './components/FloatingElements';
import { LoadingButton, FloatingActionButton } from './components/LoadingComponents';

export default function Home() {
  const pathname = usePathname();

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Floating Action Button */}
      <FloatingActionButton onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </FloatingActionButton>

      {/* Enhanced Hero Section */}
      <section className="relative min-h-[100vh] flex items-center pt-32 lg:pt-40 pb-20 overflow-hidden">
        {/* Animated Background */}
        <AnimatedBackground variant="wave" />
        
        {/* Floating Elements */}
        <FloatingElements density="medium" />
        
        {/* Main Background with Advanced Gradient */}
        <motion.div 
          className="absolute inset-0 hero-bg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
          {/* Animated Gradient Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-emerald-500/10"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </motion.div>
        
        <div className="container relative mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <motion.div 
            className="flex-1 space-y-8"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <TextReveal className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-neutral-800 via-neutral-700 to-neutral-600 bg-clip-text text-transparent">
                Industrial Automation
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-primary-700 bg-clip-text text-transparent text-shimmer">
                Machinery Solutions
              </span>
            </TextReveal>
            
            <motion.p 
              className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Leading provider of high-quality industrial automation machinery and equipment. We deliver precision-engineered solutions for manufacturing, packaging, and process automation across diverse industries.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <LoadingButton variant="primary" className="group">
                <span>Request Quote</span>
                <motion.svg 
                  className="w-4 h-4 ml-2" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </LoadingButton>
              <Link href="/products" className="btn-secondary group">
                <span>View Products</span>
                <motion.svg 
                  className="w-4 h-4 ml-2" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </motion.svg>
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="flex-1 w-full relative"
            initial={{ opacity: 0, x: 60, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <motion.div 
              className="relative aspect-video md:aspect-square w-full"
              whileHover={{ scale: 1.02, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="/hero/automation-hero.png"
                alt="Industrial Automation Machinery"
                fill
                className="rounded-2xl shadow-2xl shadow-slate-200/50 hover:shadow-primary-300/30 transition-all duration-500 object-cover"
                priority
              />
              
              {/* Floating Stats */}
              <motion.div
                className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-xl border border-white/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-2xl font-bold text-primary-600">500+</div>
                <div className="text-sm text-neutral-600">Projects Completed</div>
              </motion.div>
              
              <motion.div
                className="absolute -top-6 -right-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-xl border border-white/20"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8 }}
                whileHover={{ scale: 1.05, y: 5 }}
              >
                <div className="text-2xl font-bold text-emerald-600">20+</div>
                <div className="text-sm text-neutral-600">Years Experience</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Solutions Preview Section */}
      <AnimatedSection variant="scale" className="py-16 bg-white/80 backdrop-blur-sm relative">
        <FloatingElements variant="particles" />
        <div className="container mx-auto px-6">
          <RevealOnScroll direction="up">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="heading-gradient">Our Product Categories</span>
            </h2>
          </RevealOnScroll>
          
          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "CNC Machines",
                description: "High-precision computer numerical control machines for manufacturing and machining operations",
                image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                color: "from-blue-500 to-blue-700"
              },
              {
                title: "Packaging Equipment",
                description: "Automated packaging machinery for efficient product packaging and sealing processes",
                image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                color: "from-emerald-500 to-emerald-700"
              }
            ].map((solution, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ scale: 1.02, y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link 
                  href={`/products/${solution.title.toLowerCase().replace(/ /g, '-')}`}
                  className="group relative overflow-hidden rounded-2xl block"
                >
                  <div className="relative h-80 w-full">
                    <Image
                      src={solution.image}
                      alt={solution.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${solution.color} opacity-60 group-hover:opacity-70 transition-opacity duration-300`} />
                    
                    {/* Animated Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
                      whileHover={{ background: "linear-gradient(to top, rgba(0,0,0,0.4), transparent)" }}
                    />
                  </div>
                  
                  <div className="absolute bottom-0 p-8 text-white">
                    <motion.h3 
                      className="text-2xl font-bold mb-3"
                      whileHover={{ scale: 1.05 }}
                    >
                      {solution.title}
                    </motion.h3>
                    <motion.p 
                      className="text-white/90 leading-relaxed"
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {solution.description}
                    </motion.p>
                    
                    <motion.div
                      className="mt-4 inline-flex items-center text-white/90 font-medium"
                      whileHover={{ x: 5 }}
                    >
                      Learn More
                      <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </motion.div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </AnimatedSection>

      {/* Enhanced Features Section */}
      <AnimatedSection variant="fadeUp" className="section-padding bg-white relative overflow-hidden">
        <FloatingElements density="low" />
        <div className="container">
          <RevealOnScroll direction="down">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16">
              <span className="heading-gradient">Our Expertise</span>
            </h2>
          </RevealOnScroll>
          
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Precision Engineering",
                description: "State-of-the-art machinery engineered for maximum precision and reliability in industrial applications",
                icon: "⚙️",
                image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                gradient: "from-blue-500/10 to-blue-600/5"
              },
              {
                title: "Automation Control",
                description: "Advanced control systems for seamless automation and process optimization",
                icon: "🖥️",
                image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                gradient: "from-emerald-500/10 to-emerald-600/5"
              },
              {
                title: "Custom Solutions",
                description: "Tailored machinery solutions designed to meet specific industrial requirements",
                icon: "🔧",
                image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                gradient: "from-purple-500/10 to-purple-600/5"
              }
            ].map((feature, index) => (
              <motion.div 
                key={index} 
                className="card group relative"
                variants={fadeIn}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative h-48 lg:h-56 overflow-hidden rounded-t-2xl">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} group-hover:opacity-80 transition-opacity duration-300`} />
                </div>
                
                <div className="p-6 lg:p-8 relative">
                  <motion.div 
                    className="text-4xl mb-4"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-3 text-neutral-800 group-hover:text-primary-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* Hover Effect Arrow */}
                  <motion.div
                    className="absolute bottom-6 right-6 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100"
                    initial={{ scale: 0, rotate: -180 }}
                    whileHover={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </AnimatedSection>

      {/* Stats Section */}
      <AnimatedSection>
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <motion.div 
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                { number: "15+", label: "Years Experience" },
                { number: "500+", label: "Projects Completed" },
                { number: "100+", label: "Happy Clients" },
                { number: "24/7", label: "Support Available" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  variants={fadeIn}
                >
                  <motion.div 
                    className="text-4xl font-bold text-blue-600 mb-2"
                    initial={{ scale: 0.5 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-slate-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* Value Proposition Section */}
      <AnimatedSection>
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="heading-gradient">Why Choose MetronixSystem?</span>
              </h2>
              <p className="text-slate-600 text-lg">
                We deliver premium industrial automation machinery that transforms manufacturing processes and drives operational excellence.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "🎯",
                  title: "Industry Expertise",
                  description: "20+ years of experience in industrial automation machinery and equipment manufacturing"
                },
                {
                  icon: "💡",
                  title: "Innovation Focus",
                  description: "Cutting-edge machinery solutions using the latest automation and control technologies"
                },
                {
                  icon: "🤝",
                  title: "Dedicated Support",
                  description: "Comprehensive technical support, training, and maintenance services for all our machinery"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={{
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 }
                  }}
                  className="text-center p-6 rounded-xl bg-gradient-to-b from-slate-50 to-slate-100/50"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-slate-800">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Industries Served Section */}
      <AnimatedSection>
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="heading-gradient">Industries We Serve</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "Manufacturing",
                  icon: "🏭",
                  description: "Advanced manufacturing machinery for automotive, electronics, and general manufacturing"
                },
                {
                  name: "Pharmaceuticals",
                  icon: "💊",
                  description: "Precision machinery for pharmaceutical production and packaging with GMP compliance"
                },
                {
                  name: "Food & Beverage",
                  icon: "🍽️",
                  description: "Hygienic automation equipment for food processing and beverage production"
                },
                {
                  name: "Packaging",
                  icon: "📦",
                  description: "Complete packaging lines including filling, sealing, labeling, and wrapping machines"
                }
              ].map((industry, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-3xl mb-4">{industry.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{industry.name}</h3>
                  <p className="text-slate-600 text-sm">{industry.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Case Studies Section */}
      <AnimatedSection>
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="heading-gradient">Success Stories</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "CNC Machining Center Implementation",
                  client: "Precision Parts Manufacturing",
                  result: "60% increase in production capacity",
                  image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                },
                {
                  title: "Automated Packaging Line",
                  client: "FoodTech Solutions Ltd.",
                  result: "40% reduction in packaging time",
                  image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                },
                {
                  title: "Pharmaceutical Equipment Upgrade",
                  client: "MediCore Industries",
                  result: "99.8% OEE improvement",
                  image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                }
              ].map((study, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="relative h-48">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                    <p className="text-slate-600 mb-4">Client: {study.client}</p>
                    <div className="flex items-center text-green-600">
                      <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {study.result}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Upgrade Your Manufacturing?
            </h2>
            <p className="text-lg text-primary-50 mb-8 leading-relaxed">
              Let's discuss how our industrial automation machinery can help your business achieve new levels of efficiency and productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary bg-white text-primary-600 hover:bg-primary-50">
                Request Quote
              </Link>
              <Link href="/products" className="btn-secondary !border-white !text-white hover:bg-white/10">
                View Our Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-16 lg:py-20">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                {/* <div className="relative w-12 h-12">
                  <Image
                    src="/logo.png"
                    alt="MetronixSystem Logo"
                    fill
                    className="object-contain brightness-0 invert"
                  />
                </div> */}
                <span className="text-2xl font-bold text-white">
                  MetronixSystem
                </span>
              </div>
              <p className="text-neutral-300 leading-relaxed">
                Leading provider of industrial automation machinery and equipment for manufacturing excellence.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { name: 'Products', path: '/products' },
                  { name: 'About Us', path: '/about' },
                  { name: 'Contact', path: '/contact' },
                  { name: 'Privacy Policy', path: '/privacy' },
                  { name: 'Terms & Conditions', path: '/terms' }
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.path}
                      className="text-neutral-300 hover:text-white transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Contact</h4>
              <ul className="space-y-3 text-slate-300">
                <li>Email: support@metronixsystem.com</li>
                <li>Phone: +91 9924428852</li>
                <li>Address: surat, Gujarat, India</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="text-slate-300 hover:text-white transition-colors duration-200">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-neutral-800 text-neutral-400 text-sm text-center">
            © {new Date().getFullYear()} MetronixSystem. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
