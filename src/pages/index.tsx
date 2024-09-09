'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Building, Gem, PartyPopper, Plane, Binoculars, Medal, ArrowUp } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
export default function LandingPage() {
  const { scrollY } = useScroll()
  const [showScrollButton, setShowScrollButton] = useState(false)
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }


  const heroParallax = useTransform(scrollY, [0, 500], [0, -150])
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0])
  const aboutParallax = useTransform(scrollY, [300, 800], [0, -100])
  const servicesParallax = useTransform(scrollY, [800, 1300], [0, -100])
  const fleetParallax = useTransform(scrollY, [1300, 1800], [0, -100])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true)
      } else {
        setShowScrollButton(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">


      {/* Hero Section with Parallax */}
      <motion.section
        style={{ y: heroParallax }}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <motion.div
          style={{ opacity: heroOpacity }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: 1, repeatType: "reverse" }}
        >
          <img src="https://c.wallhere.com/photos/41/cc/1920x1080_px_C63_AMG_car_Mercedes_Benz-676372.jpg!d" alt="Luxury Car" className="w-full h-full object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Elevate Your Arrival</h1>
          <p className="text-xl md:text-2xl mb-8">Experience luxury transportation for all your special moments</p>
          <Button size="lg" className="bg-gold-500 hover:bg-gold-600 text-black">
            Explore Our Fleet
          </Button>
        </motion.div>
      </motion.section>

      {/* About Section */}
      <motion.section
        style={{ y: aboutParallax }}
        id="about"
        className="py-20 bg-gray-900"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-8 text-center"
          >
            About Lag2Boost
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-lg mb-6">
                At Lag2Boost, we believe that every journey should be an experience in itself. Whether you&apos;re heading to a red-carpet event, a business meeting, or your dream wedding, we provide the perfect vehicle to match the occasion.
              </p>
              <p className="text-lg mb-6">
                Our fleet of meticulously maintained luxury vehicles, coupled with our professional chauffeurs, ensures that you arrive at your destination in style, comfort, and safety.
              </p>
              <Button className="bg-gold-500 hover:bg-gold-600 text-black">
                Learn More About Us
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative h-96"
            >
              <img
                src="https://images.pexels.com/photos/193999/pexels-photo-193999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Luxury Car Interior"
                className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        style={{ y: servicesParallax }}
        id="services"
        className="py-20 bg-black"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-center"
          >
            Our Services
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Corporate Events", icon: <Building />, description: "Impress clients and colleagues with our executive fleet" },
              { title: "Weddings", icon: <Gem />, description: "Make your special day even more memorable with our luxury vehicles" },
              { title: "Proms & Formals", icon: <PartyPopper />, description: "Arrive in style for your once-in-a-lifetime celebration" },
              { title: "Airport Transfers", icon: <Plane />, description: "Start and end your journey in comfort and luxury" },
              { title: "City Tours", icon: <Binoculars />, description: "Explore the city in the lap of luxury with our guided tours" },
              { title: "Special Occasions", icon: <Medal />, description: "Celebrate birthdays, anniversaries, or any special moment with us" },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Featured Vehicles Section */}
      <motion.section
        style={{ y: fleetParallax }}
        id="fleet"
        className="py-20 bg-gray-900"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-center"
          >
            Featured Vehicles
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Rolls-Royce Phantom", image: "https://c4.wallpaperflare.com/wallpaper/118/497/185/rolls-royce-rolls-royce-phantom-car-full-size-car-wallpaper-preview.jpg" },
              { name: "Mercedes-Benz S-Class", image: "https://img-ik.cars.co.za/news-site-za/images/2023/03/Mercedes-Benz-S500-3.jpg" },
              { name: "Bentley Continental", image: "https://www.hdcarwallpapers.com/download/bentley_continental_gt_speed_8k-1920x1080.jpg" },
            ].map((vehicle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-lg shadow-xl"
              >
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2">{vehicle.name}</h3>
                    <Button className="bg-gold-500 hover:bg-gold-600 text-black">
                      View Details
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="bg-gold-500 hover:bg-gold-600 text-black">
              Explore Full Fleet
            </Button>
          </div>
        </div>
      </motion.section>

      {/* Testimonial Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-center"
          >
            What Our Clients Say
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-2xl italic mb-8">
              &quot;Lag2Boost made our wedding day even more special. The car was immaculate, the driver was professional, and the entire experience was nothing short of perfection.&quot;
            </p>
            <p className="text-gold-500 font-semibold">- Sarah & Michael, Newlyweds</p>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-8"
          >
            Ready to Elevate Your Journey?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl mb-12 max-w-2xl mx-auto"
          >
            Don&apos;t settle for ordinary transportation. Experience the luxury, comfort, and style that Lag2Boost offers for your next special event.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button size="lg" className="bg-gold-500 hover:bg-gold-600 text-black">
              Book Your Luxury Ride Now
            </Button>
          </motion.div>
        </div>
      </section>
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gold-500 text-black p-3 rounded-full shadow-lg hover:bg-gold-600 transition"
        >
          <ArrowUp size={24} />
        </button>
      )}

      {/* Footer */}
      <footer className="bg-black py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Lag2Boost</h3>
              <p className="text-gray-400">Elevating your journey with style and sophistication.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="#about" className="text-gray-400 hover:text-gold-500 transition-colors">About Us</Link></li>
                <li><Link href="#services" className="text-gray-400 hover:text-gold-500 transition-colors">Services</Link></li>
                <li><Link href="#fleet" className="text-gray-400 hover:text-gold-500 transition-colors">Our Fleet</Link></li>
                <li><Link href="#contact" className="text-gray-400 hover:text-gold-500 transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <p className="text-gray-400">Phone: +27 76 604 4335</p>
              <p className="text-gray-400">Email: info@Lag2Boost.com</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" /></svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center text-gray-400">
            <p>&copy; 2024 Lag2Boost. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}