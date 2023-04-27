import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import ReviewItem from "./tuit-item-component";
import {findReviewThunk}
    from "../../services/tuits-thunks";

const ReviewList = () => {
    const {tuits, loading} = useSelector(
        state => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findReviewThunk())
    }, [])

    return(
        <ul className="list-group">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            {
                tuits.map(tuit => <ReviewItem
                    key={tuit._id} tuit={tuit}/>)
            }
        </ul>
    );
};
export default ReviewList;