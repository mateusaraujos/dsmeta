import Header from "./components/Header";
import NotificationButton from "./components/NotificationButton";

function App() {
  // Um componente React não pode exportar mais de 1 tag.
  // Quando tiver mais que 1 tag, colocar todos dentro do Pai <> </>.
  return (
    <>
      <Header />
    </>
  );
}

export default App;
