import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { blogPosts } from "../components/BlogData";

export default function BlogPostsAmb() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Post not found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      {/* Example disclaimer or subheading */}
      <p className="text-sm text-gray-500 mb-2">Publicado em: {post.data}</p>
      {/* Main content */}
      <div className="text-justify leading-relaxed text-gray-800">
        {post.texto}
      </div>
    </div>
  );
}
