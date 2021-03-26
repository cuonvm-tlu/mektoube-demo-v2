import { useForm, SubmitHandler } from "react-hook-form";
import React, {useEffect} from 'react';
// import 'font-awesome/css/font-awesome.min.css';
import axios from 'axios';
import "./style.css";

import { showNoti} from '../../Actions//Noti/notiActions'
import { hideNoti} from '../../Actions/Noti/notiActions'
import { logIn } from '../../Actions/userAuth/authActions'
import { useDispatch, useSelector } from 'react-redux'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Noti } from  '../../Components/Noti/index'
import { LoginInputUserName } from '../../Components/loginInput/userInput';
import { LoginInputPassword } from '../../Components/loginInput/passwordInput';
import { Redirect } from 'react-router-dom';
import logo from './logo.png';



type Inputs = {
  username: string;
  password: string;
};

const schema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
});


export default function SignIn() {
  const { register, handleSubmit, watch, errors } = useForm<Inputs>({
    resolver: yupResolver(schema)
  });



  const [redBorderUserName, setRedBordeUserName] = React.useState<any>(false)
  const [redBorderPassWord, setRedBordePassWord] = React.useState<any>(false)
  const [tokenExisted, setTokenExisted] = React.useState<any>(localStorage.getItem('token'))


  const onSubmit: SubmitHandler<Inputs> = data => {
    axios
    .post(`https://responsive-staging.ltservices2.ovh/api/gate/${data.username}.json`,
      {
        "login" : data.username.toString(), 
        "password": data.password.toString(),
        "validitySeconds" : "7776000"
      }, 
      {
        headers: {
        "Content-type": "multipart/form-data"
        }
      }
    )
    .then((response) => {
      console.log("login factory", response);
      localStorage.setItem('token', response.data.CONTENT.token)
      localStorage.setItem('puk', response.data.CONTENT.puk)
      const userInfo:any = {
       user: response.data.CONTENT.USER.login,
       uuid: response.data.CONTENT.USER.uuid
      }
      const logginAction = logIn(userInfo)
      dispatch(logginAction)
      setTokenExisted(localStorage.getItem('token'))
    })
    .catch((error) => {
        // console.log("login factory error", error.response.data.errors[0].message);
        dispatch(action)
        setTimeout(()=>dispatch(action2), 7000)
    })
  }; // your form submit function which will invoke after successful validation
  const dispatch = useDispatch()
  const action = showNoti()
  const action2 = hideNoti()


  useEffect(() => {
    console.log(errors)
    if (errors.username!==undefined)
    setRedBordeUserName(true)
    else
    setRedBordeUserName(false)

    if (errors.password!==undefined)
    setRedBordePassWord(true)
    else
    setRedBordePassWord(false)

  });


  if ( tokenExisted !== null){
      console.log(tokenExisted)
      return <Redirect to="/homePage/" />; 
       
  }
  return (
    <div className='container-fluid '> 
        <section className="login-section full-height"> 
          <a className="login-a-close"> 
            <i className="fa fa-times close-icon" aria-hidden="true"></i>
          </a>
          <form className='login-form' onSubmit={handleSubmit(onSubmit)}>
            <div className="login-form-head">
              <img className="login-image" src={logo} /> 
              <a className="login-a-close-2"> 
                <i className="fa fa-times close-icon-2" aria-hidden="true"></i>
              </a>
            </div>
            <div className="login-form-body"> 
              <div className="form-body-inner"> 
                <h1 className="login-title"> Se connecter à Mektoube </h1>
                <Noti content={"Identifiant ou mot de passe incorrect"} style={'noti-login'}/>  
                <LoginInputUserName register={register} isError={redBorderUserName}/>
                <LoginInputPassword register={register} isError={redBorderPassWord} />
              </div>
              <div className="login-forgetpassword"> Nous contacter ou Aide </div>
              <div className="form-body-actions"> 
                <button type="submit" className="login-button">  Me Connecter </button> 
                <div> 
                  <span className='login-span'> Vous n'avez pas de compte?  </span>
                  <span> 
                    <a href='/entityForm/' className="login-a"> Inscrivez-vous gratuitement </a>
                  </span>
                </div>
              </div>
            </div>
          </form>
        </section>
    </div>
  );
}
      
    