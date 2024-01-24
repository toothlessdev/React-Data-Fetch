import { useState, useEffect, useCallback } from "react";

export default function useFetch<ResponseBody>(url: string) {
    const [isPending, setIsPending] = useState<boolean>(false);
    const [data, setData] = useState<ResponseBody | null>(null);
    const [error, setError] = useState<unknown>(null);

    const request = useCallback(async () => {
        try {
            setIsPending(true);
            const response = await fetch(url);
            setData((await response.json()) as ResponseBody);
        } catch (err) {
            setError(err);
        } finally {
            setIsPending(false);
        }
    }, [url]);

    useEffect(() => {
        request();
    }, [request]);

    return { isPending, data, error };
}
