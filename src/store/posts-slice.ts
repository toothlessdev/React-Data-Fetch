import { ActionReducerMapBuilder, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IGetAllPostsResponseBody } from "../types/request";
import { FetchPosts } from "./actions/posts-actions";

interface IPostSlice {
    isPending: boolean;
    data: IGetAllPostsResponseBody | null;
    error: unknown;
}

const initialState: IPostSlice = {
    isPending: false,
    data: null,
    error: null,
};

export const postSlice = createSlice({
    name: "post-slice",

    initialState,

    reducers: {
        setIsPending: (state, action: PayloadAction<boolean>) => {
            state.isPending = action.payload;
        },
        setData: (state, action: PayloadAction<IGetAllPostsResponseBody | null>) => {
            state.data = action.payload;
        },
        setError: (state, action: PayloadAction<unknown>) => {
            state.error = action.payload;
        },
    },
    extraReducers: (builder: ActionReducerMapBuilder<IPostSlice>) => {
        builder
            .addCase(FetchPosts.pending, (state) => {
                state.isPending = true;
            })
            .addCase(FetchPosts.fulfilled, (state, action: PayloadAction<IGetAllPostsResponseBody>) => {
                state.data = action.payload;
                state.isPending = false;
            })
            .addCase(FetchPosts.rejected, (state) => {
                state.isPending = false;
            });
    },
});

export const PostAction = postSlice.actions;
