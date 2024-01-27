import { useEffect } from "react";

import { Loader } from "../components/Loader";
import { Error } from "../components/Error";
import { Post } from "../components/Post";

import { useSelector, useDispatch } from "react-redux";
import { RootDispatch, RootState } from "../store/store";
import { FetchPosts } from "../store/actions/posts-actions";

export default function ReduxCreateAsyncThunkPage() {
    const { isPending, data, error } = useSelector((state: RootState) => state.posts);
    const dispatch: RootDispatch = useDispatch();

    useEffect(() => {
        dispatch(FetchPosts());
    }, [dispatch]);

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
