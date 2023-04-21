import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service
    from "./tuits-service"

export const findReviewThunk = createAsyncThunk(
    'reviews/findReviews', async () =>
        await service.findReview()
)

export const deleteReviewThunk = createAsyncThunk(
    'reviews/deleteReview',
    async (reviewId) => {
        await service.deleteReview(reviewId)
        return reviewId
    })

export const createReviewThunk = createAsyncThunk(
    'reviews/createReview',
async (review) => {
    const newReview = await service.createReview(review)
    return newReview
})

export const updateReviewThunk =
    createAsyncThunk(
        'review/updateReview',
        async (review) =>
            await service.updateReview(review)
    )
