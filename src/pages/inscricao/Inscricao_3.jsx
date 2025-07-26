import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/unicos/input/Input";
import "./Inscricao.css";
import InputOpcoes from "../../components/unicos/inputopcoes/InputOpcoes";

function Inscricao_3() {
    const navigate = useNavigate();

    const [cursoSelecionado, setCursoSelecionado] = useState("");
    const [periodoSelecionado, setPeriodoSelecionado] = useState("");
    const [modalidadeSelecionado, setModalidadeSelecionado] = useState("");

    const redirecionar = () => {
        navigate("#");
    };

    const Cursos = [
        { valor: "ELectricidade_Auto", texto: "Electricidade Auto" },
        { valor: "Mecanica_Industrial", texto: "Mecânica Indistrial" },
        { valor: "Serralharia_e_Soldaduria", texto: "Serralharia e Soldaduria" },
        { valor: "Mecanica_Geral", texto: "Mecânica Geral" },
        { valor: "HST", texto: "HST" },
    ];

    const Periodos = [
        { valor: "Laboral", texto: "Laboral" },
        { valor: "Pos_Laboral", texto: "Pós-Laboral" },
        { valor: "ADistancia", texto: "A distância" },
    ];

    return (
        <section className="inscricao">

            <div className="titulo1">
                <p>Formulário de inscrição</p>
            </div>

            <div className="navegacao">

                <Link to="/inscricao_1">Dados pessoais</Link>
                <Link to="/inscricao_2">Dados académicos</Link>
                <Link to="/inscricao_3" className="actual">Dados do curso</Link>
                
            </div>

            <div className="formulario">

                <div className="input_bloco">

                    <InputOpcoes
                        id="Curso"
                        label="Escolha um curso"
                        opcoes={Cursos}
                        valorSelecionado={cursoSelecionado}
                        aoMudar={setCursoSelecionado}
                    />

                    <InputOpcoes
                        id="Periodo"
                        label="Escolha o Período"
                        opcoes={Periodos}
                        valorSelecionado={periodoSelecionado}
                        aoMudar={setPeriodoSelecionado}
                    />

                </div>

            </div>

            <div className="Btn">
                <button onClick={redirecionar}>Finalizar</button>
            </div>

        </section>
    );
}

export default Inscricao_3;
