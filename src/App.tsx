import HeaderView from "@/components/Header/HeaderView";
import HeroView from "@/components/Hero/HeroView";
// import Footer from "@/components/Footer/Footer";

/**
 * @function App
 * @description Componente raiz do portfólio, aplica o Header e centraliza o conteúdo.
 * @returns {JSX.Element}
 */
function App() {
  return (
    <div className="flex min-h-svh flex-col">
      <HeaderView />
      <main className="flex-1 flex flex-col items-center justify-around p-4">
        <HeroView />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;