import axios from 'axios';
const API_BASE = process.env.REACT_APP_API_BASE;
const REVIEW_API = `${API_BASE}/reviews`;

export const createReview = async (review) => {
    const response = await axios.post(REVIEW_API, review)
    return response.data;
}

export const findReview = async () => {
    const response = await axios.get(REVIEW_API);
    const review = response.data;
    return review;
}

export const deleteReview = async (rid) => {
    const response = await axios
        .delete(`${REVIEW_API}/${rid}`)
    return response.data
}

export const updateReview = async (review) => {
    const response = await axios
        .put(`${REVIEW_API}/${review._id}`, review);
    return review;
}
