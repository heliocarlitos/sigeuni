import DadosAcademicos from "./dadosacademicos/DadosAcademicos";
import DadosDoCurso from "./dadosdocurso/DadosDoCurso";
import DadosPessoaisForm from "./dadospessoaisform/DadosPessoaisForm";
import "./Inscricao.css";
import { FiChevronRight } from "react-icons/fi";

function Inscricao() {
    return (
        <>
            <section className="inscricao">

                <div className="titulo1">
                    <p>Formulário de inscrição</p>
                </div>

                <div className="navegacao">

                    <button>
                        Dados pessoais
                    </button>

                    <button>
                        Dados académicos
                    </button>

                    <button>
                        Dados do curso
                    </button>

                </div>

                <DadosPessoaisForm />

                <DadosAcademicos />

                <DadosDoCurso />

                <div className="Btn">
                    <button>
                        Próximo
                        <div className="icon">
                            <FiChevronRight />
                        </div>

                    </button>
                </div>

            </section>
        </>
    )
}
export default Inscricao;