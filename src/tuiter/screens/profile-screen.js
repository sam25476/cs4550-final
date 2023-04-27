import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { profileThunk, logoutThunk, updateUserThunk }
    from "../../services/auth-thunks";
function ProfileScreen() {
    const { currentUser } = useSelector((state) => state.user);
    const [profile, setProfile] = useState(currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const save = () => { dispatch(updateUserThunk(profile)); };
    useEffect(() => {
        async function dispatchThunk() {
            const { payload } = await dispatch(profileThunk());
            setProfile(payload);
        }
        dispatchThunk();
    }, []);
    return (
        <div>
            <h1>Profile Screen</h1>
            {profile && (
                <div>
                    <div>
                        <label>Favorite Movie</label>
                        <input type="text"
                               value={profile.favoriteMovie}
                               onChange={(event) => {
                                   const newProfile = {
                                       ...profile,
                                       favoriteMovie: event.target.value,
                                   };
                                   setProfile(newProfile);
                               }}
                        />
                    </div>
                </div>
            )}
            <button
                onClick={() => {
                    dispatch(logoutThunk());
                    navigate("/login");
                }}>
                Logout</button>
            <button onClick={save}>Save</button>
            <br></br>
            <a href="/" className="bi-house">Home</a>
        </div>
    );

}
export default ProfileScreen;