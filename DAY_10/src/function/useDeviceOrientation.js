import { useState } from "react";

const useDeviceOrientation = () => {
    const [alpha, setAlpha] = useState("0");
    const [beta, setBeta] = useState("0");
    const [gamma, setGamma] = useState("0");
    const handleOrientation = (e) => {
        const { alpha, beta, gamma } = e;
        setAlpha(alpha);
        setBeta(beta);
        setGamma(gamma);
    };

    window.addEventListener("deviceorientation", handleOrientation);
    return { alpha, beta, gamma };
};

export default useDeviceOrientation;
