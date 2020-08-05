import { useState } from "react";

const useGeolocation = () => {
    const [coords, setCoords] = useState({
        latitude: "",
        longitude: "",
    });
    const [error, setError] = useState("null");
    const errorCall = (error) => setError(error.message);
    const handleGeolocation = (e) => {
        const {
            coords: { latitude, longitude },
        } = e;
        setCoords({
            latitude,
            longitude,
        });
    };

    navigator.geolocation.getCurrentPosition(handleGeolocation, errorCall);
    return { coords, error };
};

export default useGeolocation;
