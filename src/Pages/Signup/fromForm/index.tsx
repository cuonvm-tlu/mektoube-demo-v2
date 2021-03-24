import { useForm, SubmitHandler } from "react-hook-form";
import React, {useEffect} from 'react';
import 'font-awesome/css/font-awesome.min.css';
import "./style.css";

import { useSelector, useDispatch } from 'react-redux'
import * as yup from "yup";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useHistory } from "react-router-dom";
import {addCountries} from '../../../Actions/location/locationActions';


type Inputs = {
  origin: number;
};



export default function FromForm() {
  const { register, handleSubmit, watch, errors } = useForm<Inputs>();

  const history = useHistory()
  const dispatch = useDispatch()
  const onSubmit: SubmitHandler<Inputs> = data => {
    let path = `/countryForm/`; 
    history.push(path);
  }; // your form submit function which will invoke after successful validation

  const data1 = (state: FormData) => state
  const data2 = useSelector(data1)
 
  const onBackClick = () => {
    let path = `/originForm/`; 
    history.push(path);
  }

  const onRedirectClick = () => {
    let path = `/countryForm/`; 
    history.push(path);
  }


  return (
    <div className='originForm-container-fluid '> 
        <section  className="originForm-section full-height">
            <div className="originForm-inner-section"> 
                <form className='originForm-form' onSubmit={handleSubmit(onSubmit)}>
                    <div className="originForm-form-header"> 
                        <button type="button" onClick={onBackClick} className="originForm-linkback"> 
                            <ArrowBackIosIcon style={{ color: 'white', width: 18, height: 18}}/>
                         </button>
                        <div className="originForm-form-header-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="15" viewBox="0 0 12 15"><path id="Combined_Shape" data-name="Combined Shape" d="M6,15c-.588,0-2.088-1.213-3.344-2.7A9.851,9.851,0,0,1,0,6,6,6,0,1,1,12,6a9.85,9.85,0,0,1-2.655,6.3C8.087,13.787,6.587,15,6,15ZM6,1.5A4.505,4.505,0,0,0,1.5,6a8.531,8.531,0,0,0,2.3,5.329,13.478,13.478,0,0,0,1.691,1.687c.212.175.49.378.507.39l.013-.01c.269-.2.417-.317.494-.38A13.532,13.532,0,0,0,8.2,11.329,8.527,8.527,0,0,0,10.5,6,4.505,4.505,0,0,0,6,1.5ZM6,8.25A2.25,2.25,0,1,1,8.25,6,2.253,2.253,0,0,1,6,8.25Zm0-3A.75.75,0,1,0,6.75,6,.751.751,0,0,0,6,5.25Z" fill="#FFF"></path></svg>
                        </div>
                        <h4 className="entityForm-h4">Ou habitez-vous ? </h4>
                    </div>
                    <div className="originForm-form-body"> 
                        <div className="fromForm-field-chosen"> 
                            <div className="fromForm-field-chosen-main" onClick={onRedirectClick}> Ma localisation </div>
                            <small className="fromForm-field-chosen-option"> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="15" viewBox="0 0 12 15"><path id="Combined_Shape" data-name="Combined Shape" d="M6,15c-.588,0-2.088-1.213-3.344-2.7A9.851,9.851,0,0,1,0,6,6,6,0,1,1,12,6a9.85,9.85,0,0,1-2.655,6.3C8.087,13.787,6.587,15,6,15ZM6,1.5A4.505,4.505,0,0,0,1.5,6a8.531,8.531,0,0,0,2.3,5.329,13.478,13.478,0,0,0,1.691,1.687c.212.175.49.378.507.39l.013-.01c.269-.2.417-.317.494-.38A13.532,13.532,0,0,0,8.2,11.329,8.527,8.527,0,0,0,10.5,6,4.505,4.505,0,0,0,6,1.5ZM6,8.25A2.25,2.25,0,1,1,8.25,6,2.253,2.253,0,0,1,6,8.25Zm0-3A.75.75,0,1,0,6.75,6,.751.751,0,0,0,6,5.25Z" fill="#FFF"></path></svg>
                                  Me geolocaliser ?
                            </small>
                        </div>

                    </div>
                    <div className="originForm-form-questionwrap"> 
                      <button type="submit" className='originForm-button' > 
                        <i className="fa fa-check" aria-hidden="true"></i>
                      </button>
                    </div>
                </form> 
            </div>
        </section>
    </div>
  );
}
      
    