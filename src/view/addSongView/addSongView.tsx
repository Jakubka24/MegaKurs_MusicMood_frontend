import React from "react";
import {Link} from "react-router-dom";
import {AddSong} from "../../components/music.components/AddSong";
import "./addSongView.css"

export const AddSongView = () => {

    return <div className="background">
        <div className="addSong">
            <h1>Add song</h1>
            <br/>
            <AddSong/>
            <br/>
            <Link className="return" to="/">Back to main page</Link>
        </div>
    </div>

}