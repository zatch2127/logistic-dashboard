import React, { useState } from "react";
import { motion } from "framer-motion";

export default function SchedulePickup() {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    date: "",
    time: "",
    items: [],
    instructions: "",
    emergency: "",
    serviceType: "Pickup", 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleCheckbox = (item) => {
    setForm((prev) => ({
      ...prev,
      items: prev.items.includes(item)
        ? prev.items.filter((i) => i !== item)
        : [...prev.items, item],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", form);
    alert(`Pickup scheduled for ${form.fullName}!`);
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-red-50 via-rose-50 to-pink-100 flex items-center justify-center p-4 relative overflow-hidden">
      
      {/* Animated background elements for desktop */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 left-20 w-32 h-32 bg-red-200/20 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-40 h-40 bg-rose-300/20 rounded-full blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-pink-200/30 rounded-full blur-lg"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-0 bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-white/20 relative z-10">
        
        {/* Left Column: Enhanced Decorative Section */}
        <div className="hidden lg:flex flex-col justify-center items-center p-12 bg-gradient-to-br from-red-500 via-red-600 to-rose-700 relative overflow-hidden">
          
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
            <div className="absolute top-32 right-16 w-16 h-16 border border-white rounded-lg rotate-45"></div>
            <div className="absolute bottom-20 left-20 w-12 h-12 bg-white/20 rounded-full"></div>
            <div className="absolute bottom-40 right-10 w-8 h-8 bg-white/30 rounded-full"></div>
          </div>

          <motion.div 
            className="text-center z-10 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="w-32 h-32 bg-white/20 rounded-2xl flex items-center justify-center mb-8 mx-auto backdrop-blur-sm"
              variants={floatingVariants}
              animate="animate"
            >
              <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </motion.div>

            <motion.h1 
              className="text-4xl font-bold text-white mb-4"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Premium Laundry Service
            </motion.h1>
            
            <motion.p 
              className="text-red-100 text-lg leading-relaxed mb-8"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Experience the convenience of professional care for your garments with our state-of-the-art facilities and expert staff.
            </motion.p>

            <motion.div 
              className="space-y-4"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {[
                { icon: "🚚", text: "Free Pickup & Delivery" },
                { icon: "⚡", text: "24 Hour Express Service" },
                { icon: "🛡️", text: "100% Satisfaction Guaranteed" },
              ].map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-3 text-white"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="text-2xl">{feature.icon}</span>
                  <span className="font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Floating elements */}
          <motion.div
            className="absolute top-20 right-20 w-6 h-6 bg-white/30 rounded-full"
            animate={{
              y: [0, -20, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-32 left-16 w-4 h-4 bg-white/40 rounded-full"
            animate={{
              y: [0, 15, 0],
              opacity: [0.6, 0.2, 0.6],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </div>

        {/* Right Column: Enhanced Form */}
        <div className="p-6 sm:p-8 lg:p-12 bg-gradient-to-b from-white to-gray-50/50">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent mb-3">
              Schedule a Pickup
            </h2>
            <p className="text-gray-600 text-lg">
              Fast, reliable, and convenient. Let's get your laundry done.
            </p>
          </motion.div>

          <motion.form 
            onSubmit={handleSubmit} 
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Service Type with enhanced styling */}
            <motion.div variants={itemVariants} className="space-y-3">
              <label className="font-semibold text-gray-800 text-lg">Select Service Type</label>
              <div className="flex gap-4">
                {["Pickup", "Delivery"].map((type) => (
                  <label key={type} className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative">
                      <input 
                        type="radio" 
                        name="serviceType" 
                        value={type}
                        checked={form.serviceType === type} 
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <motion.div 
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          form.serviceType === type 
                            ? 'border-red-500 bg-red-500' 
                            : 'border-gray-300 group-hover:border-red-300'
                        }`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {form.serviceType === type && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-2 h-2 rounded-full bg-white"
                          />
                        )}
                      </motion.div>
                    </div>
                    <span className={`font-medium transition-colors ${
                      form.serviceType === type ? 'text-red-600' : 'text-gray-700'
                    }`}>
                      {type}
                    </span>
                  </label>
                ))}
              </div>
            </motion.div>

            {/* Enhanced Input Fields */}
            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4" variants={itemVariants}>
              <motion.div className="relative" whileFocus={{ scale: 1.02 }}>
                <input 
                  type="text" 
                  name="fullName" 
                  placeholder="Full Name *" 
                  className="w-full border-2 border-gray-200 p-4 rounded-xl focus:ring-2 focus:ring-red-300 focus:border-red-400 transition-all duration-200 bg-white/70 backdrop-blur-sm" 
                  onChange={handleChange} 
                  required 
                />
              </motion.div>
              <motion.div className="relative" whileFocus={{ scale: 1.02 }}>
                <input 
                  type="tel" 
                  name="phone" 
                  placeholder="Phone Number *" 
                  className="w-full border-2 border-gray-200 p-4 rounded-xl focus:ring-2 focus:ring-red-300 focus:border-red-400 transition-all duration-200 bg-white/70 backdrop-blur-sm" 
                  onChange={handleChange} 
                  required 
                />
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} whileFocus={{ scale: 1.02 }}>
              <input 
                type="email" 
                name="email" 
                placeholder="Email Address *" 
                className="w-full border-2 border-gray-200 p-4 rounded-xl focus:ring-2 focus:ring-red-300 focus:border-red-400 transition-all duration-200 bg-white/70 backdrop-blur-sm" 
                onChange={handleChange} 
                required 
              />
            </motion.div>

            <motion.div variants={itemVariants} whileFocus={{ scale: 1.02 }}>
              <textarea 
                name="address" 
                placeholder="Address Details *" 
                rows="3"
                className="w-full border-2 border-gray-200 p-4 rounded-xl focus:ring-2 focus:ring-red-300 focus:border-red-400 transition-all duration-200 resize-none bg-white/70 backdrop-blur-sm" 
                onChange={handleChange} 
                required 
              />
            </motion.div>

            {/* Enhanced Date & Time */}
            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4" variants={itemVariants}>
              <motion.div whileFocus={{ scale: 1.02 }}>
                <input 
                  type="date" 
                  name="date" 
                  className="w-full border-2 border-gray-200 p-4 rounded-xl focus:ring-2 focus:ring-red-300 focus:border-red-400 transition-all duration-200 text-gray-600 bg-white/70 backdrop-blur-sm" 
                  onChange={handleChange} 
                  required 
                />
              </motion.div>
              <motion.div whileFocus={{ scale: 1.02 }}>
                <input 
                  type="time" 
                  name="time" 
                  className="w-full border-2 border-gray-200 p-4 rounded-xl focus:ring-2 focus:ring-red-300 focus:border-red-400 transition-all duration-200 text-gray-600 bg-white/70 backdrop-blur-sm" 
                  onChange={handleChange} 
                  required 
                />
              </motion.div>
            </motion.div>

            {/* Enhanced Items Selection */}
            <motion.div variants={itemVariants} className="space-y-4">
              <p className="font-semibold text-gray-800 text-lg">Items to Process</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {["Shirt", "Suits", "Jackets", "Skirts", "Formal Wear", "Pants", "Dress", "Blouse", "Tie", "Casual Wear"].map((item) => (
                  <motion.label 
                    key={item} 
                    className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-200 border-2 ${
                      form.items.includes(item)
                        ? 'bg-red-50 border-red-200 text-red-700'
                        : 'bg-white/70 border-gray-200 hover:bg-rose-50 hover:border-rose-200'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="relative">
                      <input 
                        type="checkbox" 
                        checked={form.items.includes(item)} 
                        onChange={() => handleCheckbox(item)}
                        className="sr-only"
                      />
                      <motion.div 
                        className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                          form.items.includes(item)
                            ? 'border-red-500 bg-red-500'
                            : 'border-gray-300'
                        }`}
                        whileHover={{ scale: 1.1 }}
                      >
                        {form.items.includes(item) && (
                          <motion.svg
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-3 h-3 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </motion.svg>
                        )}
                      </motion.div>
                    </div>
                    <span className="font-medium text-sm">{item}</span>
                  </motion.label>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} whileFocus={{ scale: 1.02 }}>
              <textarea 
                name="instructions" 
                placeholder="Special Instructions (e.g., starch, separate whites)" 
                rows="3"
                className="w-full border-2 border-gray-200 p-4 rounded-xl focus:ring-2 focus:ring-red-300 focus:border-red-400 transition-all duration-200 resize-none bg-white/70 backdrop-blur-sm" 
                onChange={handleChange} 
              />
            </motion.div>

            <motion.div variants={itemVariants} whileFocus={{ scale: 1.02 }}>
              <input 
                type="tel" 
                name="emergency" 
                placeholder="Emergency Contact *" 
                className="w-full border-2 border-gray-200 p-4 rounded-xl focus:ring-2 focus:ring-red-300 focus:border-red-400 transition-all duration-200 bg-white/70 backdrop-blur-sm" 
                onChange={handleChange} 
                required 
              />
            </motion.div>

            <motion.button
              variants={itemVariants}
              type="submit"
              className="w-full bg-gradient-to-r from-red-500 to-rose-600 text-white px-6 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-red-300 focus:ring-opacity-50 relative overflow-hidden group"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(239, 68, 68, 0.25)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-rose-600 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <span className="relative z-10">Schedule Pickup</span>
            </motion.button>
          </motion.form>
        </div>
      </div>
    </div>
  );
}