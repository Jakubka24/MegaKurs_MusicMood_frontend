import React from "react";
import {Link} from "react-router-dom";
import './startView.css'


export const StartView = () => {

    return (
        <div className='background'>
            <header>
                <div>
                    <h1>Welcome in music paradise! </h1>
                    <Link className="login" to="/login">{localStorage.getItem('userStatus')}</Link>
                </div>
                <nav>
                    <Link to="/howItsWorking">How it's working?</Link>
                    <Link to="/rollSong">Roll song</Link>
                    <Link to="/addSong">Add song</Link>
                    <Link to="/aboutMe">About me</Link>
                    <Link to="/favourite">Favourites songs</Link>
                </nav>
            </header>
        </div>
    )
};