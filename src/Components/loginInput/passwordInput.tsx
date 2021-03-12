import React, {useEffect, useState} from 'react';
import 'font-awesome/css/font-awesome.min.css';
import "./style.css";



export const LoginInputPassword: React.FC<{register:any, isError:boolean}> = ({register, isError}) => {
    const [borderColor, setBorderColor] = useState('login-input-container-black')
    const [show, setShow] = useState ('password')
    const [emailLabel, setEmailLabel] = useState('Email')
    const [labelColor, setLabelColor] = useState('login-input-label ')
    const [buttonShow, setButtonShow] = useState('login-password-button-hide')
    const onChangeBorderColor = () => {
        setBorderColor('login-input-container-blue')
        setEmailLabel("Veuiliex vous connecter avec votre email")
        setLabelColor('login-input-label-blue ')
        setButtonShow('login-password-button')
    }
    const onPasswordClick = () => {
        if (show==='password')
            setShow('text')
        else 
            setShow('password')
    }

    useEffect(() => {
        if (isError) {
            setBorderColor('login-input-container-red')
            setEmailLabel('Email')
            setLabelColor('login-input-label')
        }
    })

    const onBorderColorClick = () => {
        setBorderColor('login-input-container-blue')
        setEmailLabel("Veuiliex vous connecter avec votre email")
        setLabelColor('login-input-label-blue')
    }

    return (
        <div className={borderColor}>
            <div className="container-row1"> 
                <div className="box-1"> 
                    <label className="login-input-label"> Mot de pass </label>
                </div>
                <div className="box-2"> 
                    <a className="login-link"> Mot de passe oublie?</a>
                </div>
            </div>
            <div className="container-row2"> 
                <div className="box-3"> 
                    <input className='login-email-input' onClick={onBorderColorClick}  name='password' ref={register} placeholder="Votre mot de pass" type={show} onInput={onChangeBorderColor} /> 
                </div>
                <div className="box-2"> 
                    <button className={buttonShow} onClick={onPasswordClick} type='button'> <i className="fa fa-eye-slash" aria-hidden="true"></i> </button>
                </div>
            </div>
            <div style={{marginBottom:'2px'}}> </div>
        </div>
    )
}



