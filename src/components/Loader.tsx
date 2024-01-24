import styled from "styled-components";

export const Spinner = styled.span`
    display : block;

    width: 50px;
    height: 50px;

    border: 5px solid #FFF;
    border-bottom-color: transparent;
    border-radius: 50%;

    animation: rotation 1s linear infinite;

    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const LoaderWrapper = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Loader = () => {
    return (
        <LoaderWrapper>
            <Spinner></Spinner>
        </LoaderWrapper>
    );
};
