import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom"
import axios from "axios"
import "../Signup/signup.css"

function Login() {

    const [data, setData] = useState()
    const navigate = useNavigate()
    function handlemail(e) {
        const mail = e.target.value;
        setData(form => ({ ...form, mail: mail }))
    }
    function handlepassword(e) {
        const pw = e.target.value;
        setData(form => ({ ...form, password: pw }))
    }
    function handlelogin(e) {
        e.preventDefault();
        axios({
            url: "http://localhost:3001/todo/login",
            method: "POST",
            headers: {

            },
            data: data
        }).then((res) => {
            localStorage.setItem("authorization", res.data.authToken);
            navigate("");
            setData({ mail: "", password: "" })
            console.log(res);
        }).catch((err) => {
            alert("Invalid email and password");
            console.log(err);
        })
    }


    return (
        <div className="mainpage">
            <div className="container">
                <div className="logo">
                    <div>
                        <h1>10X Real Estate</h1>
                    </div>
                </div>

                <form className="mainform" onSubmit={handlelogin}>
                    <div >
                        <p style={{ opacity: "0.6" }}>Enter your credentials details</p>
                    </div>
                    <br />
                    <div className="form-group" >
                        <input className="mail" type="email" placeholder="Mail ID" onChange={handlemail}></input>
                    </div>
                    <br />
                    <div className="form-group">
                        <input className="password" type="password" placeholder="Password" onChange={handlepassword}></input>
                    </div>
                    <br />
                    <div className="form-group">
                        <input className="btn" value="Sign in" type="submit" />
                    </div>
                    <br />

                    <div className="form-group">
                        <Link to="/reg"><a className="sign">Sign up</a></Link>
                    </div>
                    <br />

                </form>
            </div>
        </div>
    )
}


export default Login;