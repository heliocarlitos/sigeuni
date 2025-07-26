import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import "./Header.css";
import { FiLogIn, FiUser, FiBell, FiFileText, FiHelpCircle, FiSettings, FiLogOut } from "react-icons/fi";

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

                {/* Envolve o botão e submenu num contêiner com a ref */}
                <div className="submenu_container" ref={submenuRef}>

                    <div className="links_do_menu">

                        <Link to="/entrar">
                            <div className="icon">
                                <FiLogIn />
                            </div>
                            Entrar
                        </Link>

                    </div>

                    <button className="btn_img" onClick={alternarSubmenu} >
                        <figure>
                            <img src="https://placehold.co/50" alt="Foto do usuario" width={40} height={40} />
                        </figure>
                    </button>

                    {mostrarSubmenu && (
                        <nav className="sub_menu" >

                            <div className="sub_menu_header">

                                <figure>
                                    <img src="https://placehold.co/60" alt="Foto do usuario" width={60} height={60} />
                                </figure>

                                <div className="nome_codigo">
                                    <p className="nome"> Nome Completo </p>
                                    <p className="codigo"> 01.01.2025</p>
                                </div>

                            </div>

                            <ul>
                                <li><Link to="#"><div className="icon"><FiUser /></div>Dados pessoais</Link></li>
                                <li><Link to="#"><div className="icon"><FiBell /></div>Notificações</Link></li>
                                <li><Link to="#"><div className="icon"><FiFileText />
                                </div>Documentos úteis</Link></li>
                                <li><Link to="#"><div className="icon"><FiHelpCircle />
                                </div>FAQ</Link></li>
                                <li><Link to="#"><div className="icon"><FiSettings /></div>Configurações</Link></li>
                            </ul>

                            <button>
                                <div className="icon">
                                    <FiLogOut />
                                </div>
                                Sair
                            </button>

                        </nav>
                    )}
                </div>
            </header>

        </>
    )
}
export default Header;