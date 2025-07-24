import { Routes, Route } from "react-router-dom";

// COMPONENTES
import Header from "./components/header/Header";

// PÁGINAS PÚBLICAS
import Inscricao_1 from "./pages/inscricao/Inscricao_1";
import Inscricao_2 from "./pages/inscricao/Inscricao_2";
import PreInscricao from "./pages/preinscricao/preinscricao";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/inscricao_1" element={<Inscricao_1 />} />
          <Route path="/inscricao_2" element={<Inscricao_2 />} />
          <Route path="/pre-inscricao" element={<PreInscricao />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
