import React, {useState} from "react";
import {createReviewThunk}
    from "../../services/tuits-thunks";
import {useDispatch} from "react-redux";
const MovieReview = () => {
    let [movieReview, setMovieReview] = useState('');
    let [movieTitle, setMovieTitle] = useState('');
    let [stars, setStars] = useState(0);
    const dispatch = useDispatch();
    const reviewHandler = () => {
        const newReview = {
            title: movieTitle,
            review: movieReview,
            stars: stars,
            userName: "sam_reviews03"
        }
        dispatch(createReviewThunk(newReview));
    }
    return (
        <div className="row border-1">
            <div className="col-12">
       <textarea value={movieTitle} placeholder="Whatcha Watching?"
                 className="form-control border-1"
                 onChange={(event) => setMovieTitle(event.target.value)}>
       </textarea>
                <textarea value={movieReview} placeholder="Thoughts?"
                          className="form-control border-1"
                          onChange={(event) => setMovieReview(event.target.value)}>
       </textarea>
                <div>
                    <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                            onClick={reviewHandler}>
                        Rate!
                    </button>
                </div>
                <div>
                    <select className="rounded-pill" id="rating" onChange={event => setStars(+event.target.value)}>
                        <option> 0</option>
                        <option> 1</option>
                        <option> 2</option>
                        <option> 3</option>
                        <option> 4</option>
                        <option> 5</option>
                        <option> 6</option>
                        <option> 7</option>
                        <option> 8</option>
                        <option> 9</option>
                        <option> 10</option>
                    </select>
                    <span className="bi bi-star-fill text-warning">'s</span>
                </div>
            </div>
            <div className="col-12"><hr/></div>
        </div>
    );
}
export default MovieReview;