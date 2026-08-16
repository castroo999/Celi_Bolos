import "./Hero.css";
import { motion } from "motion/react";
import SplitText from "../animações/SplitText";
import AnimatedStars from "../animações/AnimatedStars";
import heroImage from "../assets/bolo1.webp";
import doces from "../assets/doces.webp";
import boloPote from "../assets/bolo-pote.webp";
import { celiWhatsappUrl } from "../utils/whatsapp";

// Imagens pequenas que flutuam ao redor da foto principal do hero.
// Use apenas imagens já presentes em src/assets para evitar depender de arquivos externos.
const orbitImages = [
  { src: doces, alt: "Doces artesanais", className: "hero-chip hero-chip-doces" },
  { src: boloPote, alt: "Bolo de pote", className: "hero-chip hero-chip-pote" },
];

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      {/* Selo pequeno acima do título. A animação é só de entrada. */}
      <motion.div
        className="hero-ribbon"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.55 }}
      >
        Artesanal • Cerquilho • Feito sob encomenda
      </motion.div>

      <div className="hero-text">
        {/* SplitText anima letra por letra. Se quiser algo mais simples, troque por h1/p comuns. */}
        <SplitText
          text="Há mais de 30 anos adoçando momentos especiais"
          tag="h1"
          className="hero-title"
          delayStart={0}
        />

        <SplitText
          text="Bolos artesanais preparados com carinho para transformar aniversários, casamentos e celebrações em memórias inesquecíveis."
          tag="p"
          className="hero-description"
          delayStart={1.1}
        />

        {/* Bloco de prova social com estrelas animadas. */}
        <motion.div
          className="avaliacao"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.95, duration: 0.55, ease: "easeOut" }}
        >
          <div className="estrelas-hero">
            <AnimatedStars />
          </div>

          <span>Mais de 30 anos de tradição em Cerquilho</span>
        </motion.div>

        {/* Botões principais. O orçamento abre o WhatsApp definido em src/utils/whatsapp.js. */}
        <motion.div
          className="botoes"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.12, duration: 0.55, ease: "easeOut" }}
        >
          <a
            className="btn-orcamento"
            href={celiWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Fazer orçamento
          </a>
          <a className="btn-catalogo" href="#catalogo">
            Ver catálogo
          </a>
        </motion.div>
      </div>

      {/* Foto principal do hero. Os chips orbitais ficam posicionados pelo CSS. */}
      <motion.div
        className="hero-image"
        initial={{ opacity: 0, scale: 0.92, rotate: -2, y: 30 }}
        animate={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
        transition={{ delay: 0.35, duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
      >
        <img src={heroImage} alt="Bolo artesanal decorado da Celi Bolos" />

        {orbitImages.map((image, index) => (
          <motion.div
            className={image.className}
            key={image.alt}
            initial={{ opacity: 0, scale: 0.7, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.9 + index * 0.16, duration: 0.65, ease: "easeOut" }}
          >
            <img src={image.src} alt={image.alt} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
