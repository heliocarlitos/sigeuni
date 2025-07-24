import Input from "../../components/unicos/input/Input";
import "./PreInscricao.css";

function PreInscricao() {
    return (
        <>
            <form className="PreInscricao">

                <div className="formulario">

                    <div className="input_seccao">
                        <Input
                            label="NUIT"
                            type="number"
                            id="nuit"
                        />

                        <Input
                            label="Número de telefone"
                            type="tel"
                            id="numero_de_telefone"
                        />

                    </div>

                    <div className="input_seccao">
                        <Input
                            label="Escolha uma senha"
                            id="senha"
                        />

                        <Input
                            label="Confirmar senha"
                            id="confirmar_senha"
                        />

                    </div>

                </div>

                  <div className="Btn">
                        <button type="submit">
                            Enviar
                        </button>
                    </div>

            </form>

        </>
    )
}
export default PreInscricao;