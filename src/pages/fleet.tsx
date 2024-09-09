'use client'

import { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from "@/components/ui/button"

const vehicles = [
  { id: 1, name: "Rolls-Royce Phantom", category: "Sedan", image: "https://c4.wallpaperflare.com/wallpaper/118/497/185/rolls-royce-rolls-royce-phantom-car-full-size-car-wallpaper-preview.jpg", description: "The epitome of luxury, perfect for VIP transportation and special events." },
  { id: 2, name: "Mercedes-Benz S-Class", category: "Sedan", image: "https://img-ik.cars.co.za/news-site-za/images/2023/03/Mercedes-Benz-S500-3.jpg", description: "Combines cutting-edge technology with supreme comfort for a first-class journey." },
  { id: 3, name: "Bentley Continental", category: "Coupe", image: "https://www.hdcarwallpapers.com/download/bentley_continental_gt_speed_8k-1920x1080.jpg", description: "A blend of performance and luxury, ideal for stylish city tours." },
  { id: 4, name: "Range Rover Autobiography", category: "SUV", image: "https://w0.peakpx.com/wallpaper/378/242/HD-wallpaper-range-rover-autobiography-d350-2021-cars.jpg", description: "Luxurious SUV offering comfort and capability for any terrain." },
  { id: 5, name: "Cadillac Escalade", category: "SUV", image: "https://c4.wallpaperflare.com/wallpaper/708/934/487/2018-black-cadillac-edition-wallpaper-preview.jpg", description: "Spacious luxury SUV, perfect for group travel and airport transfers." },
  { id: 6, name: "Tesla Model S", category: "Sedan", image: "https://images6.alphacoders.com/478/478443.jpg", description: "Cutting-edge electric luxury, combining performance and eco-friendliness." },
]

export default function FleetPage() {
  const [filter, setFilter] = useState('All')
  const { scrollY } = useScroll()
  const headerParallax = useTransform(scrollY, [0, 300], [0, -50])
  const contentParallax = useTransform(scrollY, [0, 300], [0, -30])

  const filteredVehicles = filter === 'All' ? vehicles : vehicles.filter(v => v.category === filter)

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
          <img src="/fleet-hero.jpg" alt="Luxury Fleet" className="w-full h-full object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="relative z-10 text-5xl md:text-7xl font-bold text-center"
        >
          Our Fleet
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
          <h2 className="text-3xl font-bold mb-8 text-center">Explore Our Luxury Vehicles</h2>
          <p className="text-lg text-center max-w-3xl mx-auto mb-8">
            Discover our handpicked selection of premium vehicles, each offering a unique blend of style, comfort, and performance. Whether you&apos;re looking for a sleek sedan, a spacious SUV, or a sporty coupe, we have the perfect ride for your needs.
          </p>
          <div className="flex justify-center space-x-4 mb-12">
            {['All', 'Sedan', 'SUV', 'Coupe'].map((category) => (
              <Button
                key={category}
                onClick={() => setFilter(category)}
                className={`${filter === category ? 'bg-gold-500 text-black' : 'bg-gray-800 text-white'} hover:bg-gold-600 hover:text-black`}
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.section>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVehicles.map((vehicle, index) => (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow"
            >
              <img src={vehicle.image} alt={vehicle.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{vehicle.name}</h3>
                <p className="text-gray-400 mb-4">{vehicle.description}</p>
                <Button className="bg-gold-500 hover:bg-gold-600 text-black">Book Now</Button>
              </div>
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
          <h2 className="text-3xl font-bold mb-8">Can&apos;t Find What You&apos;re Looking For?</h2>
          <p className="text-lg mb-8">
            Our fleet is constantly expanding. If you have a specific vehicle in mind, don&apos;t hesitate to reach out.
          </p>
          <Button size="lg" className="bg-gold-500 hover:bg-gold-600 text-black" onClick={() => window.location.href = '/contact'}>
            Contact Us
          </Button>
        </motion.section>
      </motion.main>
    </div>
  )
}