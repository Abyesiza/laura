'use client';

import Image from "next/image";
import { useState } from "react";
import { useScrollAnimation } from "./hooks/useScrollAnimation";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Scroll animations
  const heroAnimation = useScrollAnimation();
  const productsAnimation = useScrollAnimation();
  const aboutAnimation = useScrollAnimation();
  const contactAnimation = useScrollAnimation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F7F4EF]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F7F4EF]/95 backdrop-blur-sm border-b border-[#E8E3D6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <div className="heading-font text-xl md:text-2xl font-bold text-[#800020]">
              AURA
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('products')} className="text-[#2C1810] hover:text-[#800020] transition-colors font-medium">
                Products
              </button>
              <button onClick={() => scrollToSection('about')} className="text-[#2C1810] hover:text-[#800020] transition-colors font-medium">
                About
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-[#2C1810] hover:text-[#800020] transition-colors font-medium">
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#800020]"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-[#E8E3D6]">
              <button onClick={() => scrollToSection('products')} className="block w-full text-left py-2 text-[#2C1810] hover:text-[#800020]">
                Products
              </button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 text-[#2C1810] hover:text-[#800020]">
                About
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 text-[#2C1810] hover:text-[#800020]">
                Contact
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroAnimation.ref} className="relative min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-64 h-64 bg-[#800020]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#8B0A3C]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto text-center z-10">
          <div className={`mb-6 inline-block px-6 py-2 bg-[#800020]/10 rounded-full ${heroAnimation.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <p className="text-[#800020] font-semibold text-sm tracking-wide">PREMIUM LIQUID SOAP</p>
          </div>
          
          <h1 className={`heading-font text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#800020] mb-6 leading-tight ${heroAnimation.isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0'}`}>
            AURA MAGICAL CLEAN
          </h1>
          
          <p className={`heading-font text-2xl sm:text-3xl md:text-4xl text-[#2C1810] mb-4 ${heroAnimation.isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
            Liquid Soap
          </p>
          
          <p className={`text-lg sm:text-xl text-[#6B5A4F] max-w-2xl mx-auto mb-10 leading-relaxed ${heroAnimation.isVisible ? 'animate-fade-in-up delay-300' : 'opacity-0'}`}>
            Experience the magic of pure cleanliness with our premium liquid soap collection. 
            Gentle on your hands, tough on dirt.
          </p>
          
          <button 
            onClick={() => scrollToSection('products')}
            className={`bg-gradient-to-r from-[#800020] to-[#8B0A3C] text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 ${heroAnimation.isVisible ? 'animate-scale-in delay-400' : 'opacity-0'}`}
          >
            Explore Our Products
          </button>

          {/* Decorative Wave */}
          <div className="mt-20">
            <svg className="w-full h-12 text-[#E8E3D6]" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor"></path>
              <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor"></path>
              <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"></path>
            </svg>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section ref={productsAnimation.ref} id="products" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#E8E3D6] to-[#F7F4EF]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`heading-font text-4xl md:text-5xl font-bold text-[#800020] mb-4 ${productsAnimation.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              Our Products
            </h2>
            <p className={`text-lg text-[#6B5A4F] max-w-2xl mx-auto ${productsAnimation.isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0'}`}>
              Discover our carefully crafted liquid soap collection
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {/* Product 1 */}
            <div className={`group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 ${productsAnimation.isVisible ? 'animate-slide-in-left delay-200' : 'opacity-0'}`}>
              <div className="relative h-80 bg-[#F5F5DC] overflow-hidden flex items-center justify-center">
                <Image
                  src="/assets/classic.png"
                  alt="AURA Classic Clean"
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-500 p-8"
                />
              </div>
              <div className="p-8">
                <h3 className="heading-font text-2xl font-bold text-[#800020] mb-3">
                  AURA Classic Clean
                </h3>
                <p className="text-[#6B5A4F] mb-4 leading-relaxed">
                  Our signature formula with a fresh, clean scent. Perfect for everyday use with moisturizing properties that leave your hands feeling soft and refreshed.
                </p>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-bold text-[#800020]">UGX 8,000</span>
                  <span className="text-sm text-[#6B5A4F]">500ml</span>
                </div>
                <button className="w-full bg-gradient-to-r from-[#800020] to-[#8B0A3C] text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                  Buy Now
                </button>
              </div>
            </div>

            {/* Product 2 */}
            <div className={`group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 ${productsAnimation.isVisible ? 'animate-slide-in-right delay-300' : 'opacity-0'}`}>
              <div className="relative h-80 bg-[#F5F5DC] overflow-hidden flex items-center justify-center">
                <Image
                  src="/assets/premium.png"
                  alt="AURA Luxury Lavender"
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-500 p-8"
                />
              </div>
              <div className="p-8">
                <h3 className="heading-font text-2xl font-bold text-[#800020] mb-3">
                  AURA Luxury Lavender
                </h3>
                <p className="text-[#6B5A4F] mb-4 leading-relaxed">
                  Indulge in the calming scent of lavender while enjoying a rich, luxurious lather. Enriched with natural extracts for ultimate hand care and protection.
                </p>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-bold text-[#800020]">UGX 10,000</span>
                  <span className="text-sm text-[#6B5A4F]">500ml</span>
                </div>
                <button className="w-full bg-gradient-to-r from-[#800020] to-[#8B0A3C] text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutAnimation.ref} id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F7F4EF]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`${aboutAnimation.isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
              <h2 className="heading-font text-4xl md:text-5xl font-bold text-[#800020] mb-6">
                About AURA
              </h2>
              <p className="text-lg text-[#6B5A4F] mb-6 leading-relaxed">
                AURA MAGICAL CLEAN was born from a simple belief: cleanliness should be an experience, not just a chore. We craft premium liquid soaps that transform everyday handwashing into a moment of luxury.
              </p>
              <p className="text-lg text-[#6B5A4F] mb-6 leading-relaxed">
                Our formulas combine the finest natural ingredients with cutting-edge cleaning technology, ensuring that every wash is gentle on your skin while being tough on dirt and germs.
              </p>
              
              <div className="space-y-4 mt-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#800020]/10 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-[#800020]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#800020] mb-1">Premium Quality</h3>
                    <p className="text-[#6B5A4F]">Only the finest ingredients for your skin</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#800020]/10 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-[#800020]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#800020] mb-1">Gentle Care</h3>
                    <p className="text-[#6B5A4F]">Moisturizing formula for soft, healthy hands</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#800020]/10 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-[#800020]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#800020] mb-1">Eco-Friendly</h3>
                    <p className="text-[#6B5A4F]">Sustainable practices for a better tomorrow</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`relative ${aboutAnimation.isVisible ? 'animate-slide-in-right delay-200' : 'opacity-0'}`}>
              <div className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/assets/PXL_20251110_181004442.jpg"
                  alt="AURA Products"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#800020]/10 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-[#8B0A3C]/10 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactAnimation.ref} id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F7F4EF] to-[#E8E3D6]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`heading-font text-4xl md:text-5xl font-bold text-[#800020] mb-4 ${contactAnimation.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              Get In Touch
            </h2>
            <p className={`text-lg text-[#6B5A4F] ${contactAnimation.isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0'}`}>
              Have questions? We'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className={`bg-white rounded-3xl p-8 shadow-lg ${contactAnimation.isVisible ? 'animate-slide-in-left delay-200' : 'opacity-0'}`}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-[#2C1810] font-semibold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[#E8E3D6] focus:border-[#800020] focus:outline-none focus:ring-2 focus:ring-[#800020]/20 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[#2C1810] font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[#E8E3D6] focus:border-[#800020] focus:outline-none focus:ring-2 focus:ring-[#800020]/20 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-[#2C1810] font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-[#E8E3D6] focus:border-[#800020] focus:outline-none focus:ring-2 focus:ring-[#800020]/20 transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#800020] to-[#8B0A3C] text-white py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className={`space-y-8 ${contactAnimation.isVisible ? 'animate-slide-in-right delay-300' : 'opacity-0'}`}>
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#800020]/10 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-[#800020]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#800020] mb-2">Email Us</h3>
                    <p className="text-[#6B5A4F]">info@auramagicalclean.com</p>
                    <p className="text-[#6B5A4F]">support@auramagicalclean.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#800020]/10 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-[#800020]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#800020] mb-2">Call Us</h3>
                    <p className="text-[#6B5A4F]">+256 700 000 000</p>
                    <p className="text-[#6B5A4F]">Mon-Fri: 9AM - 6PM</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#800020]/10 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-[#800020]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#800020] mb-2">Visit Us</h3>
                    <p className="text-[#6B5A4F]">Kampala, Uganda</p>
                    <p className="text-[#6B5A4F]">Main Street Plaza</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C1810] text-[#F7F4EF] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="heading-font text-2xl font-bold text-[#800020] mb-4">AURA</h3>
              <p className="text-[#C9B8A8]">
                Premium liquid soap for magical cleanliness.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-[#C9B8A8]">
                <li><button onClick={() => scrollToSection('products')} className="hover:text-[#800020] transition-colors">Products</button></li>
                <li><button onClick={() => scrollToSection('about')} className="hover:text-[#800020] transition-colors">About</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-[#800020] transition-colors">Contact</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-[#800020]/20 rounded-full flex items-center justify-center hover:bg-[#800020] transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-[#800020]/20 rounded-full flex items-center justify-center hover:bg-[#800020] transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                    <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-[#6B5A4F] pt-8 text-center text-[#C9B8A8]">
            <p>&copy; 2025 AURA MAGICAL CLEAN. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
