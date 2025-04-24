import imagemDona from "../assets/images/imagem-dona-com-folhas.png.png";

export default function HeroSection() {
  return (
    <>
      <section className="bg-white lg:grid lg:h-screen lg:place-content-center">
        <div className="mx-auto w-full max-w-screen-1xl px-4 pt-5 sm:px-6 sm:py-34 md:grid md:grid-cols-2 md:items-center md:gap-4 lg:px-8 lg:py-5">
          <div className="max-w-prose lg:ml-5 text-left">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-6xl">
              Defendemos <br />
              Você na
              <strong className="text-indigo-600"> Execução Fiscal </strong>
              de Dívidas
            </h1>

            <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
              Há quase três décadas, nosso escritório tem sido referência no
              cenário jurídico, oferecendo soluções eficazes e seguras para
              nossos clientes.
            </p>

            <div className="mt-4 flex gap-4 sm:mt-6">
              <a
                className="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
                href="#"
              >
                Entre em contato
              </a>

              <a
                className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900"
                href="#"
              >
                Mais informações
              </a>
            </div>
          </div>
          <img src={imagemDona} className="" alt="imagem-justiça-cega" />
        </div>
      </section>
    </>
  );
}
