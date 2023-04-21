import Tuiter from "./tuiter";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import WhoToFollowList from "./tuiter/who-to-follow-list";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/"
                       element={<Tuiter/>}/>
                <Route path="/test"
                       element={<WhoToFollowList/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;