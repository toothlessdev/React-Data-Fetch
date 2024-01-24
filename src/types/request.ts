export const API_URL = "https://dummyjson.com/posts?limit=10&select=title,body,tags";

export interface IPost {
    id: number;
    title: string;
    body: string;
    tags: string[];
}

export interface IGetAllPostsResponseBody {
    posts: IPost[];
    total: number;
    skip: number;
    limit: number;
}
