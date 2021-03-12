import { useForm, SubmitHandler } from "react-hook-form";
import React, {useEffect} from 'react';
import 'font-awesome/css/font-awesome.min.css';
import "./style.css";

import { showNoti} from '../../../Actions//Noti/notiActions'
import { hideNoti} from '../../../Actions/Noti/notiActions'
import { useDispatch, useSelector } from 'react-redux'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useHistory } from "react-router-dom";

import { SignupItem }  from '../../../Components/signupItem/index';
import { Noti } from  '../../../Components/Noti/index';
import {addCountry} from '../../../Actions/formData/formDataActions'

type Inputs = {
  country: string;
};

type FormData = {
  formdata: any
}
const schema = yup.object().shape({
    country: yup.string().required(),
});


export default function CountryForm() {
  const { register, handleSubmit, watch, errors, setValue } = useForm<Inputs>({
    resolver: yupResolver(schema)
  });
  const [countries, setCountries] = React.useState([]);

  const data1 = (state: FormData) => state.formdata
  const data2 = useSelector(data1)
  useEffect(() => {
      setValue("country", `${data2.country}`)
    }
  )

  const history = useHistory()
  const onSubmit: SubmitHandler<Inputs> = data => {
    let path = `/regionForm/`; 
    dispatch(addCountry(data.country))
    history.push({
        pathname: '/regionForm/'
    });
  }; // your form submit function which will invoke after successful validation
  
  const dispatch = useDispatch()
  const action = showNoti()
  const action2 = hideNoti()

  useEffect(() => {
    fetch("https://responsive-staging.ltservices2.ovh/api/static/atlas/countries.json")
      .then(res => res.json())
      .then(
        (result) => {
          // setCountry(data.map((a:any) => a.name));
          var data = result.CONTENT.ALL.countries
          setCountries(data)
        },
        (error) => {
          console.log(error);
        }
      )
  }, [])

  useEffect(() => {
    if (errors.country!==undefined){
      dispatch(action)
      setTimeout(()=>dispatch(action2), 5000)
    }
  });

  
  const onBackClick = () => {
    let path = `/fromForm/`; 
    history.push(path);
  }

  return (
    <div className='originForm-container-fluid '> 
        <section  className="originForm-section full-height">
            <div className="originForm-inner-section"> 
              <Noti content={"Le champ est vide"} style={'noti-signup'}/> 
                <form className='originForm-form' onSubmit={handleSubmit(onSubmit)}>
                    <div className="originForm-form-header"> 
                        <button type="button" onClick={onBackClick} className="originForm-linkback"> 
                            <ArrowBackIosIcon style={{ color: 'white', width: 18, height: 18}}/>
                         </button>
                        <div className="originForm-form-header-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15.399" height="14" viewBox="0 0 15.399 14"><path id="Combined_Shape" data-name="Combined Shape" d="M14.477,13.964,10.5,12.632,5.07,13.979A.721.721,0,0,1,4.9,14a.687.687,0,0,1-.221-.036l-4.2-1.4A.7.7,0,0,1,0,11.9V.7A.7.7,0,0,1,.922.037L4.905,1.373,10.329.022A.719.719,0,0,1,10.5,0a.693.693,0,0,1,.222.036l4.2,1.4A.7.7,0,0,1,15.4,2.1V13.3a.7.7,0,0,1-.922.664ZM5.6,2.648V12.4l4.2-1.05V1.606Zm8.406,9.683L14,2.608l-2.8-.941v9.728ZM1.4,11.4l2.8.93V2.605L1.4,1.671Z" transform="translate(0 0)" fill="#FFF"></path></svg>
                        </div>
                        <h4 className="entityForm-h4">Quel est votre pays? </h4>
                        <small className="originForm-small"> Un seul choix possible </small> 
                    </div>
                    <div className="originForm-form-body"> 
                        {
                            countries.map(place => (
                             <SignupItem register={register} name='country' content={place['name']} value={place["id"]} key={place["id"]}/>
                            ))
                        }
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
      
    