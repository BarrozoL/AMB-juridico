// Sidebar.jsx
import React from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "./BlogData";

export default function Sidebar() {
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <aside className="bg-gray-100 p-4 rounded ">
      <h3 className="text-lg font-bold mb-2">Artigos Recentes</h3>
      <ul className="space-y-2">
        {recentPosts.map((post) => (
          <li key={post.id}>
            <Link to={`/blog/${post.slug}`} className="text-blue-600 underline">
              {post.titulo}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
