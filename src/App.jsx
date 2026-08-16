import ScrollProgress from "./animações/ScrollProgress";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Categorias from "./components/Categorias";
import Catalogo from "./components/Catalogo";
import Sobre from "./components/Sobre";
import Escolha from "./components/Escolha";
import Conheca from "./components/Conheca";
import CTA from "./components/Cta";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* Barra fixa no topo que mostra o progresso da rolagem da página. */}
      <ScrollProgress />

      {/* Ordem das seções do site. Para mudar a sequência, mova os componentes aqui. */}
      <Header />
      <Hero />
      <Categorias />
      <Catalogo />
      <Sobre />
      <Escolha />
      <Conheca />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
