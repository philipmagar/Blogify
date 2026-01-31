import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BLOG_DATA } from "../data";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { motion } from "motion/react";
import { Facebook, Twitter, Linkedin, Link, Bookmark } from "lucide-react";

const Blog = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        const foundBlog = BLOG_DATA.find((b) => b.id === parseInt(id));
        if (foundBlog) {
            setBlog(foundBlog);
            window.scrollTo(0, 0);
        }
    }, [id]);

    if (!blog) return null;

    const dummyComments = [
        { id: 1, name: "David Miller", date: "2 days ago", text: "Incredible insights! I never thought about the reasoning aspect of AI this way. Truly the future." },
        { id: 2, name: "Sophia Lee", date: "3 days ago", text: "Great write-up. The point about unit economics in startups is spot on for 2026." },
        { id: 3, name: "James Wilson", date: "1 week ago", text: "I've been practicing freewriting for a month now, and it's changed my creative process entirely." },
        { id: 4, name: "Elena Rodriguez", date: "1 week ago", text: "Quantum computing still feels like magic to me, but this explanation helped bridge the gap." },
        { id: 5, name: "Mark Thompson", date: "2 weeks ago", text: "Finance is getting complicated day by day. Thanks for the breakdown of high-interest strategies." }
    ];

    const shareLinks = [
        { name: "Facebook", icon: <Facebook size={16} />, color: "hover:text-blue-600 hover:bg-blue-50 hover:border-blue-200" },
        { name: "Twitter", icon: <Twitter size={16} />, color: "hover:text-blue-400 hover:bg-blue-50 hover:border-blue-200" },
        { name: "LinkedIn", icon: <Linkedin size={16} />, color: "hover:text-blue-700 hover:bg-blue-50 hover:border-blue-200" },
        { name: "Link", icon: <Link size={16} />, color: "hover:text-gray-700 hover:bg-gray-50 hover:border-gray-300" },
    ];

    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main className="mx-8 sm:mx-20 xl:mx-64 py-10">
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-gray-500 hover:text-primary transition-colors mb-8 
                    cursor-pointer font-medium"
                >
                    <span>←</span> Back to articles
                </button>
                <div className="mb-10">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full 
                        uppercase tracking-widest">
                            {blog.type}
                        </span>
                        <span className="text-gray-400 text-xs font-medium uppercase tracking-wider">
                            {blog.date} • {blog.readTime}
                        </span>
                    </div>
                    <h1 className="text-3xl sm:text-5xl font-bold text-gray-800 leading-tight mb-6">
                        {blog.title}
                    </h1>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-indigo-600 
                        flex items-center justify-center text-white font-bold shadow-lg shadow-primary/20">
                            {blog.author[0]}
                        </div>
                        <div>
                            <p className="text-sm font-bold text-gray-800">{blog.author}</p>
                            <p className="text-[10px] text-gray-400">Published Author</p>
                        </div>
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="rounded-3xl overflow-hidden mb-12 shadow-2xl shadow-gray-200"
                >
                    <img src={blog.image} alt={blog.title} className="w-full h-auto object-cover max-h-[500px]" />
                </motion.div>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-16 px-2 sm:px-0">
                    <p className="text-xl font-medium text-gray-600 mb-8 italic border-l-4 border-primary pl-6 py-2">
                        {blog.description}
                    </p>
                    {blog.content.split('\n\n').map((paragraph, index) => (
                        <p key={index} className="mb-6">{paragraph}</p>
                    ))}
                </div>
                <div className="border-y border-gray-100 py-8 mb-16 flex flex-col sm:flex-row justify-between 
                items-center gap-6">
                    <div className="flex items-center gap-3">
                        <span className="text-sm font-bold text-gray-800 uppercase tracking-widest">Share this story:</span>
                        <div className="flex gap-3">
                            {shareLinks.map((platform) => (
                                <button
                                    key={platform.name}
                                    className={`w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 transition-all cursor-pointer ${platform.color}`}
                                    title={`Share on ${platform.name}`}
                                >
                                    {platform.icon}
                                </button>
                            ))}
                        </div>
                    </div>
                    <button className="flex items-center gap-2 px-6 py-2 bg-gray-50 hover:bg-gray-100 text-gray-600 rounded-full text-sm font-bold transition-all border border-gray-100 cursor-pointer">
                        <Bookmark size={16} />
                        <span>Save as Bookmark</span>
                    </button>
                </div>
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-gray-800 mb-10 flex items-center gap-4">
                        Comments <span className="text-primary bg-primary/10 px-3 py-1 rounded-full text-xs">
                            {dummyComments.length}</span>
                    </h3>

                    <div className="space-y-10 mb-12 px-2 sm:px-0">
                        {dummyComments.map((comment) => (
                            <div key={comment.id} className="flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-gray-100 flex-shrink-0 flex items-center 
                                justify-center text-gray-400 font-bold border border-gray-50 text-xs">
                                    {comment.name[0]}
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <h4 className="font-bold text-sm text-gray-800">{comment.name}</h4>
                                        <span className="text-[10px] text-gray-400 uppercase tracking-tighter">• {comment.date}</span>
                                    </div>
                                    <p className="text-gray-600 text-[13px] leading-relaxed">{comment.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <form onSubmit={(e) => e.preventDefault()} className="bg-gray-50 rounded-3xl p-6 sm:p-8">
                        <h4 className="text-sm font-bold text-gray-800 mb-4 uppercase tracking-widest">Post a Comment</h4>
                        <div className="relative group">
                            <textarea
                                placeholder="Share your thoughts with the community..."
                                className="w-full h-32 bg-white border border-gray-100 rounded-2xl p-4 text-[13px] text-gray-700 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm resize-none mb-4"
                            ></textarea>
                            <button className="px-8 py-3 bg-primary text-white rounded-full text-xs font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer">
                                Submit Comment
                            </button>
                        </div>
                    </form>
                </div>
            </main>
            <Newsletter />
        </div>
    );
};
export default Blog;