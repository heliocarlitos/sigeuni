import { useNavigate } from "react-router-dom";
import Input from "../../components/unicos/input/Input";
import "./Inscricao.css";

function Inscricao_1() {
    const navigate = useNavigate();

    const redirecionar = () => {
        navigate("/inscricao_2");
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
                            label="Primeiro nome"
                            id="primeiro_nome"
                        />

                        <Input
                            label="Nome completo"
                            id="nome_completo"
                        />

                        <Input
                            label="Data de nascimento"
                            id="data_de_nascimento"
                            type="date"
                        />

                        <Input
                            label="País de nascimento"
                            id="pais_de_nascimento"
                        />

                        <Input
                            label="Província de nascimento"
                            id="provincia_de_nascimento"
                        />

                        <Input
                            label="Distrito de nascimento"
                            id="distrito_de_nascimento"
                        />

                    </div>

                    <div className="input_bloco">

                        <Input
                            label="Nome do pai"
                            id="nome_do_pai"
                        />

                        <Input
                            label="Nome da mãe"
                            id="nome_da_mae"
                        />

                        <Input
                            label="Província de Residência"
                            id="provincia_de_residencia"
                        />

                        <Input
                            label="Distrito de Residência"
                            id="distrito_de_residencia"
                        />

                    </div>

                </div>

                <div className="Btn">
                    <button onClick={redirecionar}>
                        Próximo
                    </button>
                </div>

            </section>
        </>
    )
}
export default Inscricao_1;