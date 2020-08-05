import { useState, useEffect } from "react";

const useKeyPressed = (key) => {
    const [isPressed, setIsPressed] = useState(false);
    const handleKeyPressed = (e) => {
        key === e.key ? setIsPressed(true) : setIsPressed(false);
    };

    useEffect(() => {
        document.addEventListener("keypress", handleKeyPressed);
        return () => document.removeEventListener("keypress", handleKeyPressed);
    }, []);

    return isPressed;
};

export default useKeyPressed;
