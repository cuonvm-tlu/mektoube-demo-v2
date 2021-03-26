import { useForm, SubmitHandler } from "react-hook-form";
import React, {useEffect, useState} from 'react';
import 'font-awesome/css/font-awesome.min.css';
import "./style.css";

import { showNoti} from '../../../Actions//Noti/notiActions'
import { hideNoti} from '../../../Actions/Noti/notiActions'
import { useDispatch, useSelector } from 'react-redux'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useHistory } from "react-router-dom";

import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Noti } from  '../../../Components/Noti/index';
import { PasswordStrengthMeter } from '../../../Components/passwordStrength/index'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../../Actions/userSignup/signUpActions';

import { addName, addEmail, addPassword } from '../../../Actions/formData/formDataActions'
// import Spinner from 'react-bootstrap/Spinner'
import ClipLoader from "react-spinners/ClipLoader";



type Inputs = {
  email: string;
  firstname: string;
  password: string;
  condition1: boolean,
  condition2: boolean,
};

type FormData = {
  formdata: any
}

const schema = yup.object().shape({
    email: yup.string().email().required(),
    firstname: yup.string().required(),
    password: yup.string().required('Le mot de passe ne peut pas êntre vide').min(8, 'Votre nouveau mot de passe doit faire au moins 8 caractères'),
    condition1: yup.boolean().oneOf([true], 'Must Accept Terms and Conditions'),
    condition2: yup.boolean().oneOf([true], 'Must Accept Terms and Conditions'),
});


