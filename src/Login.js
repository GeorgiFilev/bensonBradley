import { useState } from "react";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Login = ({ handleLogin }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:8000';
    const { data, isLoading, error } = useFetch(`${apiUrl}/authentication`);


    const loginClick = () => {
        if (data[0].username === username && data[0].password === password) {
            console.log(username);
            handleLogin();
            history.push('/');
        }
    }


    return (
        <div className="login">
            <div className="username">
                <h1> username :</h1>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>

            <div className="password">
                <h1> password :</h1>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            <button className="loginBtn" onClick={loginClick}> Login</button>
        </div>
    );
}

export default Login;