import React from "react";
import {Link} from "react-router-dom";
import {RollRandomSong} from "../../components/music.components/RollRandomSong";
import "./rollSongView.css"

export const RollSongView = () => {
    return <div className = "background">
        <div className="rollSong">
            <h1>Roll your daily song</h1>
            <RollRandomSong/>
            <Link to="/">Back to main page</Link>
        </div>
    </div>
}

//@TODO zrobic hiperlink