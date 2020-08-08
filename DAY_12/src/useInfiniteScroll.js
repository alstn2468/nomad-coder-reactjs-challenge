import { useEffect, useState } from "react";

export function useInfiniteScroll() {
    const [page, setPage] = useState(1);

    function handleScroll() {
        const scrollHeight = Math.max(
            document.documentElement.scrollHeight,
            document.body.scrollHeight
        );
        const scrollTop = Math.max(
            document.documentElement.scrollTop,
            document.body.scrollTop
        );
        const clientHeight = document.documentElement.clientHeight;

        if (scrollTop + clientHeight === scrollHeight) {
            setPage((p) => p + 1);
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);
    return page;
}
