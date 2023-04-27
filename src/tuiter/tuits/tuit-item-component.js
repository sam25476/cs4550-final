import React from "react";
import TuitStats from "./tuit-stats";
import "./index.css"
import {useDispatch} from "react-redux";
import {deleteReviewThunk} from "../../services/tuits-thunks";

const ReviewItem = (
    {
        tuit = {
            "_id": 234,
            "topic": "Space",
            "userName": "SpaceX",
            "image": "tesla.png",
            "handle": "@spacex",
            "review": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars",
            "stars": "2",
            "title": "American Psycho",
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteReviewHandler = (id) => {
        dispatch(deleteReviewThunk(id));
    }

    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-12">
                    <div>
                        <span className="fw-bold"> {tuit.userName} </span>
                        <i className="bi bi-x-lg float-end"
                           onClick={() => deleteReviewHandler(tuit._id)}></i>
                        <span>
                        {tuit.title} - <span> </span>
                            {tuit.stars} <span className="bi bi-star-fill text-warning"></span>
                    </span>
                    </div>
                    <br></br>
                    <div>{tuit.review}</div>

                </div>
            </div>
        </li>
    );
};
export default ReviewItem;