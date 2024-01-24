import { configureStore } from "@reduxjs/toolkit";
import { postSlice } from "./posts-slice";

export const store = configureStore({
    reducer: {
        posts: postSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;
// https://stackoverflow.com/questions/72396293/argument-of-type-dispatch-dispatchshopdispatchtypes-promisevoid-is-n
