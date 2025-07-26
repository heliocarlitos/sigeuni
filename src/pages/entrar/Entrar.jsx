import { useState } from "react";
import { Link, Links } from "react-router-dom";
import { FiUser, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import "./Entrar.css";

function Entrar() {
    const [verSenha, setVerSenha] = useState(false);
    const anoActual = new Date().getFullYear();
    const alternarVisibilidade = () => {
        setVerSenha((estadoAnterior) => !estadoAnterior);
    };

    return (
        <section className="Entrar">

            {/* <div className="CopyRigth">
                <p> © {anoActual} SIGEUNI </p>
            </div> */}

            <form className="formulario" autoComplete="off">
                <div className="input_bloco">

                    <div className="input_caixa">
                        <label htmlFor="codigo_de_usuario"> Código de Usuário </label>
                        <div className="icon">
                            <FiUser />
                        </div>
                        <input
                            type="text"
                            name="codigo_de_usuario"
                            id="codigo_de_usuario"
                            placeholder="Digite seu usuário"
                            autoComplete="off"
                            required
                        />
                    </div>

                    <div className="input_caixa">
                        <label htmlFor="senha"> Senha </label>
                        <div className="icon">
                            <FiLock />
                        </div>
                        <input
                            type={verSenha ? "text" : "password"}
                            name="senha"
                            id="senha"
                            placeholder="Digite sua senha"
                            autoComplete="off"
                            required
                            minLength={6}
                            maxLength={12}
                        />
                        <div className="icon versenha">
                            <button
                                type="button"
                                onClick={alternarVisibilidade}
                            >
                                {verSenha ? <FiEyeOff /> : <FiEye />}
                            </button>
                        </div>
                    </div>

                    <div className="esqueci_senha">
                        <button type="button">Esqueci senha</button>
                    </div>

                    <div className="Btn">
                        <button > Entrar </button>
                    </div>

                </div>
            </form>
        </section>
    );
}

export default Entrar;
