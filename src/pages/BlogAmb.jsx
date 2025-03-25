import React from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "../components/BlogData";

export default function BlogList() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>

      {/* Cards Container: 1 column on small screens, 3 columns on medium+ */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
          >
            {/* Top image (optional). If your data includes post.image */}
            {post.imagem && (
              <div className="relative">
                <img
                  src={post.imagem}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                {/* Category label / badge. Replace "post.category" with your data field */}
                {post.categoria && (
                  <span className="absolute top-2 left-2 bg-[#EAD946] text-gray-800 text-xs font-semibold px-3 py-1 rounded-full">
                    {post.categoria}
                  </span>
                )}
              </div>
            )}

            {/* Card Content */}
            <div className="p-4 flex flex-col flex-grow">
              <h2 className="text-lg font-bold mb-2">{post.titulo}</h2>
              <p className="text-gray-700 text-sm mb-4 flex-grow">
                {post.excerpt}
              </p>
              <div className="mt-auto">
                <Link
                  to={`/blog/${post.slug}`}
                  className="text-sm font-semibold text-blue-600 hover:underline hover:text-blue-800"
                >
                  Leia Mais &gt;
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
