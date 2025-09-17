import { blogPosts } from "../../components/BlogData"; // Corrected path
import Sidebar from "../../components/BlogSidebar";
import Link from "next/link";
import { notFound } from "next/navigation";

// Step 1: Generate the list of pages for Vercel to build
export async function generateStaticParams() {
  // Return an array of objects, where each object has a 'slug' property
  return blogPosts.map((post) => ({
    slug: post?.slug,
  }));
}

export default function BlogPostPage({ params }) {
  const { slug } = params;

  // Step 2: Find the specific post for this page
  const post = blogPosts.find((p) => p?.slug === slug);

  // If no post with that slug exists, show a 404 page
  if (!post) {
    notFound();
  }

  return (
    <div>
      <div className="w-full bg-[#211f40] p-2 text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">{post.titulo}</h1>
      </div>

      <div className="w-full flex flex-col lg:flex-row">
        {/* MAIN CONTENT - Centralizado no espaço disponível */}
        <div className="flex-1 flex justify-center px-4 py-8">
          <div className="w-full max-w-2xl">
            <div className="text-3xl mb-10 border-amber-400 font-serif border-l-4 p-1 pl-4">
              <h2>{post.excerpt}</h2>
            </div>
            <div
              className="prose max-w-none text-justify text-lg leading-loose text-gray-800"
              dangerouslySetInnerHTML={{ __html: post.texto }}
            />

            <div className="mt-10">
              <Link href="/blog-amb">
                <button className="cursor-pointer mt-4 mb-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition duration-300">
                  Voltar para o Blog
                </button>
              </Link>
              <p className="text-sm text-gray-500 mb-2">
                Publicado em: {post.data}
              </p>
            </div>
          </div>
        </div>

        {/* SIDEBAR - Extrema direita */}
        <div className="w-full lg:w-80 lg:pr-4 px-4 lg:px-0 py-8 lg:py-8">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
