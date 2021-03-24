import React, {useEffect, useState} from 'react';
import 'font-awesome/css/font-awesome.min.css';
import "./style.css";



export const SignupItem: React.FC<{register:any, name:string, value:any, content: string}> = ({register, content ,name, value}) => {
    return (
    <div className="entityForm-form-body-radio" key={value}>
        <div className='entityForm-form-body-radio-inner'>  
            <label className="entityForm-label"> 
            {content}
                <input className="entityForm-radio" type="radio" name={name} value={value} ref={register}/> 
            </label>
        </div>
    </div>
    )
}



