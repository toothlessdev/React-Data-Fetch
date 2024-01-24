import { useCallback, useEffect, useState } from "react";

import { API_URL, IGetAllPostsResponseBody } from "../types/request";

import { Post } from "../components/Post";
import { Loader } from "../components/Loader";
import { Error } from "../components/Error";

export default function InternalHooksPage() {
    const [isPending, setIsPending] = useState<boolean>(false);
    const [data, setData] = useState<IGetAllPostsResponseBody | null>(null);
    const [error, setError] = useState<unknown>(null);

    useEffect(() => {
        const request = async () => {
            try {
                setIsPending(true);
                const response = await fetch(API_URL);
                setData((await response.json()) as IGetAllPostsResponseBody);
            } catch (err) {
                setError(err);
            } finally {
                setIsPending(false);
            }
        };
        request();
    }, []);

    if (isPending) return <Loader />;

    if (error) return <Error />;

    return (
        <main>
            {data?.posts.map((element) => {
                return <Post key={element.id} id={element.id} title={element.title} body={element.body} tags={element.tags} />;
            })}
        </main>
    );
}
