import React, {FormEvent, useState} from "react";
import {Spinner} from "../Spinner/Spinner";
import {UserEntity} from "types";

export const Register = (props: any) => {

    const [userData, setUserData] = useState<UserEntity>({
        id: '',
        userName: '',
        password: '',
        confirmPassword: '',
        emailAddress: '',
    });
    const [load, setLoad] = useState<boolean>(false);
    const [formData, setFormData] = useState<UserEntity>(userData);
    const [message, setMessage] = useState<string>('')
    const [messageColor, setMessageColor] = useState<string>('')
    const [passwordVisibility, setPasswordVisibility] = useState<string>('password')
    const [toggle, setToggle] = useState<boolean>(false)

    const btnToggle = () => {
        if (toggle) {
            setPasswordVisibility("password")
            setToggle(false)
        } else {
            setPasswordVisibility("text")
            setToggle(true)
        }
    }

    const setUserName = (key: string, value: any):void => {
        setFormData(formData => {
            return ({
                ...formData,
                [key]: value,
            });
        })
    }

    const setPassword = (key: string, value: any):void => {
        setFormData(formData => ({
            ...formData,
            [key]: value,
        }))
    }

    const setEmailAddress = (key: string, value: any):void => {
        setFormData(formData => ({
            ...formData,
            [key]: value,
        }))
    }

    const setConfirmPassword = (key: string, value: any):void => {
        setFormData(formData => ({
            ...formData,
            [key]: value,
        }))
    }

    const sendForm = async (e: FormEvent) => {
        e.preventDefault()
        setLoad(true)

        setTimeout(
            async () => {

                if (formData.userName.length < 2 || formData.userName.length > 30) {
                    setMessageColor('red')
                    setMessage('Name length should have between 2 and 30 words!')

                } else if (formData.password !== formData.confirmPassword) {
                    setMessageColor('red')
                    setMessage('Confirm password must be same as password!')
                } else if (formData.password.length === 0 || formData.confirmPassword.length === 0 || formData.emailAddress.length === 0) {
                    setMessageColor('red')
                    setMessage('Every column must be filled!')
                } else {
                    try {
                        const res =
                            await fetch('http://localhost:3001/user/add', {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify(formData),
                                }
                            );
                        const data = await res.json();

                    } finally {
                        setMessageColor('green')
                        setMessage('Registration successfully!')
                        setFormData(userData)
                        setLoad(false)
                    }
                }

            })
    }

    return <div className="register">
        <form onSubmit={sendForm}>
            <p className="registerInput">User Name</p> <br/>
            <input type="text" value={formData.userName}
                   onChange={e => setUserName('userName', e.target.value)}/><br/>

            <div className="registerPassword">
                <p className="registerInput">Password</p> <br/>
                <input type={passwordVisibility} value={formData.password}
                       onChange={e => setPassword('password', e.target.value)}/>
                <button form="form2" className="passwordBtn" onClick={() => btnToggle()}><img src="/hidden.png" alt=""/>
                </button><br/>
            </div>

            <div className="registerConfirmPassword">
                <p className="registerInput">Confirm password</p> <br/>
                <input type={passwordVisibility} value={formData.confirmPassword}
                       onChange={e => setConfirmPassword('confirmPassword', e.target.value)}/>
                <button form="form2" className="passwordBtn" onClick={() => btnToggle()}><img src="/hidden.png" alt=""/>
                </button><br/>
            </div>


            <p className="registerInput">Email Address</p><br/>
            <input type="text" value={formData.emailAddress}
                   onChange={e => setEmailAddress('emailAddress', e.target.value)}/><br/><br/><br/><br/><br/>

            <button>Register</button>
            <br/><br/>

            <p className="message" style={{color: `${messageColor}`}}>{message}</p>
        </form>

    </div>
}
