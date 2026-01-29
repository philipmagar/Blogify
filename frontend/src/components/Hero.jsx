import React from "react";
import { motion } from "motion/react";

const Hero = ({ searchQuery, setSearchQuery, selectedCategory, setSelectedCategory }) => {
    const categories = ["All", "Technology", "Startup", "Finance", "Freewriting"];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mx-8 sm:mx-16 xl:mx-24 relative"
        >
            <div className=" text-center mt-10 mb-8">
                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl sm:text-7xl font-bold sm:leading-18 text-gray-800 tracking-tight"
                >
                    Forge Your <span className="text-primary italic">Legacy.</span><br /> Own the Conversation.
                </motion.h1>

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="my-6 sm:my-10 max-w-3xl m-auto max-sm:text-xs text-gray-600 text-lg leading-relaxed font-medium"
                >
                    The world is waiting for your next breakthrough. Join an elite collective of visionaries, thinkers, and creators redefining the digital frontier. Your story isn't just data it's power.
                </motion.p>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="max-w-lg mx-auto"
                >
                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="flex justify-between max-sm:scale-75 mx-auto 
                        border border-gray-300 bg-white rounded overflow-hidden shadow-sm focus-within:shadow-md transition-shadow"
                    >
                        <input
                            type="text"
                            placeholder="search for blogs"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-4 outline-none"
                        />
                        <button type="submit" className="p-4 bg-primary text-white px-8 py-2 m-1.5
                        rounded hover:scale-105 transition-all cursor-pointer font-medium">Search</button>
                    </form>

                    {/* Blog Types / Categories below search bar */}
                    <div className="flex flex-wrap justify-center gap-2 mt-6">
                        {categories.map((cat, index) => (
                            <motion.button
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5 + index * 0.05 }}
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-4 py-1.5 rounded-full text-xs font-semibold cursor-pointer transition-all ${selectedCategory === cat
                                    ? "bg-primary text-white shadow-md shadow-primary/20"
                                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                                    }`}
                            >
                                {cat}
                            </motion.button>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Hero;