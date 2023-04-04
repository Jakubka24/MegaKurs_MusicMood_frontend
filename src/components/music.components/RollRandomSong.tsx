import React, {FormEvent, useState} from "react";
import {MusicEntity} from "types";


export const RollRandomSong = () => {

    const [ifExist, setIfExist] = useState<number>(Math.floor(Math.random() * 10))
    const [genre, setGenre] = useState<string>('')
    const [data, setData] = useState<MusicEntity>({
        id: '',
        bandName: '',
        songTitle: '',
        musicGenre: '',
        youTubeLink: ''
    })
    const [color, setColor] = useState<string>('')
    const [info, setInfo] = useState<string>('')


    const sendForm = async (e: FormEvent) => {
        e.preventDefault()
        const result = await fetch(`http://localhost:3001/music/${genre}`);
        const res = await result.json();
        setIfExist(Math.floor(Math.random() * res.length))
        setData({
            id: res[ifExist].id,
            bandName: res[ifExist].Band_name,
            songTitle: res[ifExist].Song_title,
            musicGenre: res[ifExist].Music_Genre,
            youTubeLink: res[ifExist].YouTube_link,
        })
    }

    const addFavourite = async (e: FormEvent) => {
        e.preventDefault()
        if (data.bandName === '') {
            setColor('red')
            setInfo('Firstly you have to choose genre and roll your daily song!')

        } else {
            const res = await fetch(`http://localhost:3001/music/favourites`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data),
            })
            const result = await res.json()
            if (result.validation === false) {
                setColor('red')
                setInfo('Songs already exists!')
            } else {
                setColor('green')
                setInfo('Song added successfully!')
            }
        }
    }

    return (
        <form onSubmit={sendForm}>
            <label>
                <select onChange={e => setGenre(e.target.value)}>
                    <option value=""></option>
                    <option value={"rock"}>rock</option>
                    <option value={"metal"}>metal</option>
                    <option value={"pop"}>pop</option>
                    <option value={"techno"}>techno</option>
                    <option value={"hiphop"}>hiphop</option>
                    <option value={"classic"}>classic</option>
                    <option value={"blues"}>blues</option>
                    <option value={"country"}>country</option>
                </select>
            </label>
            <br/><br/>
            <button type={"submit"}>Click to roll!</button>
            <p style={{color: "green"}}>{data.songTitle}</p>
            <a target="_blank" className="songLink" href={data.youTubeLink}> Click here to listen.</a>
            <br/><br/>
            <button className={"addToFavourites"} type={"submit"} onClick={addFavourite}>Add to favourite!</button>
            <p style={{color: `${color}`}}>{info}</p>

        </form>
    )
}
