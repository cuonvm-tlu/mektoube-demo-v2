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

import { error } from "console";

import { SignupItem }  from '../../../Components/signupItem/index';
import { useLocation } from 'react-router-dom';
import { Noti } from  '../../../Components/Noti/index';
import { addGeoId } from '../../../Actions/formData/formDataActions'

type Inputs = {
  city: string;
};

type FormData = {
  formdata: any
}

const schema = yup.object().shape({
    city: yup.string().required(),
});


export default function CityForm() {
  const { register, handleSubmit, watch, errors, setValue } = useForm<Inputs>({
    resolver: yupResolver(schema)
  });
  const location = useLocation();
  const [cities, setCities] = React.useState([]);
  const data1 = (state: FormData) => state.formdata
  const data2 = useSelector(data1)
  
  useEffect(() => {
    setValue("city", `${data2.geoname_id}`)
  }
)

  const history = useHistory()
  const onSubmit: SubmitHandler<Inputs> = data => {
    const action1 = addGeoId(data.city)
    dispatch(action1)
    let path = `/signup/`; 
    history.push(path);
  }; // your form submit function which will invoke after successful validation
  
  const dispatch = useDispatch()
  const action = showNoti()
  const action2 = hideNoti()

  useEffect(() => {
    // @ts-ignore
    fetch(`https://responsive-staging.ltservices2.ovh/api/static/atlas/${data2.country}/${data2.region}/cities.json`)
      .then(res => res.json())
      .then(
        (result) => {
            var data = result.CONTENT.ALL.cities
            setCities(data)
        },
        (error) => {
          console.log(error);
        }
      )
  }, [])

  useEffect(() => {
    if (errors.city!==undefined)
      dispatch(action)
      setTimeout(()=>dispatch(action2), 5000)
  });

  const onBackClick = () => {
    let path = `/regionForm/`; 
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
                        <svg width="15px" height="14px" viewBox="0 0 23 23" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="Responsive" stroke="none" strokeWidth="1" fill="#FFF" fillRule="evenodd"><g id="2b7-SearchFull-Departement" transform="translate(-178.000000, -96.000000)" fillRule="nonzero" fill="#FFF"><g id="Icone" transform="translate(152.000000, 71.000000)"><path d="M26,34.1981823 C26,32.9289313 27.0306689,31.9 28.2995572,31.9 L36.9297132,31.9 C37.2446739,31.9 37.5,31.6379375 37.5,31.3235779 L37.5,27.2976001 C37.5,26.0286706 38.5306689,25 39.7995572,25 L46.7004428,25 C47.9704532,25 49,26.0329442 49,27.3000147 L49,45.6999853 C49,46.9702484 47.9670558,48 46.6999853,48 L28.3000147,48 C27.0297516,48 26,46.9683809 26,45.7018177 L26,34.1981823 Z M28.3,45.7018177 C28.3,45.6990597 46.6999853,45.7 46.6999853,45.7 C46.6983966,45.7 46.7,27.3000147 46.7,27.3000147 C46.7,27.3015011 39.7995572,27.3 39.7995572,27.3 C39.7999248,27.3 39.8,31.3235779 39.8,31.3235779 C39.8,32.9016738 38.5216048,34.2 36.9297132,34.2 L28.2995572,34.2 C28.3000551,34.2 28.3,45.7018177 28.3,45.7018177 Z" id="Combined-Shape" transform="translate(37.500000, 36.500000) rotate(-270.000000) translate(-37.500000, -36.500000) "></path></g></g></g></svg>
                        </div>
                        <h4 className="entityForm-h4">Quelle est votre ville? </h4>
                    </div>
                    <div className="originForm-form-body"> 
                        {
                            cities.map(place => (
                             <SignupItem register={register} name='city' content={place['name']} value={place["id"]} key={place["id"]}/>
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
      
    