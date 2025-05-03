import { useState, useEffect, useRef } from "react";
import imagemDona from "../assets/images/imagem-dona-com-folhas.png.png";
import { motion, AnimatePresence } from "framer-motion";

const heroText = [
  {
    title: "Defendemos Você na Execução Fiscal de Dívidas",
    subtitle:
      "Há quase três décadas, nosso escritório tem sido referência no cenário jurídico, oferecendo soluções eficazes e seguras para nossos clientes. Cobranças fiscais abusivas podem comprometer seu patrimônio. Revisamos valores, anulamos cobranças indevidas e garantimos um processo fiscal justo. Descubra como podemos ajudar você a evitar prejuízos e regularizar sua situação fiscal com segurança!",
    slug: "/execuçao-fiscal",
    highlight: ["Execução", "Fiscal"],
  },
  {
    title: `Expertise Para Tomar Decisões Imobiliárias com Confiança!`,
    subtitle:
      "Somos referência no Direito Imobiliário, atuando no cenário jurídico desde 1996, defendendo o patrimônio de nossos clientes, recuperando o investimento realizado e oferecendo suporte estratégico para tornar cada compra de imóvel uma experiência segura e transparente.",
    slug: "/imobiliario",
    highlight: ["Tomar", "Decisões"],
  },
  {
    title: "Vamos Ajudar Você a Proteger Seu Legado",
    subtitle:
      "Cuidamos do que é mais importante para você: seu patrimônio e sua família. Atuamos no planejamento sucessório, na condução de inventários judiciais e extrajudiciais e na formalização de doações, sempre com foco na resolução de conflitos familiares. Nosso compromisso é garantir rapidez e eficiência, minimizando desgastes emocionais e burocráticos para que você possa seguir em frente com tranquilidade.",
    slug: "/inventario",
    highlight: ["Proteger", "Seu", "Legado"],
  },
];

export default function HeroSection() {
  const [currentText, setCurrentText] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef(null);

  const { title, subtitle, slug, highlight } = heroText[currentText];

  // Resettable timeout + pause-on-hover
  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    if (!isHovered) {
      timerRef.current = setTimeout(() => {
        setCurrentText((i) => (i + 1) % heroText.length);
      }, 10000);
    }
    return () => clearTimeout(timerRef.current);
  }, [currentText, isHovered]);

  const prevHero = () =>
    setCurrentText((i) => (i - 1 + heroText.length) % heroText.length);

  const nextHero = () => setCurrentText((i) => (i + 1) % heroText.length);

  const variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const highlightTitle = (title, highlight) => {
    const words = title.split(" ");
    const toPaint = highlight?.length ? highlight : words.slice(0, 2); // fallback
    return words.map((w, idx) => (
      <span key={idx} className={toPaint.includes(w) ? "text-indigo-600" : ""}>
        {w + (idx < words.length - 1 ? " " : "")}
      </span>
    ));
  };

  return (
    <>
      <section className="bg-white lg:grid lg:h-screen lg:place-content-center">
        <div className="mx-auto w-full max-w-screen-1xl px-4 pt-5 sm:px-6 sm:py-34 md:grid md:grid-cols-2 md:items-center md:gap-4 lg:px-8 lg:py-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentText}
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="max-w-prose lg:ml-5 text-left"
            >
              <h1
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="text-4xl font-bold text-gray-900 sm:text-6xl"
              >
                {highlightTitle(title, highlight)}
              </h1>

              <p
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="mt-4 text-base text-justify text-pretty text-gray-700 sm:text-lg/relaxed"
              >
                {subtitle}
              </p>

              <div className="mt-4 flex gap-4 sm:mt-6">
                <a
                  className="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
                  href="https://api.whatsapp.com/send/?phone=5521999684428&text&type=phone_number&app_absent=0"
                  target="_blank"
                >
                  Entre em contato
                </a>

                <a
                  className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900"
                  href={slug}
                  target="_blank"
                >
                  Mais informações
                </a>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => {
                      prevHero();
                      // timer resets via effect
                    }}
                    aria-label="Slide anterior"
                    className="rounded-full bg-white/70 p-2 shadow cursor-pointer hover:bg-blue"
                  >
                    ❮
                  </button>
                  <button
                    onClick={() => {
                      nextHero();
                      // timer resets via effect
                    }}
                    aria-label="Próximo slide"
                    className="rounded-full bg-white/70 p-2 shadow cursor-pointer hover:bg-white"
                  >
                    ❯
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <img src={imagemDona} className="" alt="imagem-justiça-cega" />
        </div>
      </section>
    </>
  );
}
