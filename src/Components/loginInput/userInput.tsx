import React, {useEffect, useState} from 'react';
import 'font-awesome/css/font-awesome.min.css';
import "./style.css";



export const LoginInputUserName: React.FC<{register:any, isError:boolean}> = ({register, isError}) => {
    const [borderColor, setBorderColor] = useState('login-input-container-black')
    const [emailLabel, setEmailLabel] = useState('Email')
    const [labelColor, setLabelColor] = useState('login-input-label')
    const onChangeBorderColor = () => {
        setBorderColor('login-input-container-blue')
        setEmailLabel("Veuiliex vous connecter avec votre email")
        setLabelColor('login-input-label-blue')
    }

    const onBorderColorClick = () => {
        setBorderColor('login-input-container-blue')
        setEmailLabel("Veuiliex vous connecter avec votre email")
        setLabelColor('login-input-label-blue')
    }
    
    useEffect(() => {
        if (isError) {
            setBorderColor('login-input-container-red')
            setEmailLabel('Email')
            setLabelColor('login-input-label')
        }
    })
    return (
        <div className={" " +borderColor}>
            <label className={labelColor}> {emailLabel} </label>
                <input className='login-email-input'  name="username" ref={register} placeholder="Adresse mail" type='text' onClick={onBorderColorClick} onInput={onChangeBorderColor} /> 
            <div style={{marginBottom:'2px'}}> </div>
        </div>
    )
}



