import { useState, useEffect } from "react";

const useFavicon = (initialFaviconUrl) => {
    const [url, setUrl] = useState(initialFaviconUrl);

    const setFavicon = (faviconUrl = initialFaviconUrl) => {
        setUrl(faviconUrl);
    };

    useEffect(() => {
        console.log(url);
        const link = document.head.querySelectorAll("link")[1];
        link.type = "image/x-icon";
        link.rel = "shortcut icon";
        link.href = url;
    }, [url]);

    return setFavicon;
};

export default useFavicon;
