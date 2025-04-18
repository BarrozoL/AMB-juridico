import React from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "../components/BlogData";

export default function BlogList() {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl text-center font-bold mb-8">Blog</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="h-[470px] bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden flex flex-col transition hover:shadow-md"
            >
              {post.imagem && (
                <div className="relative">
                  <img
                    src={post.imagem}
                    alt={post.titulo}
                    className="w-full h-55 mb-5 object-cover"
                  />

                  {post.categoria && (
                    <span className="absolute top-2 left-2 bg-[#EAD946] text-gray-800 text-xs font-semibold px-3 py-1 rounded-full">
                      {post.categoria}
                    </span>
                  )}
                </div>
              )}

              {/* Card Content */}
              <div className="p-4 flex flex-col flex-grow">
                <Link to={`/blog/${post.slug}`} className="">
                  <h2 className="text-md mb-6 font-semibold text-gray-900 mb-2 hover:underline cursor-pointer transition">
                    {post.titulo}
                  </h2>
                </Link>
                <p className="text-sm text-gray-600 line-clamp-3 mb-4 text-justify">
                  {post.excerpt}
                </p>
                <div className="mt-auto">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-sm font-semibold text-blue-600 hover:underline hover:text-blue-800"
                  >
                    Leia Mais &gt; &gt;
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
