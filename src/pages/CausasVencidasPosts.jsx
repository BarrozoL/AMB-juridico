import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "../components/BlogSidebar";
import { causasVencidas } from "../components/CausasVencidasData";

export default function BlogPostsAmb() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const post = causasVencidas.find((p) => p.slug === slug);

  const navigateBackToBlog = () => {
    navigate("/blog-amb");
  };

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Post não encontrado</h1>
      </div>
    );
  }

  return (
    <div>
      {/* ===== Full-Width Title Section ===== */}
      <div className="w-screen bg-[#211f40] p-2 text-white py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">{post.titulo}</h1>
      </div>

      {/* ===== Main Layout: Centered Content + Right Sidebar ===== */}
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col lg:flex-row items-start">
        {/* MAIN CONTENT */}
        <div className="mx-auto w-full max-w-2xl">
          <button
            className="cursor-pointer mt-4 mb-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition duration-300"
            onClick={navigateBackToBlog}
          >
            Voltar para o Blog
          </button>
          <p className="text-sm text-gray-500 mb-2">
            Publicado em: {post.data}
          </p>

          <div
            className="text-justify leading-relaxed text-gray-800"
            dangerouslySetInnerHTML={{ __html: post.texto }}
          />
        </div>

        <div className="mt-8 lg:mt-0 mr-12 w-full lg:w-64">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
