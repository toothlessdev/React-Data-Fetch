import { Link } from "react-router-dom";
import styled from "styled-components";

export default function HomePage() {
    return (
        <>
            <Title>React Data Fetch</Title>
            <LinkContainer>
                <Link to="/internal-hooks">1. 내장 훅 (useState, useEffect) 사용하기</Link>
                <Link to="/custom-hooks">2. 커스텀 훅 (useFetch) 사용하기</Link>
                <Link to="/redux-thunk-actions">3. Redux Thunk Action 사용하기</Link>
                <Link to="/redux-create-async-thunk">4. Redux createAsyncThunk 사용하기</Link>
                <Link to="/redux-saga">4. Redux Saga 사용하기</Link>
            </LinkContainer>
        </>
    );
}

const Title = styled.h1`
    margin: 30px 0px;
    color: #fff;
    text-align: center;
`;

const LinkContainer = styled.div`
    a {
        display: block;

        max-width: 600px;

        margin: 10px auto;
        padding: 10px 20px;
        border: 1px solid #d9d9d9;
        border-radius: 50px;

        font-weight: bold;
        color: #000;
        background-color: #d9d9d9;
        text-decoration: none;
    }
    a:visited {
        color: #000;
    }
`;
