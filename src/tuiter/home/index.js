import React from "react";
import TuitList from "../tuits/tuits-list";
import MovieReview from "./movie-review";
const HomeComponent = () => {
    return(
        <>
            <h4>Home</h4>
            <MovieReview/>
            <TuitList/>

        </>
    );
};
export default HomeComponent;