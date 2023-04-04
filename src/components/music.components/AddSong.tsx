import React, {FormEvent, useState} from "react";
import {Spinner} from "../Spinner/Spinner";
import {MusicEntity} from "types";


export const AddSong = () => {

    const [emptyData, setEmptyData] = useState<MusicEntity>({
        id: '',
        bandName: '',
        songTitle: '',
        musicGenre: '',
        youTubeLink: ''
    });

    const [load, setLoad] = useState<boolean>(false)
    const [formData, setFormData] = useState<MusicEntity>(emptyData)
    const [info, setInfo] = useState<string>('')
    const [color, setColor] = useState<string>('')

    const setName = (key: string, value: string) => {
        setFormData(formData => ({
            ...formData,
            [key]: value,
        }))
    };

    const setTitle = (key: string, value: string): void => {
        setFormData(formData => ({
            ...formData,
            [key]: value,
        }))
    };

    const setMusicGenre = (key: string, value: string): void => {
        setFormData(formData => ({
            ...formData,
            [key]: value,
        }))
    };

    const setLink = (key: string, value: string): void => {
        setFormData(formData => ({
            ...formData,
            [key]: value,
        }))
    };


    const sendForm = async (e: FormEvent) => {
        e.preventDefault();
        setLoad(true)

        setTimeout(
            async () => {

                if (formData.bandName === null || formData.bandName.length < 2 || formData.bandName.length > 50) {
                    setInfo(`Band name should have between 2 and 50 words`)
                    setColor("red")
                    setFormData(emptyData)
                    setLoad(false)

                } else if (formData.songTitle.length === 0 || formData.youTubeLink.length === 0) {
                    setInfo('Every column must be filled!')
                    setColor("red")
                    setFormData(emptyData)
                    setLoad(false)
                } else {
                    try {
                        const res = await fetch(`http://localhost:3001/music/add/${formData.musicGenre}`, {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify(formData),
                            }
                        )
                        const data = await res.json();
                        setInfo(`Added "${data.songTitle}" by "${data.bandName}".`)
                        setColor('green')

                    } finally {
                        setFormData(emptyData)
                        setLoad(false)
                    }
                }

            }, 1500
        )
    };

    if (load) {
        return <div className="added">
            <Spinner/>
            <p>Adding song to database...</p>
        </div>
    }


    return <>
        <form onSubmit={sendForm}>
            <p className="inputDesc">Name of the band</p>
            <input type="text" value={formData.bandName} onChange={e => setName('bandName', e.target.value)}/><br/>

            <p className="inputDesc">Title of Song</p>
            <input type="text" value={formData.songTitle} onChange={e => setTitle('songTitle', e.target.value)}/><br/>

            <p className="inputDesc">Music Genre</p>
            <select value={formData.musicGenre} onChange={e => setMusicGenre('musicGenre', e.target.value)}>
                <option></option>
                <option value={"rockmusic"}>rock</option>
                <option value={"metalmusic"}>metal</option>
                <option value={"popmusic"}>pop</option>
                <option value={"technomusic"}>techno</option>
                <option value={"hiphopmusic"}>hip-hop</option>
                <option value={"classicmusic"}>classic</option>
                <option value={"bluesmusic"}>blues</option>
                <option value={"countrymusic"}>country</option>
            </select>


            <p className="inputDesc">YouTube link</p>
            <input type="text" value={formData.youTubeLink}
                   onChange={e => setLink('youTubeLink', e.target.value)}/><br/><br/>

            <button type="submit"> Save</button>

            <p className="message" style={{color: `${color}`}}>{info}</p>
        </form>
    </>
}