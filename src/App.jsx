import { Routes, Route } from "react-router-dom";

// COMPONENTES
import Header from "./components/header/Header";

// PÁGINAS PÚBLICAS
import Inscricao from "./pages/inscricao/Inscricao";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/inscricao" element={<Inscricao />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
