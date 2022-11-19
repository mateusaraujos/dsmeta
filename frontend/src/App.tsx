import Header from "./components/Header";
import SalesCard from "./components/SalesCard";

function App() {
  // Um componente React não pode exportar mais de 1 tag.
  // Quando tiver mais de 1 tag, colocar todos dentro da tag-pai <> </>.
  return (
    <>
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <SalesCard />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
