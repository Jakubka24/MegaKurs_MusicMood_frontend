import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./loginView.css"
import {Login} from "../../components/user.components/Login";
import {Register} from "../../components/user.components/Register";



export const LoginView = () => {
    return <div className="logBgc">
        <h1>Login or register</h1>
        <div className="mainWindow">
            <Login />
            <Register />
        </div>
        <Link to="/">Back to main page</Link>
    </div>
}

//@TODO Oznaczyć typy w TS
