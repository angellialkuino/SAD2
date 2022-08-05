import React from 'react'

function Login({Login, error}) {
    const [detials, setDetails] = useState({name: "", email:"", password: ""});

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }
    
    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2> Login</h2>
                {/*ERROR*/}
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password"/>
                </div>
                <input type="submit" value="Login"/>
            </div>
        </form>
    )
}