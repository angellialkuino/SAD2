import React, {useState} from 'react';

function App() {
    const adminUser = {
        username: 'admin',
        password: 'admin123'
    };

    const [user, setUser] = useState({name: "", password: ""});
    const [error, setError] = useState("");

    const Login = details => {
        console.log()
    }

    return (
        <div className="App">

        </div>
    );
}