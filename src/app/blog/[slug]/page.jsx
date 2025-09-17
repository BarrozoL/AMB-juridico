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
      <div className="w-screen bg-[#211f40] p-2 text-white py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">{post.titulo}</h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col lg:flex-row items-start">
        {/* MAIN CONTENT */}
        <div className="mx-auto w-full max-w-2xl">
          {/* This link should point to your blog list page */}
          <Link href="/blog-amb">
            <button className="cursor-pointer mt-4 mb-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition duration-300">
              Voltar para o Blog
            </button>
          </Link>
          <p className="text-sm text-gray-500 mb-2">
            Publicado em: {post.data}
          </p>

          <div
            className="prose max-w-none text-justify leading-relaxed text-gray-800"
            dangerouslySetInnerHTML={{ __html: post.texto }}
          />
        </div>

        {/* SIDEBAR */}
        <div className="mt-8 lg:mt-0 lg:ml-8 flex-shrink-0 w-full lg:w-64">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
