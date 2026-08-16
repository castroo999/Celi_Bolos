import "./Escolha.css";
import { motion } from "motion/react";
import celi from "../assets/celi.jpeg";
import Reveal from "../animações/Reveal";
import SpotlightCard from "../animações/SpotlightCard";
import { Star, Heart, Settings, Check } from "lucide-react";
import { celiWhatsappUrl } from "../utils/whatsapp";

// Cards da seção de confiança. Altere texto/ícone aqui sem precisar mexer no JSX abaixo.
const cards = [
  {
    titulo: "Feito com carinho",
    texto: "Cada receita é preparada como se fosse para nossa própria família.",
    icon: <Heart fill="#D4B26A" color="#D4B26A" size={26} />,
  },
  {
    titulo: "Qualidade",
    texto: "Ingredientes de qualidade e atenção em cada detalhe.",
    icon: (
      <div className="estrelas-card">
        <Star fill="#D4B26A" color="#D4B26A" size={18} />
        <Star fill="#D4B26A" color="#D4B26A" size={18} />
        <Star fill="#D4B26A" color="#D4B26A" size={18} />
      </div>
    ),
  },
  {
    titulo: "Personalização",
    texto: "Bolos feitos para tornar cada evento único.",
    icon: <Settings color="#D4B26A" size={26} />,
  },
  {
    titulo: "Atendimento",
    texto: "Atendimento próximo e personalizado do início ao fim.",
    icon: <Check color="#D4B26A" size={26} />,
  },
];

export default function Escolha() {
  return (
    <section className="escolha-container">
      <div className="lado-esquerdo">
        <Reveal className="escolha" direction="right">
          <h1>Por que tantas famílias confiam na Celi Bolos?</h1>
          <p>
            Há anos participando dos momentos mais especiais com bolos
            artesanais preparados com carinho e dedicação.
          </p>
        </Reveal>

        <Reveal className="img" direction="right" delay={0.12}>
          <img src={celi} alt="Celi Bolos" />
        </Reveal>
      </div>

      <div className="cards-escolhas">
        {cards.map((card, index) => (
          // SpotlightCard dá o efeito de luz seguindo o mouse; o conteúdo continua simples.
          <SpotlightCard
            className="card"
            key={card.titulo}
            initial={{ opacity: 0, y: 28, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: index * 0.12, duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="card-icon"
              whileHover={{ rotate: [0, -8, 8, 0], scale: 1.08 }}
              transition={{ duration: 0.5 }}
            >
              {card.icon}
            </motion.div>
            <h2>{card.titulo}</h2>
            <p>{card.texto}</p>
          </SpotlightCard>
        ))}
      </div>

      <Reveal
        as="a"
        className="btn-orcamento"
        delay={0.16}
        href={celiWhatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        Fazer orçamento
      </Reveal>
    </section>
  );
}
