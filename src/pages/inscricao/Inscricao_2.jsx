import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Input from "../../components/unicos/input/Input";
import "./Inscricao.css";
import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

function Inscricao_2() {
    const navigate = useNavigate();

    // Estados para todos os campos
    const [formData, setFormData] = useState({
        numero_de_bi: "",
        validade_do_bi: "",
        que_provincia_fez_12_classe: "",
        que_distrito_fez_12_classe: "",
        nome_da_escola_que_fez_a_12_classe: "",
        ano_de_conclusao_da_12_classe: "",
        que_grupo_fez_na_12_classe: "",
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const redirecionar = () => {
        navigate("/inscricao_3");
    };

    return (
        <section className="inscricao">
            <div className="titulo1">
                <p>Formulário de inscrição</p>
            </div>

            <div className="navegacao">
                <Link to="/inscricao_1">Dados pessoais</Link>
                <Link to="/inscricao_2" className="actual">Dados académicos</Link>
                <Link to="/inscricao_3">Dados do curso</Link>
            </div>

            <div className="formulario">
                <div className="input_bloco">
                    <Input label="Número de BI" id="numero_de_bi" value={formData.numero_de_bi} onChange={handleChange} />
                    <Input label="Validade" id="validade_do_bi" type="date" value={formData.validade_do_bi} onChange={handleChange} />
                    <Input label="Que província fez a 12ª classe?" id="que_provincia_fez_12_classe" value={formData.que_provincia_fez_12_classe} onChange={handleChange} />
                    <Input label="Que distrito fez a 12ª classe?" id="que_distrito_fez_12_classe" value={formData.que_distrito_fez_12_classe} onChange={handleChange} />
                </div>

                <div className="input_bloco">
                    <Input label="Nome da escola" id="nome_da_escola_que_fez_a_12_classe" value={formData.nome_da_escola_que_fez_a_12_classe} onChange={handleChange} />
                    <Input label="Ano de conclusão" id="ano_de_conclusao_da_12_classe" value={formData.ano_de_conclusao_da_12_classe} onChange={handleChange} maxDigitos={4} />
                    <Input label="Grupo" id="que_grupo_fez_na_12_classe" value={formData.que_grupo_fez_na_12_classe} onChange={handleChange} />
                </div>
            </div>

            <div className="Btn">
                <button onClick={redirecionar}>
                    Próximo
                </button>
            </div>
        </section>
    );
}

export default Inscricao_2;
