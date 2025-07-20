import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import "./Header.css"
function Header() {
    const [mostrarSubmenu, setMostrarSubmenu] = useState(false);
    const submenuRef = useRef(null);
    const alternarSubmenu = () => {
        setMostrarSubmenu((prev) => !prev);
    };
    useEffect(() => {
        const fecharAoClicarFora = (event) => {
            if (submenuRef.current && !submenuRef.current.contains(event.target)) {
                setMostrarSubmenu(false);
            }
        };

        document.addEventListener("mousedown", fecharAoClicarFora);
        return () => {
            document.removeEventListener("mousedown", fecharAoClicarFora);
        };
    }, []);
    return (
        <>
            <header className="header">

                <Link to="/" className="logo">
                    <p>SIGEUNI <span>v1.1</span></p>
                </Link>

                <button className="btn_img" onClick={alternarSubmenu}>
                    <figure>
                        <img src="https://placehold.co/50" alt="Foto do usuario" width={50} height={50} />
                    </figure>
                </button>

                {mostrarSubmenu && (
                    <nav className="sub_menu">

                        <div className="sub_menu_header">

                            <figure>
                                <img src="https://placehold.co/70" alt="Foto do usuario" width={70} height={70} />
                            </figure>

                            <div className="nome_codigo">
                                <p className="nome"> Nome Completo </p>
                                <p className="codigo"> 01.01.2025</p>
                            </div>

                        </div>

                        <ul>
                            <li>
                                <Link to="#">
                                    <div className="icon">

                                    </div>
                                    Dados pessoais
                                </Link>
                            </li>

                            <li>
                                <Link to="#">
                                    <div className="icon">

                                    </div>
                                    Notificações
                                </Link>
                            </li>

                            <li>
                                <Link to="#">
                                    <div className="icon">

                                    </div>
                                    Documentos úteis
                                </Link>
                            </li>

                            <li>
                                <Link to="#">
                                    <div className="icon">

                                    </div>
                                    FAQ
                                </Link>
                            </li>

                            <li>
                                <Link to="#">
                                    <div className="icon">

                                    </div>
                                    Configurações
                                </Link>
                            </li>
                        </ul>

                    </nav>
                )}

            </header>
        </>
    )
}
export default Header;