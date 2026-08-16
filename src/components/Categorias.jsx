import "./Categorias.css";
import SplitText from "../animações/SplitText";
import Reveal from "../animações/Reveal";
import SpotlightCard from "../animações/SpotlightCard";
import bolo1 from "../assets/bolo1.webp";
import doces from "../assets/doces.webp";
import boloPote from "../assets/bolo-pote.webp";

// Lista usada para renderizar os cards. Para adicionar/remover categoria, mexa só aqui.
const categorias = [
  {
    titulo: "Bolos",
    texto: "Bolos para aniversários e outras celebrações.",
    imagem: bolo1,
    alt: "Bolo de aniversário",
  },
  {
    titulo: "Doces",
    texto: "Caixas de doces para festas e eventos.",
    imagem: doces,
    alt: "Doces artesanais",
  },
  {
    titulo: "Bolos de pote",
    texto: "Bolos em pote para qualquer ocasião.",
    imagem: boloPote,
    alt: "Bolo de pote",
  },
];

export default function Categorias() {
  return (
    <section className="categorias-container" id="categorias">
      <div className="categorias">
        <SplitText text="CATEGORIAS" tag="h2" delayStart={0} />
      </div>

      <div className="container">
        <div className="fotos">
          {categorias.map((categoria, index) => (
            // Reveal controla a entrada ao rolar; SpotlightCard controla o brilho no hover.
            <Reveal
              as="div"
              className="categoria-reveal"
              delay={index * 0.14}
              key={categoria.titulo}
            >
              <SpotlightCard as="section" className="categoria-item">
                <h3>{categoria.titulo}</h3>
                <p>{categoria.texto}</p>
                <img src={categoria.imagem} alt={categoria.alt} />
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
