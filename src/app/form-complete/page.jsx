export const metadata = {
  robots: { index: false, follow: true },
  alternates: { canonical: "/contato" },
};

export default function FormCompletePage() {
  return (
    <>
      <div className="pb-80">
        <h1 className="text-4xl font-bold text-center mt-10 mb-5">
          Formulário Enviado com Sucesso!
        </h1>
        <p className="text-lg text-center mb-5">
          Agradecemos por entrar em contato. Nossa equipe analisará sua mensagem
          e retornará o mais breve possível.
        </p>
        <div className="flex justify-center mb-10">
          <img />
        </div>
        <a
          href="/"
          className="block h-20 w-[50%] mx-auto bg-[rgba(37,49,85,1)] hover:bg-[rgb(50,78,161)] text-white rounded text-center"
        >
          <p className="text-center p-5">Voltar para a página inicial</p>
        </a>
      </div>
    </>
  );
}
