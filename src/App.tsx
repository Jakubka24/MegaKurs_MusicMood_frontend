import React, {useState} from 'react';
import './App.css';

import {Route, Routes} from "react-router-dom";
import {StartView} from "./view/startView/startView";
import {HowItsWorkingView} from "./view/howItsWorkingView/howItsWorkingView";
import {AboutMeView} from "./view/aboutMeView/aboutMeView";
import {FavouriteView} from "./view/favouriteView/favouriteView";
import {AddSongView} from "./view/addSongView/addSongView";
import {RollSongView} from "./view/rollSongView/rollSongView";
import {LoginView} from "./view/loginView/loginView";


function App() {
    if (localStorage.length === 0) {
        localStorage.setItem('userStatus', 'Click here to sign up or log in!')
    } else {
        localStorage.getItem('userStatus')
    }
    return <>
        <Routes>
            <Route path="/" element={<StartView/>}/>
            <Route path="/howItsWorking" element={<HowItsWorkingView/>}/>
            <Route path="/aboutMe" element={<AboutMeView/>}/>
            <Route path="/favourite" element={<FavouriteView/>}/>
            <Route path="/addSong" element={<AddSongView/>}/>
            <Route path="/rollSong" element={<RollSongView/>}/>
            <Route path="/login" element={<LoginView/>}/>
        </Routes>
    </>
}

export default App;
