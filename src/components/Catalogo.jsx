import "./Catalogo.css";
import { motion } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import SplitText from "../animações/SplitText";

import {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import bolo from "../assets/bolo1.webp";
import boloPote from "../assets/bolo-pote.webp";
import doces from "../assets/doces.webp";
import { celiWhatsappUrl } from "../utils/whatsapp";

const produtos = [
  {
    titulo: "Bolos",
    descricao: "Elegância e sabor para tornar o seu grande dia inesquecível.",
    imagem: bolo,
  },
  {
    titulo: "Bolos de Pote",
    descricao: "Bolos de pote para qualquer ocasião.",
    imagem: boloPote,
  },
  {
    titulo: "Doces",
    descricao: "Brigadeiros e doces artesanais preparados com carinho.",
    imagem: doces,
  },
];

export default function Catalogo() {
  return (
    <section className="catalogo" id="catalogo">
      <SplitText text="NOSSO CATÁLOGO" tag="h2" delayStart={0} />

      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={900}
        loop
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {produtos.map((produto) => (
          <SwiperSlide key={produto.titulo}>
            <div className="catalogo-slide">
              <motion.div
                className="catalogo-texto"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
              >
                <span>CATEGORIA</span>
                <h3>{produto.titulo}</h3>
                <p>{produto.descricao}</p>

                <ul>
                  <li>Produção artesanal</li>
                  <li>Ingredientes selecionados</li>
                  <li>Personalização completa</li>
                </ul>

                <a
                  className="btn-orcamento"
                  href={celiWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Solicitar orçamento
                </a>
              </motion.div>

              <motion.div
                className="catalogo-imagem"
                initial={{ opacity: 0, scale: 0.98, x: 16 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
              >
                <img src={produto.imagem} alt={produto.titulo} />
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
