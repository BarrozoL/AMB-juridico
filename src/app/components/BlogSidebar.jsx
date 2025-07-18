"use client";

import Image from "next/image";

import React from "react";
import Link from "next/link";
import { blogPosts } from "./BlogData";

export default function Sidebar() {
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <aside className="w-full lg:w-72 lg:ml-8">
      {/* "Compartilhe" Section */}
      {/*   <div className="pb-4 mb-4 border-b border-gray-300">
        <h3 className="text-xl font-bold mb-4">Compartilhe</h3>
        <div className="flex space-x-4">
          <SocialIcon icon="facebook-f" link="https://facebook.com" />
          <SocialIcon icon="twitter" link="https://twitter.com" />
          <SocialIcon icon="linkedin-in" link="https://linkedin.com" />
        </div>
      </div> */}

      {/* Mais Artigos Section */}
      <div>
        <h3 className="text-x1 font-bold mb-4">Mais Artigos</h3>
        <ul className="space-y-9">
          {recentPosts.map((post) => (
            <li key={post.id} className="flex items-start space-x-4">
              {/* Optional Image - if your post has an `imagem` field */}
              {post.imagem ? (
                <div className="w-20 h-16 flex-shrink-0 bg-gray-200 overflow-hidden rounded">
                  <Image
                    src={post.imagem}
                    alt={post.titulo}
                    className="object-cover w-full h-full"
                  />
                </div>
              ) : null}

              <div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-lg font-semibold text-gray-900 hover:underline"
                >
                  {post.titulo}
                </Link>
                <p className="text-sm w-60 text-gray-600 mt-1 line-clamp-3">
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
