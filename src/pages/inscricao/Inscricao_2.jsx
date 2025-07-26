import { useNavigate } from "react-router-dom";
import Input from "../../components/unicos/input/Input";
import "./Inscricao.css";
import { FiChevronRight } from "react-icons/fi";

function Inscricao_2() {
    const navigate = useNavigate();

    const redirecionar = () => {
        navigate("/inscricao_1");
    };
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

                <div className="formulario">


                    <div className="input_bloco">

                        <Input
                            label="Número de BI"
                            id="primeiro_nome"
                        />

                        <Input
                            label="Validade"
                            id="validade_do_bi"
                        />

                        <Input
                            label="Que província fez a 12ª classe?"
                            id="que_provincia_fez_12_classe"
                            type="tel"
                        />

                        <Input
                            label="Que distrito fez a 12ª classe?"
                            id="que_distrito_fez_12_classe"
                        />


                    </div>

                    <div className="input_bloco">

                        <Input
                            label="Nome da escola"
                            id="nome_da_escola_que_fez_a_12_classe"
                        />

                        <Input
                            label="Ano de conclusão"
                            id="ano_de_conclusao_da_12_classe"
                            type="number"
                        />

                        <Input
                            label="Grupo"
                            id="que_grupo_fez_na_12_classe"
                        />

                    </div>

                </div>

                <div className="Btn">
                    <button onClick={redirecionar}>
                        Volatar
                    </button>
                </div>

            </section>
        </>
    )
}
export default Inscricao_2;