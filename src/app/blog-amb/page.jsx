"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "../components/BlogData";

export default function BlogList() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const categories = [
    "Todos",
    ...Array.from(new Set(blogPosts.map((p) => p?.categoria).filter(Boolean))),
  ];

  return (
    <>
      <header className="text-center bg-[#253155] text-white py-12">
        <h1 className="text-3xl md:text-4xl font-bold tracking-wide">
          Blog e Artigos
        </h1>
      </header>

      {/* FILTRO DE CATEGORIAS */}
      <nav className="mb-5 mt-2">
        <div className="overflow-x-auto scrollbar-none">
          <ul className="flex items-center justify-center gap-4 sm:gap-6 px-4 sm:px-6 whitespace-nowrap">
            {categories.map((cat) => {
              const isActive = cat === selectedCategory;
              return (
                <li key={cat}>
                  <button
                    onClick={() => setSelectedCategory(cat)}
                    className={`
                      whitespace-nowrap
                      px-3 py-1.5 sm:px-4 sm:py-2
                      text-sm sm:text-base
                      font-medium
                      transition
                      cursor-pointer
                      ${
                        isActive
                          ? "bg-[#12274E] text-white rounded-md"
                          : "text-[#12274E] hover:text-[#12274E]/70"
                      }
                    `}
                  >
                    {cat}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {blogPosts
            .filter(
              (post) =>
                selectedCategory === "Todos" ||
                post.categoria === selectedCategory
            )
            .map((post) => (
              <div
                key={post.id}
                className="h-[470px] bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden flex flex-col transition hover:shadow-md"
              >
                {post.imagem && (
                  <div className="relative">
                    <Image
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
                  <Link href={`/blog/${post.slug}`} className="">
                    <h2 className="text-md mb-6 font-semibold text-gray-900 mb-2 hover:underline cursor-pointer transition">
                      {post.titulo}
                    </h2>
                  </Link>
                  <p className="text-sm text-gray-600 line-clamp-3 mb-4 text-justify">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto">
                    <Link
                      href={`/blog/${post.slug}`}
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
