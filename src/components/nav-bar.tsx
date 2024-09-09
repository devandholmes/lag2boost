'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import '@/app/globals.css'

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed w-full z-50 bg-black bg-opacity-50 backdrop-blur-md"
        >
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-white">Lag2Boost</Link>
                <div className="hidden md:flex space-x-6">
                    <Link href="/#about" className="text-white hover:text-gold-500 transition-colors">About</Link>
                    <Link href="/services" className="text-white hover:text-gold-500 transition-colors">Services</Link>
                    <Link href="/fleet" className="text-white hover:text-gold-500 transition-colors">Our Fleet</Link>
                    <Link href="/contact" className="text-white hover:text-gold-500 transition-colors">Contact</Link>
                </div>
                <Button className="hidden md:block bg-gold-500 hover:bg-gold-600 text-black">Book Now</Button>
                <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X /> : <Menu />}
                </button>
            </div>
            {isMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="md:hidden bg-black bg-opacity-95 p-4"
                >
                    <Link href="#about" className="block py-2 text-white transition-colors">About</Link>
                    <Link href="/services" className="block py-2 text-white transition-colors">Services</Link>
                    <Link href="/fleet" className="block py-2 text-white transition-colors">Our Fleet</Link>
                    <Link href="/contact" className="block py-2 text-white transition-colors">Contact</Link>
                    <Button className="mt-4 w-full bg-gold-500 hover:bg-gold-600 text-black">Book Now</Button>
                </motion.div>
            )}
        </motion.nav>
    )
}