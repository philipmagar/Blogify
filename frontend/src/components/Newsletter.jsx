import React from "react";
import logo from "../assets/logo.png";
import { motion } from "motion/react";
import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";

const Newsletter = () => {
    const socialLinks = [
        { name: "Instagram", icon: <Instagram size={14} />, color: "hover:text-pink-500" },
        { name: "Twitter", icon: <Twitter size={14} />, color: "hover:text-blue-400" },
        { name: "Facebook", icon: <Facebook size={14} />, color: "hover:text-blue-600" },
        { name: "YouTube", icon: <Youtube size={14} />, color: "hover:text-red-600" },
    ];

    return (
        <footer className="bg-gray-50 border-t border-gray-100 pt-12 pb-10 mt-10">
            {/* Newsletter Section */}
            <div className="mx-8 sm:mx-20 xl:mx-32 mb-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}>
                </motion.div>
            </div>

            {/* Main Footer Content */}
            <div className="mx-8 sm:mx-20 xl:mx-32 grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 mb-16">
                {/* Column 1: Logo and About */}
                <div className="flex flex-col gap-6">
                    <img src={logo} alt="Blogify Logo" className="w-20 sm:w-24 cursor-pointer" />
                    <p className="text-gray-600 text-sm leading-relaxed max-w-xs font-medium">
                        Empowering the world's most influential voices to lead the global discourse. Your thoughts are the fuel for tomorrow's reality. Command your stage.
                    </p>
                </div>

                {/* Column 2: Quick Links */}
                <div>
                    <h3 className="text-gray-800 font-bold mb-6">Quick Links</h3>
                    <ul className="flex flex-col gap-4">
                        {["Home", "Best Sellers", "Offers", "Contact Us", "FAQ"].map((item) => (
                            <li key={item}>
                                <a href="#" className="text-gray-500 hover:text-primary text-sm transition-colors list-none">
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Column 3: Follow Us */}
                <div>
                    <h3 className="text-gray-800 font-bold mb-6">Follow Us</h3>
                    <ul className="flex flex-col gap-4">
                        {socialLinks.map((item) => (
                            <li key={item.name}>
                                <a href="#" className={`text-gray-500 ${item.color} text-sm transition-colors list-none flex items-center gap-2`}>
                                    {item.icon}
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="border-t border-gray-100 pt-10 text-center">
                <p className="text-gray-400 text-xs">
                    &copy; {new Date().getFullYear()} Blogify Inc. All rights reserved. Designed by Philip.
                </p>
            </div>
        </footer>
    );
};

export default Newsletter;
