import React, { useState, useMemo } from "react";
import BlogCard from "./BlogCard";
import { motion } from "motion/react";

import { BLOG_DATA } from "../data";

const CATEGORIES = ["All", "Technology", "Startup", "Finance", "Freewriting"];

const BlogList = ({ searchQuery, selectedCategory }) => {
    const filteredBlogs = useMemo(() => {
        return BLOG_DATA.filter((blog) => {
            const matchesCategory = selectedCategory === "All" || blog.type === selectedCategory;
            const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                blog.description.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [selectedCategory, searchQuery]);

    return (
        <div className="mx-8 sm:mx-20 xl:mx-32 py-10">
            {/* Blog Grid */}
            {filteredBlogs.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredBlogs.map((blog) => (
                        <BlogCard key={blog.id} blog={blog} />
                    ))}
                </div>
            ) : (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-20"
                >
                    <div className="text-4xl mb-4">🔍</div>
                    <h3 className="text-xl font-bold text-gray-800">No articles found</h3>
                    <p className="text-gray-500">Try adjusting your search or category filter.</p>
                </motion.div>
            )}
        </div>
    );
};

export default BlogList;
