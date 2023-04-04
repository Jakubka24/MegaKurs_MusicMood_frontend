import React from "react";
import {Link} from "react-router-dom";
import "./howItsWorking.css"

export const HowItsWorkingView = () => {
    return <div className="background">
        <div className="howItsWorking">
            <h1>
                Are you bored of what you listening? If the answer is "yes" you are in the right place!
                <br/><br/>
                As music fan I decided to make something associated with it.
                In this application you're able to roll "your daily song". Before roll you can make a choice between the
                most popular music generes. You can also add your own song to database. That give you possibility to discover new awesome songs!
                <br/><br/>
                In future there will be few new things for registered users.

            </h1>
            <Link to="/">Back to main page</Link>
        </div>
    </div>
}