export default function Signup() {
  const { register, handleSubmit, watch, errors } = useForm<Inputs>({
    resolver: yupResolver(schema)
  });
  const data1 = (state: FormData) => state.formdata
  const data2 = useSelector(data1)
  const location = useLocation();
  const history = useHistory()
  const [label1, setLabel1] = useState('signupForm-input-label')
  const [label2, setLabel2] = useState('signupForm-input-label')
  const [label3, setLabel3] = useState('signupForm-input-label')
  const [underline1, setUnderLine1] = useState('signupForm-input-cotainer-inner-2')
  const [underline2, setUnderLine2] = useState('signupForm-input-cotainer-inner-2')
  const [underline3, setUnderLine3] = useState('signupForm-input-cotainer-inner-2')
  const [show, setShow] = useState ('password')
  const [errMessage, setErrMessage] = useState('')
  const [emailValue, setEmailValue] = useState(`${data2.email}`)
  const [nameValue, setNameValue] = useState(`${data2.firstname}`)
  const [passwordValue, setPasswordValue] = useState(`${data2.password}`)
  const [tokenExisted, setTokenExisted] = React.useState<any>(localStorage.getItem('token'))
  const [passwordButton, setPasswordButton] = useState('signup-password-button-hide')
  const [isFetchedData, setIsFetchedData] = useState(false)
  const onSubmit: SubmitHandler<Inputs> = data => {
    const signUpForm ={
      firstname: data.firstname,
      password: data.password,
      gender: data2.gender,
      email: data.email,
      geoname_id: parseInt(data2.geoname_id, 10),
      mailing: 1,
      affiliate: 1,
      origin: data2.origin,
      birthday: data2.Birthday,
      deviceOS: "web", 
    }
    console.log(signUpForm)
  
    /// mising headers 
    setIsFetchedData(true)
    axios.post('https://responsive-staging.ltservices2.ovh/api/pool/.json?new_key_signup=true', signUpForm, 
    {
      headers: {
      "Content-type": "multipart/form-data"
      }
    }
    )
    .then(function (response) {
      console.log(response);
      localStorage.setItem('token', response.data.CONTENT.AUTH.token)
      localStorage.setItem('puk', response.data.CONTENT.AUTH.puk)
      const userInfo:any = {
      uuid: response.data.CONTENT.AUTH.uuid,
      puk: response.data.CONTENT.AUTH.puk,
      token: response.data.CONTENT.AUTH.token,
      }
      const logginAction = signUp(userInfo)
      dispatch(logginAction)
      setTokenExisted(localStorage.getItem('token'))
      history.push({
        pathname: '/homePage/'
    });
    }, 
    )
    .catch(function (error) {
      // console.log(error);
      // setErrMessage(`${error.response.data.errors[0].message}`)
      setErrMessage('There is an error')
      dispatch(action)
      setTimeout(() => {
        dispatch(hideNoti())
      }, 5000);
      setIsFetchedData(false)
    });
  }; // your form submit function which will invoke after successful validation
  
  const dispatch = useDispatch()
  const action = showNoti()

  const onNameChange = (event:any) => {
    setNameValue(event.target.value)
  }

  const onEmailChange = (event:any) => {
    setEmailValue(event.target.value)
    console.log(event.target.value)
    console.log(emailValue)
  }

  const onPasswordChange = (event:any) => {
    setPasswordValue(event.target.value)
  }

  const onPasswordClick = () => {
    if (show==='password')
        setShow('text')
    else 
        setShow('password')
  }

  const onLabelFocus1 = () => {
    setLabel1('signupForm-input-label-2')
  }

  const onLabelBlur1 = () => {
    if (emailValue ==='')
      setLabel1('signupForm-input-label')
  }

  const onLabelFocus2 = () => {
    setLabel2('signupForm-input-label-2')
  }

  const onLabelBlur2 = () => {
    if (nameValue ==='')
      setLabel2('signupForm-input-label')
  }

  const onLabelFocus3 = () => {
    setLabel3('signupForm-input-label-2')
  }

  const onLabelBlur3 = () => {
    if (passwordValue ==='')
      setLabel3('signupForm-input-label')
  }

  useEffect(()=>{
    console.log(passwordValue)
    if (passwordValue !== ''){
      setPasswordButton('signup-password-button')
    }
    else {
      setPasswordButton('signup-password-button-hide')
    }
    if (data2.email !== '' && emailValue !== '')
      setLabel1('signupForm-input-label-2')
    if (data2.firstname !== '' && nameValue !== '')
      setLabel2('signupForm-input-label-2')
    if (data2.password !== '' && passwordValue !== ''){
      setLabel3('signupForm-input-label-2')
    }
    if (errors.email !== undefined)
    {
        setUnderLine1('signupForm-input-cotainer-inner-2-red')
    }
    else {
        setUnderLine1('signupForm-input-cotainer-inner-2')
    }

    if (errors.firstname !== undefined)
    {
        setUnderLine2('signupForm-input-cotainer-inner-2-red')
    }
    else {
        setUnderLine2('signupForm-input-cotainer-inner-2')
    }

    if (errors.password  !== undefined)
    {
        setUnderLine3('signupForm-input-cotainer-inner-2-red')
    }
    else {
        setUnderLine3('signupForm-input-cotainer-inner-2')
    }
  })

  const onBackClick = () => {
    dispatch(addEmail(emailValue))
    dispatch(addPassword(passwordValue))
    dispatch(addName(nameValue))
    let path = `/cityForm/`; 
    history.push(path);
  }

  return (
    <div className='originForm-container-fluid'> 
        <section  className="originForm-section full-height">
            <div className="originForm-inner-section"> 
              <Noti content={errMessage} style={'noti-signup'}/> 
                <form className='originForm-form' onSubmit={handleSubmit(onSubmit)}>
                    <div className="signupForm-form-header"> 
                        <button type="button" onClick={onBackClick} className="originForm-linkback"> 
                            <ArrowBackIosIcon style={{ color: 'white', width: 18, height: 18}}/>
                         </button>
                        <h4 className="entityForm-h4">Inscription</h4>
                        <a className="signup-a" href="/"> Deja un compete? </a>
                    </div>
                    <div className="originForm-form-body"> 
                      <div className="signupForm-input-container"> 
                        <div className="signupForm-input-container-inner"> 
                          <label className={label1}>  Email </label>
                          <div className={underline1}> 
                            <input className='signupForm-input' name='email' value={emailValue} onChange={onEmailChange} onFocus={onLabelFocus1} onBlur={onLabelBlur1} ref={register}/> 
                          </div>
                        </div>
                      </div>
                      {errors.email && <p className='error'>L'email n'est pass valide</p>}   
                      <div className='signupForm-space' > </div>
                      <div className="signupForm-input-container"> 
                        <div className="signupForm-input-container-inner"> 
                          <label className={label2}>  Prénom </label>
                          <div className={underline2}> 
                            <input className='signupForm-input' name='firstname' value={nameValue} onChange={onNameChange} onFocus={onLabelFocus2} onBlur={onLabelBlur2} ref={register}/> 
                          </div>
                        </div>
                      </div>
                      {errors.firstname && <p className='error'>Le Prenom ne peut pas entre vide</p>} 
                      <div className='signupForm-space' > </div>
                      <div className="signupForm-input-container"> 
                        <div className="signupForm-input-container-inner"> 
                          <label className={label3}>  Mot de Pass </label>
                          <div className={underline3}> 
                            <input className='signupForm-input' name='password' value={passwordValue} onChange={onPasswordChange} type={show} onFocus={onLabelFocus3} onBlur={onLabelBlur3} ref={register} /> 
                            <button className={passwordButton} onClick={onPasswordClick} type='button'> <i className="fa fa-eye-slash" aria-hidden="true"></i> </button>
                            <PasswordStrengthMeter password={passwordValue} />
                          </div>
                        </div>
                      </div>
                      {errors.password && <p className='error'>{errors.password.message}</p>} 
                      <div className="signupForm-condition-container"> 
                        <div className="signupForm-checkbox"> 
                          <span>
                            <input className="signupForm-input-checkbox" type="checkbox" name="condition1" ref={register}/>
                          </span>
                          <span className="signupForm-input-checkbox-span">Je certifie être majeur(e) et j'accepte les GCU </span>
                        </div>
                        <div className='signupForm-space-2' > </div>
                        <div className="signupForm-checkbox"> 
                          <span>
                            <input className="signupForm-input-checkbox" type="checkbox" name="condition2" ref={register}/>
                          </span>
                          <span className="signupForm-input-checkbox-span">J'accepte que mes données renseignées, y compris celles facultatives relatives à mon origine, soient traitées par Mektoube et communiquées à ses prestataires et aux autres membres situés dans et hors l’UE afin de favoriser des rencontres et assurer la gestion de ma relation commerciale et ce conformément à la charte privée </span>
                        </div>
                      </div>
                    </div>
                    <div className="signupForm-form-action"> 
                    {
                      !isFetchedData ?
                      <button type="submit" className='signupForm-button' > 
                        <i className="fa fa-check signup-check" aria-hidden="true"></i>
                        <span className='signup-span'> CREER MON COMPETE </span>
                      </button>
                      :
                      <button type="submit" className='signupForm-button-2' >
                        <ClipLoader  color="#ffffff" />
                      </button>
                    }
                    </div>
                </form> 
            </div>
        </section>
    </div>
  );
}
      
    