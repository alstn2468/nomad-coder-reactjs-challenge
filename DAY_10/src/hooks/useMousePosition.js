import { useState, useEffect } from "react";

const useMousePosition = () => {
    const [position, setPosition] = useState({});
    const handleMouseMove = (e) => {
        const { x, y } = e;
        setPosition({ x, y });
    };

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return position;
};

export default useMousePosition;
