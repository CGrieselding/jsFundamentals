import React, {useState} from 'react';
import './App.css';
import Auth from './components/Auth/Auth';

const App = () => {

    const [token, setToken] = useState('')

    return (
        <div>
        <h1>App Component</h1>
        <Auth setToken={setToken} />
        </div>
    )
};

export default App;