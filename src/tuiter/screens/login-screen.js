import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import {loginThunk, registerThunk} from "../../services/auth-thunks";
function LoginScreen() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogin = async () => {
        try {
            await dispatch(loginThunk({ username, password }));
            navigate("/profile");
        } catch (e) {
            alert(e);
        }
    };
    const handleRegister = async () => {
        try {
            await dispatch(registerThunk({ username, password }));
            navigate("/profile");
        } catch (e) {
            alert(e);
        }
    };
    return (
        <div className={"row"}>
            <div className={"col-6"}>
                <h1>Login</h1>
                <div>
                    <label>Username</label>
                    <input className="form-control"
                           type="text" value={username}
                           onChange={(event) => setUsername(event.target.value)}
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input className="form-control"
                           type="password" value={password}
                           onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <button onClick={handleLogin}>
                    Login
                </button>
            </div>
            <div className={"col-6"}>
                <h1>Register</h1>
                <div>
                    <label>Username</label>
                    <input className="form-control"
                           type="text" value={username}
                           onChange={(event) => setUsername(event.target.value)}
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input className="form-control"
                           type="password" value={password}
                           onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <button onClick={handleRegister}>
                    Register
                </button>
            </div>
        </div>
    );

}
export default LoginScreen;