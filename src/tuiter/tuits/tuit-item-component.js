import React from "react";
import TuitStats from "./tuit-stats";
import "./index.css"
import {useDispatch} from "react-redux";
import {deleteReviewThunk} from "../../services/tuits-thunks";

const TuitItem = (
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
    const deleteTuitHandler = (id) => {
        dispatch(deleteReviewThunk(id));
    }
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-1">
                    <img width={35} height={35} className="float-end rounded-circle" src={`/images/${tuit.image}`}/>
                </div>
                <div className="col-11">
                    <div>
                        <span className="fw-bold"> {tuit.userName} </span>
                        <span> {tuit.handle}
                        <i className="bi bi-patch-check-fill wd-verified"></i>
                            <span> - </span> {tuit.time}
                        </span>
                        <i className="bi bi-x-lg float-end"
                           onClick={() => deleteTuitHandler(tuit._id)}></i>
                    </div>
                    <br></br>
                    <div>{tuit.review}</div>
                    <div>{tuit.stars}</div>
                    <div>{tuit.title}</div>
                </div>
            </div>
            <div className="row">
                <div className={"col-1"}></div>
                <div className={"col-11"}>
                    <TuitStats key={tuit._id} tuit={tuit}/>
                </div>
            </div>
        </li>
    );
};
export default TuitItem;