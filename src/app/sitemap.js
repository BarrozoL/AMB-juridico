// - Inclui apenas URLs canônicas e indexáveis
// - Usa lastModified real por rota (edite UPDATED_AT quando mudar conteúdo)

export default async function sitemap() {
  const base = "https://www.accaciobarrozo.com";

  // 🔧 Atualize estas datas quando o conteúdo de cada página mudar de fato.
  const UPDATED_AT = {
    "/": "2025-09-10",
    "/distrato-de-compra-do-imovel": "2025-08-28",
    "/atraso-na-entrega-da-obra": "2025-08-28",
    "/defeito-na-obra": "2025-08-28",
    "/devolucao-de-imovel": "2025-08-28",
    "/escritura-definitiva-negada": "2025-08-28",
    "/execucao-fiscal": "2025-08-28",
    "/inventario": "2025-08-28",
    "/direito-imobiliario": "2025-08-28",
    "/areas-de-atuacao": "2025-08-20",
    "/contato": "2025-08-15",
    "/blog-amb": "2025-09-10",
    "/causas-vencidas": "2025-08-20",
    "/quem-somos": "2025-06-01",

    // Blog posts:
    "/blog/quanto-do-valor-investido-eu-posso-resgatar": "2025-06-15",
    "/blog/prorrogacao-no-sfh-pode-deixar-o-financiamento-impagavel":
      "2025-06-10",
    "/blog/8-cuidados-na-hora-de-comprar-um-imovel-na-planta": "2025-05-30",
    "/blog/e-possivel-realizar-um-distrato-de-imovel-ainda-na-planta":
      "2025-05-20",
    "/blog/em-quais-casos-posso-fazer-um-distrato-de-imovel": "2025-05-10",
    "/blog/posso-solicitar-um-distrato-mesmo-estando-inadimplente-ou-com-dificuldades-para-pagar-as-prestacoes":
      "2025-04-30",
    "/blog/a-defesa-do-contribuinte-em-processos-de-execução-fiscal-por-dívida-de-iptu":
      "2025-04-15",
    "/blog/o-processo-de-execucao-fiscal-e-a-formalizacao-da-cda-certidao-da-divida-ativa":
      "2025-09-16",
    "/blog/estrategias-que-podem-ser-adotadas-na-defesa-do-contribuinte-na-execucao-fiscal-do-iptu":
      "2025-09-16",
    "/blog/consequencias-do-nao-pagamento-do-iptu": "2025-09-16",
    "/blog/formas-de-contestar-a-cobranca-indevida-do-iptu": "2025-09-16",
    "/blog/a-defesa-do-contribuinte-em-processos-de-execucao-fiscal-por-divida-de-iptu":
      "2025-09-16",
    "/blog/redirecionamento-da-execucao-fiscal-para-socios-e-administradores-entendendo-as-responsabilidades":
      "2025-09-16",
    "/blog/para-evitar-o-redirecionamento-da-execucao-fiscal-os-socios-devem-adotar-medidas-cautelosas-e-estar-cientes-de-suas-responsabilidades-aqui-estao-alguns-cuidados-essenciais":
      "2025-09-16",
    "/blog/bens-e-verbas-impenhoraveis-em-execucao-fiscal-protegendo-o-patrimonio-do-devedor":
      "2025-09-16",
    "/blog/tese-fixada-pelo-stj-quanto-a-possibilidade-de-redirecionamento-da-execucao-fiscal-para-o-socio":
      "2025-09-16",
    "/blog/redirecionamento-da-execucao-fiscal-para-o-socio-o-que-e-e-como-acontece":
      "2025-09-16",
  };

  const canonicalPaths = [
    "/",
    "/distrato-de-compra-do-imovel",
    "/atraso-na-entrega-da-obra",
    "/defeito-na-obra",
    "/devolucao-de-imovel",
    "/escritura-definitiva-negada",
    "/execucao-fiscal",
    "/inventario",
    "/direito-imobiliario",
    "/areas-de-atuacao",
    "/contato",
    "/blog-amb",
    "/causas-vencidas",
    "/quem-somos",
    "/blog/quanto-do-valor-investido-eu-posso-resgatar",
    "/blog/prorrogacao-no-sfh-pode-deixar-o-financiamento-impagavel",
    "/blog/8-cuidados-na-hora-de-comprar-um-imovel-na-planta",
    "/blog/e-possivel-realizar-um-distrato-de-imovel-ainda-na-planta",
    "/blog/em-quais-casos-posso-fazer-um-distrato-de-imovel",
    "/blog/posso-solicitar-um-distrato-mesmo-estando-inadimplente-ou-com-dificuldades-para-pagar-as-prestacoes",
    "/blog/a-defesa-do-contribuinte-em-processos-de-execução-fiscal-por-dívida-de-iptu",
    "/blog/redirecionamento-da-execucao-fiscal-para-o-socio-o-que-e-e-como-acontece",
    "/blog/tese-fixada-pelo-stj-quanto-a-possibilidade-de-redirecionamento-da-execucao-fiscal-para-o-socio",
    "/blog/bens-e-verbas-impenhoraveis-em-execucao-fiscal-protegendo-o-patrimonio-do-devedor",
    "/blog/para-evitar-o-redirecionamento-da-execucao-fiscal-os-socios-devem-adotar-medidas-cautelosas-e-estar-cientes-de-suas-responsabilidades-aqui-estao-alguns-cuidados-essenciais",
    "/blog/redirecionamento-da-execucao-fiscal-para-socios-e-administradores-entendendo-as-responsabilidades",
    "/blog/a-defesa-do-contribuinte-em-processos-de-execucao-fiscal-por-divida-de-iptu",
    "/blog/formas-de-contestar-a-cobranca-indevida-do-iptu",
    "/blog/consequencias-do-nao-pagamento-do-iptu",
    "/blog/estrategias-que-podem-ser-adotadas-na-defesa-do-contribuinte-na-execucao-fiscal-do-iptu",
    "/blog/o-processo-de-execucao-fiscal-e-a-formalizacao-da-cda-certidao-da-divida-ativa",
  ];

  // Hints coerentes por tipo de página (o Google pode ignorar, mas é bom manter)
  const CHANGE_FREQ = {
    "/": "daily",
    "/blog-amb": "daily",
    "/areas-de-atuacao": "monthly",
  };

  const PRIORITY = {
    "/": 1.0,
    "/distrato-de-compra-do-imovel": 0.9,
    "/atraso-na-entrega-da-obra": 0.9,
    "/defeito-na-obra": 0.9,
    "/devolucao-de-imovel": 0.9,
    "/escritura-definitiva-negada": 0.9,
    "/execucao-fiscal": 0.9,
    "/inventario": 0.9,
    "/direito-imobiliario": 0.9,
    "/areas-de-atuacao": 0.8,
    "/contato": 0.7,
    "/causas-vencidas": 0.7,
    "/blog-amb": 0.7,
    "/quem-somos": 0.5,
  };

  const fallbackDate = "2025-09-16"; // data padrão caso esqueça de preencher UPDATED_AT

  return canonicalPaths.map((path) => {
    const url = `${base}${path}`;
    const lastModifiedISO = new Date(
      UPDATED_AT[path] ?? fallbackDate
    ).toISOString();

    return {
      url,
      lastModified: lastModifiedISO,
      changeFrequency: CHANGE_FREQ[path] ?? "monthly",
      priority: PRIORITY[path] ?? 0.6,
    };
  });
}
