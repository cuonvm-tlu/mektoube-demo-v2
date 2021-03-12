import { useForm, SubmitHandler } from "react-hook-form";
import React, {useEffect, useState} from 'react';
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

  const onSubmit: SubmitHandler<Inputs> = data => {
    dispatch(hideNoti())
    const date = moment(`${data.year}-${data.month}-${data.day}`);
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

  }; // your form submit function which will invoke after successful validation
  const dispatch = useDispatch()
  const action = showNoti()
  const action2 = hideNoti()


  const onBackClick = () => {
    let path = `/entityForm/`; 
    history.push(path);
  }
  useEffect(() => {
    if (number1 === '' || number2 === '' || number3 ==='')
      setIsErr(true)
    else
      setIsErr(false)
  })

  function handleChange1(event: React.ChangeEvent<HTMLInputElement>) {
    const re = /^[0-9\b]+$/;
    if (event.target.value === '' || re.test(event.target.value)) {
      setNumber1(event.target.value)
    }
  }

  function handleChange2(event: React.ChangeEvent<HTMLInputElement>) {
    const re = /^[0-9\b]+$/;
      if (event.target.value === '' || re.test(event.target.value)) {
        setNumber2(event.target.value)
      }
  }

  function handleChange3(event: React.ChangeEvent<HTMLInputElement>) {
    const re = /^[0-9\b]+$/;
      if (event.target.value === '' || re.test(event.target.value)) {
        setNumber3(event.target.value)
      }
  }

  const onLogClick = () => {
    console.log(number1)
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
                          <svg width="28px" height="26px" viewBox="0 0 28 26" version="1.1" xmlns="http://www.w3.org/2000/svg"><desc>Created with Sketch.</desc><defs></defs><g id="Android" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="1c-Question-2" transform="translate(-175.000000, -63.000000)" fill="#FFFFFF"><g id="Header" transform="translate(18.000000, 31.000000)"><g id="Icone" transform="translate(134.000000, 10.000000)"><path d="M45.8758425,24.6 L45.1,24.6 C44.3820298,24.6 43.8,24.0179702 43.8,23.3 C43.8,22.5820298 44.3820298,22 45.1,22 L49,22 C49.7179702,22 50.3,22.5820298 50.3,23.3 L50.3,27.2 C50.3,27.9179702 49.7179702,28.5 49,28.5 C48.2820298,28.5 47.7,27.9179702 47.7,27.2 L47.7,26.4529688 L44.9744172,29.2036872 C45.8724162,30.4744553 46.4,32.0256157 46.4,33.7 C46.4,38.007821 42.907821,41.5 38.6,41.5 C37.1792801,41.5 35.8472761,41.1201623 34.7,40.4564989 C33.9104005,40.9132575 33.0333005,41.2355759 32.1,41.392154 L32.1,42.8 L33.3944554,42.8 C34.1154878,42.8 34.7,43.3770243 34.7,44.1 C34.7,44.8179702 34.1137323,45.4 33.3944554,45.4 L32.1,45.4 L32.1,46.6944554 C32.1,47.4154878 31.5229757,48 30.8,48 C30.0820298,48 29.5,47.4137323 29.5,46.6944554 L29.5,45.4 L28.2055446,45.4 C27.4845122,45.4 26.9,44.8229757 26.9,44.1 C26.9,43.3820298 27.4862677,42.8 28.2055446,42.8 L29.5,42.8 L29.5,41.392154 C25.8109727,40.7732525 23,37.5648952 23,33.7 C23,29.392179 26.492179,25.9 30.8,25.9 C32.2207199,25.9 33.5527239,26.2798377 34.7,26.9435011 C35.8472761,26.2798377 37.1792801,25.9 38.6,25.9 C40.2947442,25.9 41.8632496,26.4404923 43.1425444,27.3585049 L45.8758425,24.6 Z M32.5335616,28.7959706 C31.991347,28.6042966 31.4078534,28.5 30.8,28.5 C27.9281193,28.5 25.6,30.8281193 25.6,33.7 C25.6,36.5718807 27.9281193,38.9 30.8,38.9 C31.4078668,38.9 31.9913727,38.7956988 32.5335975,38.6040167 C31.4290876,37.2394074 30.8,35.5210441 30.8,33.7 C30.8,31.8781763 31.4297219,30.1598558 32.5335616,28.7959706 Z M34.6996834,30.2600696 C33.8740702,31.1947142 33.4,32.4071848 33.4,33.7 C33.4,34.9922913 33.8735126,36.2046579 34.6997149,37.1398947 C35.5089571,36.2231814 36,35.0189353 36,33.7 C36,32.3810476 35.5089444,31.1767874 34.6996834,30.2600696 Z M36.8659826,28.7961317 C37.9504201,30.1358887 38.6,31.8420856 38.6,33.7 C38.6,35.5579144 37.9504201,37.2641113 36.8659826,38.6038683 C37.4083261,38.795645 37.9919763,38.9 38.6,38.9 C41.4718807,38.9 43.8,36.5718807 43.8,33.7 C43.8,30.8281193 41.4718807,28.5 38.6,28.5 C37.9919763,28.5 37.4083261,28.604355 36.8659826,28.7961317 Z" id="Combined-Shape"></path></g></g></g></g></svg>
                        </div>
                        <h4 className="entityForm-h4">Quelle est votre date de naisance? </h4>
                    </div>
                    <div className="dobForm-form-body"> 
                        <div className="dobForm-field-date"> 
                          <div className='dobForm-inputgroup'> 
                              <div className="dobForm-div-input"> 
                                <input className='dobForm-input'  name="day" ref={register}  placeholder="JJ" maxLength={2} type='text' value={number1} onChange={handleChange1}/> 
                              </div>
                              <span className="dobForm-date-seperator">/</span>
                              <div className="dobForm-div-input"> 
                                <input className='dobForm-input' name="month" ref={register} placeholder="MM" maxLength={2}  type='text'  value={number2}  onInput={handleChange2} /> 
                              </div> 
                              <span className="dobForm-date-seperator">/</span>
                              <div className="dobForm-div-input"> 
                                <input className='dobForm-input'  name="year" ref={register}  placeholder="AAAA"  maxLength={4}  type='text' value={number3}  onInput={handleChange3} />    
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
      
    