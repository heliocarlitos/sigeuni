import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./SpinLoader.css";

function SpinLoader() {
    const location = useLocation();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Sempre que a localização muda (nova rota), activa o loader
        setLoading(true);

        // Simula carregamento por 1 segundo (ajusta conforme necessário)
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 2000); // ou menos, se preferires

        return () => clearTimeout(timeout);
    }, [location]);

    if (!loading) return null;

    return (
        <section className="PanoSpin">
            <div className="SpinLoader center">
                {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} className="SpinLoader-blade"></div>
                ))}
            </div>
        </section>
    );
}

export default SpinLoader;
