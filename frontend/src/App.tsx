import NotificationButton from "./components/NotificationButton";

function App() {
  // Um componente React não pode exportar mais de 1 tag.
  // Quando tiver mais que 1 tag, colocar todos dentro do Pai <> </>.
  return (
    <>
      <h1>Hello, World!</h1>
      <NotificationButton />
      <NotificationButton />
    </>
  );
}

export default App;
