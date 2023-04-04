import React, {FormEvent, useState} from "react";
import {LogEntity} from "types";

export const Login = () => {

    const [userData, setUserData] = useState<LogEntity>({
        userName: '',
        password: '',

    })
    const [load, setLoad] = useState<boolean>(false);
    const [data, setData] = useState<LogEntity>(userData)
    const [login, setLogin] = useState<string>('')
    const [color, setColor] = useState<string>('')
    const [passwordVisibility, setPasswordVisibility] = useState<string>('password')
    const [toggle, setToggle] = useState<boolean>(false)


    const btnToggle = (): void => {
        if (toggle) {
            setPasswordVisibility("password")
            setToggle(false)
        } else {
            setPasswordVisibility("text")
            setToggle(true)
        }
    }


    const setUserName = (key: string, value: string): void => {
        setData(formData => ({
            ...formData,
            [key]: value,
        }))

    }

    const setPassword = (key: string, value: string) => {
        setData(formData => ({
            ...formData,
            [key]: value,
        }))
    }

    const sendForm = (e: FormEvent):void => {
        e.preventDefault()
        setLoad(true);

        setTimeout(
            (async () => {
                if (data.userName.length === 0 || data.password.length === 0) {
                    setLogin(`Every column must be filled!`)
                    setColor('red')
                }
                try {
                    const res = await fetch(`http://localhost:3001/user/${data.userName}/${data.password}`)
                    const response = await res.json()

                    if (response.data === null) {
                        setLogin('Invalid login or password!')
                        setColor('red')
                    } else {
                        setLogin(`Logged correctly as "${data.userName}".`)
                        setColor('green')
                        localStorage.setItem('userStatus', `Logged as ${data.userName}`)
                    }

                } finally {
                    setLoad(false)
                    setData(userData)
                }
            }));
    }

    return <div className="logIn">
        <form onSubmit={sendForm}>


            <p className="logInput">User Name</p><br/>

            <input type="text" value={data.userName} onChange={e => setUserName('userName', e.target.value)}/><br/>
            <p className="logInput">Password</p><br/>
            <div className="loginPassword">
                <input type={passwordVisibility} value={data.password}
                       onChange={e => setPassword('password', e.target.value)}/>
                <button form="form2" className="passwordBtn" onClick={() => btnToggle()}><img src="/hidden.png" alt=""/>
                </button>
            </div>

            <br/><br/><br/>
            <button onSubmit={() => localStorage.setItem('message', `Logged correctly!`)}>Log in</button>
            <br/>
            <button form="form3" className="logoutBtn"
                    onClick={() => {
                        if (localStorage.getItem('userStatus') !== 'Click here to sign up or log in!') {
                            localStorage.setItem('userStatus', 'Click here to sign up or log in!')
                            setColor('green')
                            setLogin('Logout successfully!')
                        } else {
                            setColor('red')
                            setLogin('You are not logged in!')
                        }
                    }}>Log out
            </button>
            <p className="message" style={{color: `${color}`, paddingTop: 50}}>{login}</p>
        </form>
    </div>
};

//@TODO ogarnac wylogowanie