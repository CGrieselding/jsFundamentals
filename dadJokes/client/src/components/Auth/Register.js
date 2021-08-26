import {useState} from 'react';

const Register = () => {

    let [email, setEmail] = useState('');
    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');

    const registerUser = () => {
        fetch('http://localhost:4000/user/register', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user: {
                    email,
                    username,
                    password
                }
            })
        })
        .then(res => res.json())
        .then(json => {
            console.log(json)
        })
        .catch(err => console.log(err))
    };
    
    return(
        <div>
            <h3>Register</h3>
            <form>
                <input placeholder="email" type="email" value={email} onChange={e => setEmail(e.target.value)}/>
                <br />
                <input placeholder="username" type="text" value={username} onChange={e => setUsername(e.target.value)}/>
                <br />
                <input placeholder="password" type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                <br />

                <button onClick={e => {e.preventDefault(); registerUser()}}>Submit</button>
            </form>
        </div>
    )
};

export default Register;


// To Do
/*
    - form/input where users can enter information
        - store information to variables
        - email, username, password

    - send it to the database, using an api through fetch()
*/