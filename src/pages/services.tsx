'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from "@/components/ui/button"

export default function ServicesPage() {
  const { scrollY } = useScroll()
  const headerParallax = useTransform(scrollY, [0, 300], [0, -50])
  const contentParallax = useTransform(scrollY, [0, 300], [0, -30])

  return (
    <div className="min-h-screen bg-black text-white">
      <motion.header
        style={{ y: headerParallax }}
        className="relative h-[50vh] flex items-center justify-center overflow-hidden"
      >
        <motion.div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        >
          <img src="/services-hero.jpg" alt="Luxury Services" className="w-full h-full object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="relative z-10 text-5xl md:text-7xl font-bold text-center"
        >
          Our Services
        </motion.h1>
      </motion.header>

      <motion.main style={{ y: contentParallax }} className="container mx-auto px-4 py-16">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Luxury Transportation for Every Occasion</h2>
          <p className="text-lg text-center max-w-3xl mx-auto">
            At Lag2Boost, we offer a range of premium services tailored to meet your every need. From corporate events to weddings, our fleet of high-end vehicles and professional chauffeurs ensure an unforgettable experience.
          </p>
        </motion.section>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Corporate Events", icon: "🏢", description: "Impress clients and colleagues with our executive fleet. Perfect for roadshows, conferences, and business meetings." },
            { title: "Weddings", icon: "💍", description: "Make your special day even more memorable with our luxury vehicles. Arrive in style and comfort on your wedding day." },
            { title: "Proms & Formals", icon: "🎉", description: "Arrive in style for your once-in-a-lifetime celebration. Our vehicles add a touch of sophistication to your prom night." },
            { title: "Airport Transfers", icon: "✈️", description: "Start and end your journey in comfort and luxury. Our reliable airport transfer service ensures stress-free travel." },
            { title: "City Tours", icon: "🏙️", description: "Explore the city in the lap of luxury with our guided tours. Discover local attractions in comfort and style." },
            { title: "Special Occasions", icon: "🎊", description: "Celebrate birthdays, anniversaries, or any special moment with us. Our luxury rides make every occasion extraordinary." },
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <Button className="bg-gold-500 hover:bg-gold-600 text-black">Learn More</Button>
            </motion.div>
          ))}
        </div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-bold mb-8">Ready to Experience Luxury?</h2>
          <Button size="lg" className="bg-gold-500 hover:bg-gold-600 text-black">
            Book Your Ride Now
          </Button>
        </motion.section>
      </motion.main>
    </div>
  )
}