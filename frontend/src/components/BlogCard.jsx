import React from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ blog }) => {
    const navigate = useNavigate();
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            onClick={() => navigate(`/blog/${blog.id}`)}
            className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-pointer"
        >
            <div className="relative h-48 overflow-hidden">
                <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-primary shadow-sm">
                    {blog.type}
                </div>
            </div>

            <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                    <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                        {blog.type}
                    </span>
                    <span className="text-gray-400 text-[10px] font-medium uppercase tracking-wider">
                        {blog.date} • {blog.readTime}
                    </span>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 hover:text-primary transition-colors cursor-pointer leading-snug">
                    {blog.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3 mb-6 leading-relaxed">
                    {blog.description}
                </p>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                    <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-indigo-600 flex items-center justify-center text-white font-bold text-xs shadow-sm shadow-primary/20">
                            {blog.author[0]}
                        </div>
                        <div>
                            <p className="text-xs font-bold text-gray-800 leading-none">{blog.author}</p>
                            <p className="text-[10px] text-gray-400 mt-1">Author</p>
                        </div>
                    </div>
                    <button className="text-primary text-sm font-bold flex items-center gap-1.5 group cursor-pointer">
                        Read
                        <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default BlogCard;
