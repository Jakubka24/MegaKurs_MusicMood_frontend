import React from "react";
import {Link} from "react-router-dom";
import "./contactView.css"

export const ContactView = () => {
    return <div className="backgroundContact">
        <h1>Contact details:</h1>
        <div className="contact">
            <ul>
                <li><img src="/telephone.png" alt=""/><b>Phone number:</b>  692 088 732</li>
                <li><img src="/email (1).png" alt=""/><b>Email: </b> jakub24@gmail.com</li>
                <li><img src="/pin.png" alt=""/><b>Adress:</b> ul.Szkolna 17, 5-640 Białystok</li>
            </ul>
        </div>
        <Link className="contactFooter" to="/">Back to main page</Link>
    </div>
}