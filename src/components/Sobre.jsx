import "./Sobre.css";
import { motion } from "motion/react";
import { Star, Heart } from "lucide-react";
import SplitText from "../animações/SplitText";
import Reveal from "../animações/Reveal";
import celi from "../assets/celi.jpeg";
import { celiWhatsappUrl } from "../utils/whatsapp";

export default function Sobre() {
  return (
    <section className="tudo-sobre" id="sobre">
      <Reveal className="img" direction="right">
        <img src={celi} alt="Celi Bolos" />
      </Reveal>

      <div className="conteudo">
        <div className="sobre-container">
          <SplitText
            text="Quem está por trás de cada bolo?"
            tag="h1"
            delayStart={0}
          />

          <Reveal as="p" delay={0.18}>
            Desde os primeiros bolos preparados de forma caseira até os dias de
            hoje, a Celi Bolos mantém o mesmo compromisso: transformar
            ingredientes selecionados em momentos inesquecíveis. Cada receita é
            feita com carinho, dedicação e atenção aos detalhes.
            <br />
            <br />
            Cada bolo faz parte de uma celebração única, e é por isso que
            tratamos cada encomenda como algo especial.
          </Reveal>
        </div>

        <div className="qualidades">
          {[
            {
              label: "QUALIDADE",
              icon: (
                <div className="icone-estrelas">
                  <Star fill="#D4B26A" color="#D4B26A" size={20} />
                  <Star fill="#D4B26A" color="#D4B26A" size={20} />
                  <Star fill="#D4B26A" color="#D4B26A" size={20} />
                </div>
              ),
            },
            {
              label: "+ 30 ANOS\nDE TRADIÇÃO",
              icon: null,
            },
            {
              label: "ARTESANAL",
              icon: <Heart fill="#D4B26A" color="#D4B26A" size={24} />,
            },
          ].map((item, index) => (
            <motion.div
              className={index === 1 ? "tempo" : index === 2 ? "artesanal" : "estrelas"}
              key={item.label}
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: index * 0.08, duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
            >
              {item.icon}
              <p>
                {item.label.split("\n").map((line) => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
            </motion.div>
          ))}

          <motion.a
            className="btn-orcamento"
            href={celiWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.24, duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          >
            Fazer orçamento
          </motion.a>
        </div>
      </div>

      <Reveal as="section" className="textinho" direction="left" delay={0.2}>
        "Cada bolo conta uma história.
        <br />
        Nosso trabalho é tornar esse momento ainda mais especial."
      </Reveal>
    </section>
  );
}
