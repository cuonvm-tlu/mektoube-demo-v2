import { useForm, SubmitHandler } from "react-hook-form";
import React, {useEffect, useState, useRef, useLayoutEffect} from 'react';
import 'font-awesome/css/font-awesome.min.css';
import "./style.css";

import { showNoti} from '../../../Actions//Noti/notiActions'
import { hideNoti} from '../../../Actions/Noti/notiActions'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import moment from 'moment';

import { addBirthday, addDay, addMonth, addYear } from '../../../Actions/formData/formDataActions'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom";
import { Noti } from  '../../../Components/Noti/index';
import ReactDOM from 'react-dom';

type FormData = {
  formdata: any
}

type Inputs = {
  day: string,
  month: string,
  year: string
};



export default function DobForm() {
  // const { register, handleSubmit, watch, errors } = useForm<Inputs>({
  //   resolver: yupResolver(schema)
  // });
  const { register, handleSubmit, watch, setValue } = useForm<Inputs>();
  const history = useHistory()
  const data1 = (state: FormData) => state.formdata
  const data2 = useSelector(data1)
  const [number1, setNumber1] = useState(`${data2.day}`)
  const [number2, setNumber2] = useState(`${data2.month}`)
  const [number3, setNumber3] = useState(`${data2.year}`)
  const [isErr, setIsErr] = useState(false)
  const firstUpdate = useRef(true)
  const input2 = useRef(document.createElement("input"))
  const input3 = useRef(document.createElement("input"))
  const onSubmit: SubmitHandler<Inputs> = data => {
    dispatch(hideNoti())
    const date = moment(`${data.year}-${data.month}-${data.day}`);
    if (isErr !== true && number1 !== '' && number2 !== '' && number3 !== '') {
      if (parseInt(`${data.year}`, 10) >= 2003 || parseInt( `${data.year}`, 10) <= 1900 || date.isValid() === false){
        dispatch(showNoti())
        setTimeout(()=>dispatch(action2), 5000)
      }
      else {
        const action1 = addBirthday(`${data.year}-${data.month}-${data.day}`);
        dispatch(addDay(data.day))
        dispatch(addMonth(data.month))
        dispatch(addYear(data.year))
        dispatch(action1)
        let path = `/originForm/`; 
        history.push(path);
      }
    }

  }; // your form submit function which will invoke after successful validation
  const dispatch = useDispatch()
  const action = showNoti()
  const action2 = hideNoti()


  const onBackClick = () => {
    let path = `/entityForm/`; 
    history.push(path);
  }


  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
    } else {
      if (number1 === '' || number2 === '' || number3 ==='')
        setIsErr(true)
      else
        setIsErr(false)
    }
  });

  function handleChange1(event: React.ChangeEvent<HTMLInputElement>) {
    const re = /^[0-9\b]+$/;
    if (event.target.value.length <= 2 && (event.target.value === '' || re.test(event.target.value))) {
      setNumber1( event.target.value );
    }
    if (event.target.value.length === 2) {
      input2.current.focus()
    }
  }

  function handleChange2(event: React.ChangeEvent<HTMLInputElement>) {
    const re = /^[0-9\b]+$/;
    if (event.target.value.length <= 2 && (event.target.value === '' || re.test(event.target.value))) {
      setNumber2( event.target.value );
    }
    if (event.target.value.length === 2) {
      input3.current.focus()
    }
  }

  function handleChange3(event: React.ChangeEvent<HTMLInputElement>) {
    const re = /^[0-9\b]+$/;
      if (event.target.value === '' || re.test(event.target.value)) {
        setNumber3(event.target.value)
      }
  }


  return (
    <div className='dobForm-container-fluid '> 
        <section  className="dobForm-section full-height">
            <div className="dobForm-inner-section"> 
              <Noti content={"Invalid dob"} style={'noti-signup'}/> 
                <form className='dobForm-form' onSubmit={handleSubmit(onSubmit)}>
                    <div className="dobForm-form-header"> 
                        <button  type="button" onClick={onBackClick} className="dobForm-linkback"> 
                            <ArrowBackIosIcon style={{ color: 'white', width: 18, height: 18}}/>
                         </button>
                        <div className="dobForm-form-header-icon">
                          
                          <svg width="19" height="17" viewBox="0 0 19 17" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="Responsive" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="2b-Search" transform="translate(-19.000000, -519.000000)" fill="#FFF"><g id="Recherche" transform="translate(0.000000, 213.000000)"><g id="Annive" transform="translate(17.000000, 300.000000)"><path d="M17.5480639,15.9710817 C17.2934162,16.1166467 16.9975075,16.2 16.6818182,16.2 C15.7278718,16.2 14.9545455,15.4388841 14.9545455,14.5 C14.9545455,14.4999142 14.9545455,14.4998284 14.9545455,14.4997426 C14.9545454,14.4998284 14.9545455,14.4999142 14.9545455,14.5 C14.9545455,15.4388841 14.1812191,16.2 13.2272727,16.2 C12.2733263,16.2 11.5,15.4388841 11.5,14.5 C11.5,14.4997783 11.5000001,14.4995566 11.5000004,14.4993347 C11.4999999,14.4995566 11.5,14.4997783 11.5,14.5 C11.5,15.4388841 10.7266737,16.2 9.77272727,16.2 C8.81878089,16.2 8.04545455,15.4388841 8.04545455,14.5 C8.04545455,14.4996005 8.04545493,14.4992006 8.0454557,14.4988003 C8.04545416,14.4992005 8.04545455,14.4996005 8.04545455,14.5 C8.04545455,15.4388841 7.2721282,16.2 6.31818182,16.2 C6.00357019,16.2 5.70860427,16.1172149 5.45454545,15.9725703 L5.45454545,17.9 L17.5470603,17.9 C17.547373,17.2074289 17.5477133,16.5336765 17.5480639,15.9710817 Z M6.31818182,12.8 L6.31818182,11.1079636 C6.31818182,10.6341234 6.70151962,10.25 7.18181818,10.25 C7.65879137,10.25 8.04545455,10.6400232 8.04545455,11.1079636 L8.04545455,12.8 L10.6363636,12.8 L10.6363636,11.1079636 C10.6363636,10.6341234 11.0197014,10.25 11.5,10.25 C11.9769732,10.25 12.3636364,10.6400232 12.3636364,11.1079636 L12.3636364,12.8 L14.9545455,12.8 L14.9545455,11.1079636 C14.9545455,10.6341234 15.3378833,10.25 15.8181818,10.25 C16.295155,10.25 16.6818182,10.6400232 16.6818182,11.1079636 L16.6818182,12.8 L17.5496956,12.8 C18.5012997,12.8 19.2727273,13.5583246 19.2727273,14.4957725 L19.2727273,21.3 L20.1590779,21.3 C20.6235064,21.3 21,21.6772851 21,22.15 C21,22.619442 20.6204678,23 20.1590779,23 L2.84092207,23 C2.37649364,23 2,22.6227149 2,22.15 C2,21.680558 2.3795322,21.3 2.84092207,21.3 L3.72727273,21.3 L3.72727273,14.4957725 C3.72727273,13.5592232 4.49817424,12.8 5.45030439,12.8 L6.31818182,12.8 Z M17.5463524,19.6 L5.45454545,19.6 L5.45454545,21.3 L17.5457343,21.3 C17.5458886,20.8482986 17.5461002,20.2520596 17.5463524,19.6000006 Z M15.8181818,6 C16.5336416,6 17.1136364,7.99259516 17.1136364,8.49333333 C17.1136364,8.99407151 16.5336416,9.4 15.8181818,9.4 C15.102722,9.4 14.5227273,8.99407151 14.5227273,8.49333333 C14.5227273,7.99259516 15.102722,6 15.8181818,6 Z M11.5,6 C12.2154598,6 12.7954545,7.99259516 12.7954545,8.49333333 C12.7954545,8.99407151 12.2154598,9.4 11.5,9.4 C10.7845402,9.4 10.2045455,8.99407151 10.2045455,8.49333333 C10.2045455,7.99259516 10.7845402,6 11.5,6 Z M7.18181818,6 C7.89727797,6 8.47727273,7.99259516 8.47727273,8.49333333 C8.47727273,8.99407151 7.89727797,9.4 7.18181818,9.4 C6.46635839,9.4 5.88636364,8.99407151 5.88636364,8.49333333 C5.88636364,7.99259516 6.46635839,6 7.18181818,6 Z" id="Combined-Shape"></path></g></g></g></g></svg>                        
                        </div>
                        <h4 className="entityForm-h4">Quelle est votre date de naissance ? </h4>
                    </div>
                    <div className="dobForm-form-body"> 
                        <div className="dobForm-field-date"> 
                          <div className='dobForm-inputgroup'> 
                              <div className="dobForm-div-input"> 
                                <input className='dobForm-input' name="day" ref={register}  placeholder="JJ" maxLength={2} type='text' value={number1} onChange={handleChange1}/> 
                              </div>
                              <span className="dobForm-date-seperator">/</span>
                              <div className="dobForm-div-input"> 
                                <input className='dobForm-input' name="month" ref={(e:any) => {register(e)
                                      input2.current = e // you can still assign to ref
                                    }} placeholder="MM" maxLength={2}  type='text'  value={number2}  onInput={handleChange2} /> 
                              </div> 
                              <span className="dobForm-date-seperator">/</span>
                              <div className="dobForm-div-input"> 
                       
                                <input className='dobForm-input'  name="year" ref={(e:any) => {register(e)
                                      input3.current = e // you can still assign to ref
                                    }}  placeholder="AAAA"  maxLength={4}  type='text' value={number3}  onInput={handleChange3} />    
                              </div>             
                          </div> 
                          { isErr ? <p className='error'>Le champ est vide</p> : <> </>}    
                        </div>
                    </div>
  
                    <div className="dobForm-form-questionwrap"> 
                      <button className='dobForm-button'> 
                        <i className="fa fa-check" aria-hidden="true"></i>
                      </button>
                    </div>
                </form>
            </div>
        </section>
    </div>
  )
}
      
    