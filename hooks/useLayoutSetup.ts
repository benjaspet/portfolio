import {useIsMobile} from "@/hooks/useIsMobile";
import {useEffect, useState} from "react";

export function useLayoutSetup(loadingDelay = 0) {
    const [isMobile, setIsMobile] = useIsMobile();
    const [isLoading, setIsLoading] = useState(true);
    const [isLayoutReady, setIsLayoutReady] = useState(false);

    useEffect(() => {

        const checkMobile = () => setIsMobile(window.innerWidth <= 1440);

        checkMobile(); setIsLayoutReady(true);

        window.addEventListener("resize", checkMobile);
        const timer = setTimeout(() => setIsLoading(false), loadingDelay);

        return () => {
            window.removeEventListener("resize", checkMobile);
            clearTimeout(timer);
        };
    }, [loadingDelay, setIsMobile]);

    return { isMobile, isLoading, isLayoutReady };
}