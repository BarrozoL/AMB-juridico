export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">
        404 - Página não encontrada
      </h1>
      <p className="mt-4 text-lg text-gray-700">
        Desculpe, a página que você está procurando não existe.
      </p>
      <a
        href="/"
        className="mt-6 px-4 py-2 bg-[rgba(37,49,85,1)] hover:bg-[rgb(50,78,161)] text-white rounded "
      >
        Voltar para a página inicial
      </a>
    </div>
  );
}
