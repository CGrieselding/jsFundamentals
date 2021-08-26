import {useState} from 'react';


const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = () => {
        fetch('http://localhost:4000/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        })
        .then(res => res.json())
        .then(json => {
            console.log(json)
            props.setToken(json.sessionToken)
        })
        .catch(err => console.log(err))
    };

    return(
        <div>
            <h3>Login</h3>
            <form>
                <input placeholder="email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
                <br />
                <input placeholder="password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
                <br />
                <button onClick={e => {e.preventDefault(); loginUser()}}>Submit</button>
            </form>
        </div>
    )
};

export default Login;