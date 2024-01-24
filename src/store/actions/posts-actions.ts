import { Dispatch } from "@reduxjs/toolkit";
import { PostAction } from "../posts-slice";
import { IGetAllPostsResponseBody, API_URL } from "../../types/request";

export const FetchPostsThunk = () => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch(PostAction.setIsPending(true));
            const response = await fetch(API_URL);
            const data = (await response.json()) as IGetAllPostsResponseBody;
            dispatch(PostAction.setData(data));
        } catch (err) {
            dispatch(PostAction.setError(err));
        } finally {
            dispatch(PostAction.setIsPending(false));
        }
    };
};
