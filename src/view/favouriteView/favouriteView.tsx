import React, {FormEvent, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import "./favouriteView.css"
import {Spinner} from "../../components/Spinner/Spinner";

export const FavouriteView = () => {
    const [singleSong, setSingleSong] = useState([]);
    const [info, setInfo] = useState<string>('')

    useEffect(() => {
        (async () => {
                const res = await fetch('http://localhost:3001/music/favourites')
                const data = await res.json()
                setSingleSong(data.map((obj: any) => (` ${obj.Band_name} - ${obj.Song_title}`),
                ))
            }
        )()
    }, []);


    return (
        <div className="backgroundContact">
            <div className="fav">
                <h1>List of your favourite songs</h1>
                <form>
                    <ul>

                        {singleSong.map((item, index) => {
                            return <li key={index}>{item}</li>
                        })}
                        <button className={"removeBtn"}
                                onClick={async () => {
                                    await fetch(`http://localhost:3001/music/$remove`, {
                                        method: "DELETE",
                                    })
                                }}>Clear list
                        </button>
                    </ul>

                </form>
                <Link className="contactFooter" to="/">Back to main page</Link>
            </div>

        </div>)
}


