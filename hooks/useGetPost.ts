import { useMemo } from "react";
import {Config} from "@/app/types";

export const useGetPost = (identifier: string, config: Config) => {
    return useMemo(() => {
        const found = config.posts.filter(post => post.identifier === identifier);
        return found.length > 0 ? found[0] : null;
    }, [identifier, config.posts]);
};