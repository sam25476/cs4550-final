import React from "react";
import ReviewList from "../tuits/tuits-list";
import MovieReview from "./movie-review";
const HomeComponent = () => {
    return(
        <>
            <h4>Movie Reviewer !!</h4>
            <MovieReview/>
            <ReviewList/>

        </>
    );
};
export default HomeComponent;