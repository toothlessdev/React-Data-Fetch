import useFetch from "../hooks/useFetch";
import { Loader } from "../components/Loader";
import { Post } from "../components/Post";

import { API_URL, IGetAllPostsResponseBody } from "../types/request";

export default function CustomHooksPage() {
    const { isPending, data, error } = useFetch<IGetAllPostsResponseBody>(API_URL);

    if (isPending) return <Loader />;

    if (error) return <h1>Error</h1>;

    return (
        <main>
            {data?.posts.map((element) => {
                return <Post key={element.id} id={element.id} title={element.title} body={element.body} tags={element.tags} />;
            })}
        </main>
    );
}
