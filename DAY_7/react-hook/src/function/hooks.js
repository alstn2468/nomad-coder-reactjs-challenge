import { useState, useEffect } from "react";

export const useDeviceOrientation = () => {
    const [alpha, setAlpha] = useState("0");
    const [beta, setBeta] = useState("0");
    const [gamma, setGamma] = useState("0");
    const handleOrientation = e => {
        const { alpha, beta, gamma } = e;
        setAlpha(alpha);
        setBeta(beta);
        setGamma(gamma);
    };

    window.addEventListener("deviceorientation", handleOrientation);
    return { alpha, beta, gamma };
};

export const useFavicon = initialFaviconUrl => {
    const setFavicon = () => {
        const link = document.head.querySelectorAll("link")[1];
        link.type = "image/x-icon";
        link.rel = "shortcut icon";
        link.href = initialFaviconUrl;
        document.getElementsByTagName("head")[0].appendChild(link);
    };

    return setFavicon;
};

export const useGeolocation = () => {
    const [coords, setCoords] = useState({
        latitude: "",
        longitude: ""
    });
    const [error, setError] = useState("null");
    const errorCall = error => setError(error.message);
    const handleGeolocation = e => {
        const {
            coords: { latitude, longitude }
        } = e;
        setCoords({
            latitude,
            longitude
        });
    };

    navigator.geolocation.getCurrentPosition(handleGeolocation, errorCall);
    return { coords, error };
};

export const useKeyPressed = key => {
    const [isPressed, setIsPressed] = useState(false);
    const handleKeyPressed = e => {
        key === e.key ? setIsPressed(true) : setIsPressed(false);
    };

    useEffect(() => {
        document.addEventListener("keypress", handleKeyPressed);
        return () => document.removeEventListener("keypress", handleKeyPressed);
    }, []);

    return isPressed;
};

export const useLocalStorage = (name, initialValue) => {
    const [currentLS, setLS] = useState(initialValue);
    currentLS !== null
        ? localStorage.setItem(name, initialValue)
        : localStorage.setItem(name, "null");

    return [currentLS, setLS];
};

export const useMousePosition = () => {
    const [position, setPosition] = useState({});
    const handleMouseMove = e => {
        const { x, y } = e;
        setPosition({ x, y });
    };

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return position;
};

export const useOnline = () => {
    const [isOnline, setIsOnline] = useState(true);
    const handleOnline = e => {
        e && setIsOnline(true);
    };
    const handleOffline = e => {
        e && setIsOnline(false);
    };

    useEffect(() => {
        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);
        return () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        };
    }, []);

    return isOnline;
};

export const useLockScroll = () => {
    const [isLocked, setIsLocked] = useState(false);
    const scrollObj = {
        lockScroll: () => {
            setIsLocked(true);
            document.body.style.overflow = "hidden";
        },
        unlockScroll: () => {
            setIsLocked(false);
            document.body.style.overflow = "scroll";
        }
    };

    return [isLocked, scrollObj];
};
