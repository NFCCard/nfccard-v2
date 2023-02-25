import { useRouter } from "next/router";
import { useState } from "react";

const useBaseComponent = () => {
    const [state, setState] = useState<any>();
    const router = useRouter();

    return { router, state, setState };
};
export default useBaseComponent;
