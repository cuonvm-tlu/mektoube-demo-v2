import { useForm, SubmitHandler } from "react-hook-form";
import React, {useEffect} from 'react';
import 'font-awesome/css/font-awesome.min.css';
import "./style.css";

import { showNoti, hideNoti} from '../../../Actions//Noti/notiActions'
import { addGender } from '../../../Actions/formData/formDataActions'
import { useSelector, useDispatch } from 'react-redux'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useHistory } from "react-router-dom";


type FormData = {
  formdata: any
}

type Inputs = {
  gender: number;
};

const schema = yup.object().shape({
  gender: yup.number().required(),
});


export default function EntityForm() {
  const { register, handleSubmit, watch, setValue ,errors } = useForm<Inputs>({
    resolver: yupResolver(schema)
  });

  const dispatch = useDispatch()
  // --------------------------Log store----------------------------- //
  const data1 = (state: FormData) => state.formdata
  const data2 = useSelector(data1)
  useEffect(() => {
      setValue("gender", `${data2.gender}`)
    }
  )
  // --------------------------Log store----------------------------- //
  const history = useHistory()
  const onSubmit: SubmitHandler<Inputs> = data => {
    const action1 = addGender(data.gender)
    dispatch(action1)
    let path = `/dobForm/`; 
    history.push(path);
  }; // your form submit function which will invoke after successful validation

  return (
    <div className='entityForm-container-fluid '> 
        <section  className="entityForm-section full-height">
            <div className="entityForm-inner-section"> 
                <form className='entityForm-form' onSubmit={handleSubmit(onSubmit)}>
                    <div className="entityForm-form-header"> 
                        <a href="/" className="entityForm-linkback"> 
                            <ArrowBackIosIcon style={{ color: 'white', width: 18, height: 18}}/>
                         </a>
                        <div className="entityForm-form-header-icon">
                          <svg width="19" height="17" viewBox="0 0 19 17" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="Responsive" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="2b-Search" transform="translate(-19.000000, -519.000000)" fill="#FFF"><g id="Recherche" transform="translate(0.000000, 213.000000)"><g id="Annive" transform="translate(17.000000, 300.000000)"><path d="M17.5480639,15.9710817 C17.2934162,16.1166467 16.9975075,16.2 16.6818182,16.2 C15.7278718,16.2 14.9545455,15.4388841 14.9545455,14.5 C14.9545455,14.4999142 14.9545455,14.4998284 14.9545455,14.4997426 C14.9545454,14.4998284 14.9545455,14.4999142 14.9545455,14.5 C14.9545455,15.4388841 14.1812191,16.2 13.2272727,16.2 C12.2733263,16.2 11.5,15.4388841 11.5,14.5 C11.5,14.4997783 11.5000001,14.4995566 11.5000004,14.4993347 C11.4999999,14.4995566 11.5,14.4997783 11.5,14.5 C11.5,15.4388841 10.7266737,16.2 9.77272727,16.2 C8.81878089,16.2 8.04545455,15.4388841 8.04545455,14.5 C8.04545455,14.4996005 8.04545493,14.4992006 8.0454557,14.4988003 C8.04545416,14.4992005 8.04545455,14.4996005 8.04545455,14.5 C8.04545455,15.4388841 7.2721282,16.2 6.31818182,16.2 C6.00357019,16.2 5.70860427,16.1172149 5.45454545,15.9725703 L5.45454545,17.9 L17.5470603,17.9 C17.547373,17.2074289 17.5477133,16.5336765 17.5480639,15.9710817 Z M6.31818182,12.8 L6.31818182,11.1079636 C6.31818182,10.6341234 6.70151962,10.25 7.18181818,10.25 C7.65879137,10.25 8.04545455,10.6400232 8.04545455,11.1079636 L8.04545455,12.8 L10.6363636,12.8 L10.6363636,11.1079636 C10.6363636,10.6341234 11.0197014,10.25 11.5,10.25 C11.9769732,10.25 12.3636364,10.6400232 12.3636364,11.1079636 L12.3636364,12.8 L14.9545455,12.8 L14.9545455,11.1079636 C14.9545455,10.6341234 15.3378833,10.25 15.8181818,10.25 C16.295155,10.25 16.6818182,10.6400232 16.6818182,11.1079636 L16.6818182,12.8 L17.5496956,12.8 C18.5012997,12.8 19.2727273,13.5583246 19.2727273,14.4957725 L19.2727273,21.3 L20.1590779,21.3 C20.6235064,21.3 21,21.6772851 21,22.15 C21,22.619442 20.6204678,23 20.1590779,23 L2.84092207,23 C2.37649364,23 2,22.6227149 2,22.15 C2,21.680558 2.3795322,21.3 2.84092207,21.3 L3.72727273,21.3 L3.72727273,14.4957725 C3.72727273,13.5592232 4.49817424,12.8 5.45030439,12.8 L6.31818182,12.8 Z M17.5463524,19.6 L5.45454545,19.6 L5.45454545,21.3 L17.5457343,21.3 C17.5458886,20.8482986 17.5461002,20.2520596 17.5463524,19.6000006 Z M15.8181818,6 C16.5336416,6 17.1136364,7.99259516 17.1136364,8.49333333 C17.1136364,8.99407151 16.5336416,9.4 15.8181818,9.4 C15.102722,9.4 14.5227273,8.99407151 14.5227273,8.49333333 C14.5227273,7.99259516 15.102722,6 15.8181818,6 Z M11.5,6 C12.2154598,6 12.7954545,7.99259516 12.7954545,8.49333333 C12.7954545,8.99407151 12.2154598,9.4 11.5,9.4 C10.7845402,9.4 10.2045455,8.99407151 10.2045455,8.49333333 C10.2045455,7.99259516 10.7845402,6 11.5,6 Z M7.18181818,6 C7.89727797,6 8.47727273,7.99259516 8.47727273,8.49333333 C8.47727273,8.99407151 7.89727797,9.4 7.18181818,9.4 C6.46635839,9.4 5.88636364,8.99407151 5.88636364,8.49333333 C5.88636364,7.99259516 6.46635839,6 7.18181818,6 Z" id="Combined-Shape"></path></g></g></g></g></svg>
                        </div>
                        <h4 className="entityForm-h4">Vous etes </h4>
                    </div>
                    <div className="entityForm-form-body"> 
                        <div className="entityForm-form-body-radio"> 
                            <label className="entityForm-label"> 
                              Un homme
                              <input className="entityForm-radio" type="radio" name="gender" value='1' ref={register}/> 
                            </label>
                            <label className="entityForm-label"> 
                              Unne femme      
                              <input className="entityForm-radio" type="radio" name="gender" value='2' ref={register}/>               
                            </label>
                        </div>
                        {errors.gender && <p className='error'>Le champ est vide</p>}
                    </div>
                    <div className="entityForm-form-questionwrap"> 
                      <button type="submit" className='entityForm-button' > 
                        <i className="fa fa-check" aria-hidden="true"></i>
                      </button>
                    </div>
                </form> 
            </div>
        </section>
    </div>
  );
}
      
    