"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { blogPosts } from "./BlogData";
import { useEffect, useState } from "react";

export default function Sidebar() {
  const [recentPosts, setRecentPosts] = useState(blogPosts.slice(0, 4));

  useEffect(() => {
    // Shuffle apenas no cliente
    const shuffled = [...blogPosts].sort(() => 0.5 - Math.random()).slice(0, 4);
    setRecentPosts(shuffled);
  }, []);

  return (
    <aside className="w-full">
      {/* Mais Artigos Section */}
      <div>
        <h3 className="text-xl font-bold mb-4">Mais Artigos</h3>
        <ul className="space-y-6">
          {recentPosts.map((post) => (
            <li key={post.id} className="flex items-start space-x-4">
              {post.imagem ? (
                <div className="w-20 h-16 flex-shrink-0 bg-gray-200 overflow-hidden rounded">
                  <Image
                    src={post.imagem}
                    alt={post.titulo}
                    className="object-cover w-full h-full"
                  />
                </div>
              ) : null}

              <div className="flex-1">
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-lg font-semibold text-gray-700 hover:underline"
                >
                  {post.titulo}
                </Link>
                <p className="text-sm text-gray-600 mt-1 line-clamp-3">
                  {post.excerpt}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
