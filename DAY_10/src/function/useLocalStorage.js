import { useState } from "react";

const useLocalStorage = (name, initialValue) => {
    const [currentLS, setLS] = useState(initialValue);
    currentLS !== null
        ? localStorage.setItem(name, initialValue)
        : localStorage.setItem(name, "null");

    return [currentLS, setLS];
};

export default useLocalStorage;
