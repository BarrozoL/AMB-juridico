export const schema = {
  // Organização do escritório (global do site)
  legalService({
    name,
    url,
    telephone,
    areaServed,
    image,
    sameAs = [],
    address,
  }) {
    const base = {
      "@context": "https://schema.org",
      "@type": "LegalService",
      name,
      url,
      telephone,
      areaServed,
    };
    if (image) base.image = image;
    if (sameAs?.length) base.sameAs = sameAs;
    if (address) base.address = address;
    return base;
  },

  // FAQPage (use apenas se as perguntas/respostas aparecem na página)
  faqPage(qas /* [{question, answer}] */) {
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: qas.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    };
  },

  // Trilho de navegação (breadcrumb)
  breadcrumb(items /* [{name, item}] em ordem */) {
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: items.map((it, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: it.name,
        item: it.item,
      })),
    };
  },

  // Post do blog
  blogPosting({
    headline,
    description,
    url,
    image,
    datePublished,
    dateModified,
    authorName = "AMB Jurídico",
  }) {
    const base = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline,
      description,
      url,
      mainEntityOfPage: url,
      author: { "@type": "Organization", name: authorName },
      datePublished,
      dateModified: dateModified || datePublished,
    };
    if (image) base.image = Array.isArray(image) ? image : [image];
    return base;
  },
};
