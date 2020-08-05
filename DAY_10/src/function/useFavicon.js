const useFavicon = (initialFaviconUrl) => {
    const setFavicon = () => {
        const link = document.head.querySelectorAll("link")[1];
        link.type = "image/x-icon";
        link.rel = "shortcut icon";
        link.href = initialFaviconUrl;
        document.getElementsByTagName("head")[0].appendChild(link);
    };

    return setFavicon;
};

export default useFavicon;
