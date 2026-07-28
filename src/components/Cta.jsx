import "./Cta.css";
import { motion } from "motion/react";
import AnimatedStars from "../animações/AnimatedStars";
import Reveal from "../animações/Reveal";
import { celiWhatsappUrl } from "../utils/whatsapp";

export default function CTA() {
  return (
    <section className="CTA">
      <div className="CTA-container">
        <Reveal className="cta-stars">
          <AnimatedStars />
        </Reveal>

        <Reveal as="h1" delay={0.08}>
          Vamos criar um bolo para seu
          <br />
          próximo momento especial?
        </Reveal>

        <motion.div
          className="CTA-card"
          initial={{ opacity: 0, y: 34, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.32 }}
          transition={{ duration: 0.75, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="text">
            <p>
              Cada encomenda é preparada com carinho, utilizando ingredientes
              selecionados para transformar sua celebração em uma lembrança
              inesquecível.
            </p>

            <a
              className="btn-orcamento"
              href={celiWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Fazer orçamento
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
