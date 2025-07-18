import { causasVencidas } from "../components/CausasVencidasData";
import Link from "next/link";
import Image from "next/image";

export default function CausasVencidas() {
  return (
    <>
      <header className="text-center bg-[#253155] text-white py-12">
        <h1 className="text-3xl md:text-4xl font-bold tracking-wide">
          Vitórias do Escritório
        </h1>
      </header>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {causasVencidas.map((post) => (
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
                <Link href={`/causas-vencidas/${post.slug}`} className="">
                  <h2 className="text-md mb-6 font-semibold text-gray-900 mb-2 hover:underline cursor-pointer transition">
                    {post.titulo}
                  </h2>
                </Link>
                <p className="text-sm text-gray-600 line-clamp-3 mb-4 text-justify">
                  {post.excerpt}
                </p>
                <div className="mt-auto">
                  <Link
                    href={`/causas-vencidas/${post.slug}`}
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
