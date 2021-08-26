import Register from "./Register";
import Login from "./Login";
import { useState } from 'react';

const Auth = (props) => {

    let [login, setLogin] = useState(false);

    return(
        <div>

            {
            login ? <Login setToken={props.setToken} /> : <Register />
            }
        <button onClick={() => setLogin(!login)}>
            {
            login ? 'Register' : 'Login'
            }
        </button>
        </div>
    )
};

export default Auth;