import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./SpinLoader.css";

function SpinLoader() {
    const location = useLocation();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 2000); 

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
