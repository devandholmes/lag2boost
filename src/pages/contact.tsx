'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail } from 'lucide-react'
import { BsWhatsapp } from 'react-icons/bs'

export default function ContactPage() {
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
                    <img src="/contact-hero.jpg" alt="Contact Us" className="w-full h-full object-cover" />
                </motion.div>
                <div className="absolute inset-0 bg-black bg-opacity-50" />
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="relative z-10 text-5xl md:text-7xl font-bold text-center"
                >
                    Contact Us
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
                    <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
                    <p className="text-lg text-center max-w-3xl mx-auto mb-12">
                        Whether you have a question about our services, need a custom quote, or want to provide feedback, we're here to help. Reach out to us and experience our commitment to exceptional customer service.
                    </p>
                </motion.section>

                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                                <Input id="name" type="text" placeholder="Your Name" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                                <Input id="email" type="email" placeholder="your@email.com" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                                <Textarea id="message" placeholder="Your message here..." rows={4} />
                            </div>
                            <Button type="submit" className="w-full bg-gold-500 hover:bg-gold-600 text-black">
                                Send Message
                            </Button>
                        </form>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                        <div className="flex items-start space-x-4">
                            <BsWhatsapp className="w-6 h-6 text-gold-500 flex-shrink-0 mt-1" />
                            <div>
                                <h4 className="font-semibold mb-2">WhatsApp</h4>
                                <p className="text-gray-400">+27 76 604 4335</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <Phone className="w-6 h-6 text-gold-500 flex-shrink-0 mt-1" />
                            <div>
                                <h4 className="font-semibold mb-2">Phone</h4>
                                <p className="text-gray-400">+27 76 604 4335</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <Mail className="w-6 h-6 text-gold-500 flex-shrink-0 mt-1" />
                            <div>
                                <h4 className="font-semibold mb-2">Email</h4>
                                <p className="text-gray-400">info@Lag2Boost.com</p>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Business Hours</h4>
                            <p className="text-gray-400">Monday - Friday: 9am - 6pm</p>
                            <p className="text-gray-400">Saturday: 10am - 4pm</p>
                            <p className="text-gray-400">Sunday: Closed</p>
                        </div>
                    </motion.div>
                </div>
            </motion.main>
        </div>
    )
}