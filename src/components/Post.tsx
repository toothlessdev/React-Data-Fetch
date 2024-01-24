import styled from "styled-components";
import { IPost } from "../types/request";

const PostContainer = styled.div<{ children: React.ReactNode }>`
    display: block;

    max-width: 600px;

    margin: 10px auto;
    padding: 20px;
    border: 1px solid black;
    border-radius: 1rem;

    color: #000;
    background-color: white;

    h1 {
        margin: 0;
        font-size: 1.5rem;
    }
`;

export const Post: React.FC<IPost> = ({ id, title, body, tags }) => {
    return (
        <PostContainer>
            <h1>{title}</h1>
            <p>{body}</p>
            {tags.map((element) => {
                return <PostTag>{element}</PostTag>;
            })}
        </PostContainer>
    );
};

export const PostTag = styled.p`
    display: inline-block;

    margin: 5px 3px;
    padding: 5px 10px;
    border: 1px solid #d9d9d9;
    border-radius: 1rem;

    font-weight: bold;

    color: #000;
    background-color: #d9d9d9;
`;
