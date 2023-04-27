import React from "react";
import NavigationSidebar from "./navigation-sidebar";
import whoReducer
    from "./reducers/who-reducer";
import tuitsReducer from "./tuits/tuits-reducer";
import { configureStore }
    from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import HomeComponent from "./home";
import WhoToFollowList from "./who-to-follow-list";
const store = configureStore(
    {reducer: {
            who: whoReducer,
            tuitsData: tuitsReducer}});
function Tuiter() {
    return (
        <Provider store={store}>
            <div className="row mt-2">
                <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                    <NavigationSidebar active="home"/>
                </div>
                <div className="col-10 col-md-10 col-lg-9 col-xl-9"
                     style={{"position": "relative"}}>
                    <HomeComponent/>
                </div>
            </div>
        </Provider>
    );
}

export default Tuiter