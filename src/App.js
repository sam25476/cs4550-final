import Tuiter from "./tuiter";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import ProfileScreen from "./tuiter/screens/profile-screen";
import LoginScreen from "./tuiter/screens/login-screen";
import {configureStore} from "@reduxjs/toolkit";
import whoReducer from "./tuiter/reducers/who-reducer";
import tuitsReducer from "./tuiter/tuits/tuits-reducer";
import authReducer from "./tuiter/reducers/auth-reducer";
import {Provider} from "react-redux";
import SearchScreen from "./search/search-screen";

function App() {
    const store = configureStore(
        {reducer: {
                who: whoReducer,
                tuitsData: tuitsReducer,
                user: authReducer}});
    return (
        <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/"
                       element={<Tuiter/>}/>
                <Route path="/login"
                       element={<LoginScreen />} />
                <Route path="/profile"
                       element={<ProfileScreen />} />
                <Route path="/search"
                       element={<SearchScreen />} />
            </Routes>
        </BrowserRouter>
        </Provider>
    );
}

export default App;