import { useForm, SubmitHandler } from "react-hook-form";
import React, {useEffect, useLayoutEffect} from 'react';
import 'font-awesome/css/font-awesome.min.css';
import "./style.css";

import { showNoti} from '../../../Actions//Noti/notiActions'
import { hideNoti} from '../../../Actions/Noti/notiActions'
import { useDispatch, useSelector } from 'react-redux'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useHistory } from "react-router-dom";

import { error } from "console";

import { SignupItem }  from '../../../Components/signupItem/index';
import { useLocation } from 'react-router-dom';
import { Noti } from  '../../../Components/Noti/index';
import { addRegion } from '../../../Actions/formData/formDataActions'
import {addRegions} from '../../../Actions/location/locationActions';

type Inputs = {
  region: string;
};

type FormData = {
  formdata: any
}

type Location = {
  location: any
}

const schema = yup.object().shape({
    region: yup.string().required(),
});


export default function RegionForm() {
  const { register, handleSubmit, watch, errors, setValue } = useForm<Inputs>({
    resolver: yupResolver(schema)
  });
  const location = useLocation();
  const [regions, setRegions] = React.useState([]);
  const history = useHistory()
  
  const data1 = (state: FormData) => state.formdata
  const data2 = useSelector(data1)
  const location1 = (state: Location) => state.location
  const location2 = useSelector(location1)

  useLayoutEffect(() => {
    setRegions(location2.regions)
    // @ts-ignore
    fetch(`https://responsive-staging.ltservices2.ovh/api/static/atlas/${data2.country}/regions.json`)
      .then(res => res.json())
      .then(
        (result) => {
          const data = result.CONTENT.regions
          setRegions(data)
          dispatch(addRegions(data))
        },
        (error) => {
          console.log(error);
        }
      )
      
  }, [])

  useEffect(() => {
    setValue("region", `${data2.region}`)
    if (errors.region!==undefined){
      dispatch(action)
      setTimeout(()=>dispatch(action2), 5000)
    }
    }
  )

  const onSubmit: SubmitHandler<Inputs> = data => {
    dispatch(addRegion(data.region))
    history.push({
        pathname: '/cityForm/'
    });
  }; // your form submit function which will invoke after successful validation
  
  const dispatch = useDispatch()
  const action = showNoti()
  const action2 = hideNoti()

  const onBackClick = () => {
    let path = `/countryForm/`; 
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="13.476" height="13.771" viewBox="0 0 13.476 13.771"><g id="Pratiquant" transform="translate(-1.875 -1.205)"><path id="Fill_1" data-name="Fill 1" d="M-6.749,13.476A6.757,6.757,0,0,0,0,6.727,6.781,6.781,0,0,0-6.2,0l-.042,0a.476.476,0,0,0-.446.31A.485.485,0,0,0-6.53.866,4.309,4.309,0,0,1-4.82,4.316,4.343,4.343,0,0,1-9.159,8.654,4.309,4.309,0,0,1-12.61,6.945a.485.485,0,0,0-.384-.19.482.482,0,0,0-.172.032.486.486,0,0,0-.308.49A6.781,6.781,0,0,0-6.749,13.476Zm1.94-12.2h0A5.81,5.81,0,0,1-.964,6.727a5.791,5.791,0,0,1-5.785,5.784A5.81,5.81,0,0,1-12.2,8.667a5.263,5.263,0,0,0,3.037.952,5.309,5.309,0,0,0,5.3-5.3A5.258,5.258,0,0,0-4.809,1.28Z" transform="translate(15.35 1.5)" fill="#FFF"></path><path id="Star_7" data-name="Star 7" d="M3.795,4.736a.435.435,0,0,1-.2-.053L2.474,4.094l-.005,0h0l-1.115.591a.435.435,0,0,1-.2.053A.324.324,0,0,1,.9,4.621.391.391,0,0,1,.823,4.3l.213-1.246v0l-.9-.878a.374.374,0,0,1-.115-.383.374.374,0,0,1,.318-.242l1.25-.182h0L2.145.228A.373.373,0,0,1,2.473,0,.373.373,0,0,1,2.8.228L3.36,1.36l1.251.183a.374.374,0,0,1,.318.241.374.374,0,0,1-.115.383L3.91,3.05,4.123,4.3a.391.391,0,0,1-.075.325A.324.324,0,0,1,3.795,4.736ZM2.473,3.606a.479.479,0,0,1,.223.052l.9.475L3.425,3.127A.506.506,0,0,1,3.563,2.7l.728-.71L3.285,1.846a.51.51,0,0,1-.362-.262L2.473.67l-.451.914a.51.51,0,0,1-.361.262L.653,1.993l.729.711a.5.5,0,0,1,.138.424l-.172,1,.9-.474A.479.479,0,0,1,2.473,3.606Z" transform="translate(2.036 3.816) rotate(-30)" fill="#FFF" stroke="#FFF" strokeMiterlimit="10" strokeWidth="0.2"></path></g></svg>
                        </div>
                        <h4 className="entityForm-h4">Quelle est votre region? </h4>
                    </div>
                    <div className="originForm-form-body"> 
                        {
                            regions.map(place => (
                             <SignupItem register={register} name='region' content={place['name']} value={place["id"]} key={place["id"]}/>
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
      
    