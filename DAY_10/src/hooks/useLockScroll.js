import { useState } from "react";

const useLockScroll = () => {
    const [isLocked, setIsLocked] = useState(false);
    const scrollObj = {
        lockScroll: () => {
            setIsLocked(true);
            document.body.style.overflow = "hidden";
        },
        unlockScroll: () => {
            setIsLocked(false);
            document.body.style.overflow = "scroll";
        },
    };

    return [isLocked, scrollObj];
};

export default useLockScroll;
