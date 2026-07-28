import "./Conheca.css";
import { motion } from "motion/react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import bolo from "../assets/bolo-pote.webp";
import AnimatedStars from "../animações/AnimatedStars";
import Reveal from "../animações/Reveal";

const redes = [
  {
    icon: <FaInstagram size={32} color="#D4B26A" />,
    href: "https://www.instagram.com/celi_bolos_edoces/",
    label: "@Celi_Bolos_edoces",
  },
  {
    icon: <FaFacebook size={32} color="#D4B26A" />,
    href: "https://www.facebook.com/profile.php?id=100090187168091",
    label: "Celi Bolos e Doces",
  },
  {
    icon: <SiGmail size={32} color="#D4B26A" />,
    href: "mailto:bolosceli@gmail.com",
    label: "bolosceli@gmail.com",
  },
];

export default function Conheca() {
  return (
    <section className="conheca-container" id="redes-sociais">
      <div className="conheca">
        <Reveal direction="right">
          <h2>Conheça nossas redes sociais!</h2>
          <p>
            Fique por dentro das novidades, promoções e receitas deliciosas que
            preparamos com muito carinho para você.
          </p>
        </Reveal>

        <div className="redes-sociais">
          {redes.map((rede, index) => (
            <motion.div
              key={rede.label}
              initial={{ opacity: 0, x: -22 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: index * 0.12, duration: 0.55, ease: "easeOut" }}
            >
              {rede.icon}
              <a
                href={rede.href}
                target={rede.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
              >
                {rede.label}
              </a>
            </motion.div>
          ))}
        </div>

        <Reveal className="texto" delay={0.18}>
          <div className="estrelas">
            <div className="icone-estrelas">
              <AnimatedStars />
              <p>Mais de 30 anos de tradição em Cerquilho</p>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal className="img-container" direction="left">
        <img src={bolo} alt="Bolo de pote artesanal" />
      </Reveal>
    </section>
  );
}
