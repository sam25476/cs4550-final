import { createSlice } from "@reduxjs/toolkit";
import {createReviewThunk, deleteReviewThunk, findReviewThunk, updateReviewThunk}
    from "../../services/tuits-thunks";

const initialState = {
    tuits: [],
    loading: false
}

const tuitsSlice = createSlice({
                                   name: 'tuits',
                                   initialState,
                                   extraReducers: {
                                       [findReviewThunk.pending]:
                                           (state) => {
                                               state.loading = true
                                               state.tuits = []
                                           },
                                       [findReviewThunk.fulfilled]:
                                           (state, { payload }) => {
                                               state.loading = false
                                               state.tuits = payload
                                           },
                                       [findReviewThunk.rejected]:
                                           (state, action) => {
                                               state.loading = false
                                               state.error = action.error
                                           },
                                       [deleteReviewThunk.fulfilled] :
                                           (state, { payload }) => {
                                               state.loading = false
                                               state.tuits = state.tuits
                                                   .filter(t => t._id !== payload)
                                           },
                                       [createReviewThunk.fulfilled]:
                                           (state, { payload }) => {
                                               state.loading = false
                                               state.tuits.push(payload)
                                           },
                                       [updateReviewThunk.fulfilled]:
                                           (state, { payload }) => {
                                               state.loading = false
                                               const tuitNdx = state.tuits
                                                   .findIndex((t) => t._id === payload._id)
                                               state.tuits[tuitNdx] = {
                                                   ...state.tuits[tuitNdx],
                                                   ...payload
                                               }
                                           }
                                   },
                                   reducers: { }
                               });
export default tuitsSlice.reducer;