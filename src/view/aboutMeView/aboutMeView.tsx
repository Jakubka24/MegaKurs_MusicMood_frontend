import React from "react";
import {Link} from "react-router-dom";
import "./aboutMeView.css"

export const AboutMeView = () => {
    return <div className="backgroundAboutMe">
        <div className="aboutMe">
            <h1>Few words about me...</h1>
            <div>
                <h1 className="hello">Hello!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi architecto beatae
                    consectetur culpa cumque ea fuga hic ipsam nostrum numquam officiis praesentium quasi quia,
                    reiciendis similique soluta suscipit unde.lore
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita facilis harum illo maxime vero
                    voluptatum!orem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi architecto beatae
                    consectetur.
                </p>
            </div>
            <div className="contact">
                <li><img src="/telephone.png" alt=""/><b>Phone number:</b> 692 088 732</li>
                <li><img src="/email (1).png" alt=""/><b>Email: </b> jakub24@gmail.com</li>
                <li><img src="/pin.png" alt=""/><b>Adress:</b> ul.Szkolna 17, 5-640 Białystok</li>
            </div>
            <Link to="/">Back to main page</Link>
        </div>
    </div>
}