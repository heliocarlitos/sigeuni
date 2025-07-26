import { Routes, Route } from "react-router-dom";

// COMPONENTES
import Header from "./components/header/Header";

// PÁGINAS PÚBLICAS
import Inscricao_1 from "./pages/inscricao/Inscricao_1";
import Inscricao_2 from "./pages/inscricao/Inscricao_2";
import Inscricao_3 from "./pages/inscricao/Inscricao_3";
import PreInscricao from "./pages/preinscricao/PreInscricao";
import Home from "./pages/home/Home";
import Entrar from "./pages/entrar/Entrar";

function App() {
  return (
    <>
      <Header />
      <main>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/entrar" element={<Entrar />} />
          <Route path="/inscricao_1" element={<Inscricao_1 />} />
          <Route path="/inscricao_2" element={<Inscricao_2 />} />
          <Route path="/inscricao_3" element={<Inscricao_3 />} />
          <Route path="/pre-inscricao" element={<PreInscricao />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
