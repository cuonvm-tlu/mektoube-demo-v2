import React, {useEffect, useState, useLayoutEffect} from 'react';
import "./style.css";
import 'font-awesome/css/font-awesome.min.css';
import axios from 'axios';

export const UserProfile: React.FC<{avatar:string, name:string, location: string, age: string, origin: number, online: any}> = ({avatar, name, location, age, origin, online}) => {
  const [isAvatarErr, setIsAvatarErr] = useState(false)

  return (
    <a className="user-profile">
        <div className="profile-avatar"> 
            {
              avatar === null ?
            <img className="avatar" src='https://responsive-staging.ltservices2.ovh/images/svg/avatar-woman-new.svg'/> 
            : isAvatarErr === false   ?
            <img className="avatar" src={avatar}/> 
            :
            <img className="avatar" src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC'/>
            }
            <div className="profile-flag">
              {
              origin === 1 ?
              <img className='profile-flag-img'  src='https://responsive-staging.ltservices2.ovh/images/svg/Tunisia.svg'  /> 
              : origin === 2 ?
              <img className='profile-flag-img'  src='https://responsive-staging.ltservices2.ovh/images/svg/Morocco-36.svg'  /> 
              : origin === 3 ?
              <img className='profile-flag-img'  src='https://responsive-staging.ltservices2.ovh/images/flags/algerie@2x.png'  /> 
              : origin === 4 ?
              <img className='profile-flag-img'  src='https://responsive-staging.ltservices2.ovh/images/flags/world@2x.png'  /> 
              : 
              <img className='profile-flag-img'  src='https://responsive-staging.ltservices2.ovh/images/flags/world@2x.png'  /> 
              } 
            </div>
            <div className="profile-status"> 
              {
              online==='0' ?
              <> </>
              : online === 1 ?
              <div className="profile-status-away">  </div> 
              :
              <div className="profile-status-online">  </div> 
              }
             
            </div>
        </div>
        <div className="profile-content"> 
              <h5 className="user-profile-h5"> {name} </h5>
              <p className="user-profile-p"> 
                <span className='user-profile-span-1'> {age} ans </span>
                <span className="user-profile-seperator"> | </span>
                <svg width="14" height="14" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><title>32DA542B-9870-428D-AEA8-5D4D1C85784D</title><g id="Discovery-&amp;-Avatar" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="[Desktop]-Discovery-Man" transform="translate(-989.000000, -551.000000)"><g id="Group-9" transform="translate(425.000000, 335.000000)"><g id="Group-7" transform="translate(500.000000, 0.000000)"><g id="Group-4" transform="translate(16.000000, 214.000000)"><g id="map" transform="translate(48.000000, 2.000000)"><rect id="Base" x="0" y="0" width="12" height="12"></rect><path d="M3.65,1.68 C4.89399921,0.85471726 6.47978713,0.742638304 7.82749733,1.38474643 C9.17520753,2.02685456 10.0872033,3.32898697 10.23,4.815 C10.3540549,6.08033611 9.902385,7.33436257 9,8.23 L9,8.23 L6.36,10.885 C6.2661167,10.9796563 6.13831877,11.0328992 6.005,11.0328992 C5.87168123,11.0328992 5.7438833,10.9796563 5.65,10.885 L5.65,10.885 L3,8.23 C2.097615,7.33436257 1.64594515,6.08033611 1.77,4.815 C1.8964458,3.54148291 2.58614598,2.39137117 3.65,1.68 Z M6,3.75 C5.17157288,3.75 4.5,4.42157288 4.5,5.25 C4.5,6.07842712 5.17157288,6.75 6,6.75 C6.82842712,6.75 7.5,6.07842712 7.5,5.25 C7.49816684,4.42233338 6.82766662,3.75183316 6,3.75 Z" id="Shape" fill="#989CA0" fillRule="nonzero"></path></g></g></g></g></g></g></svg>
                <span className='user-profile-span-1'> {location}  </span>
              </p>
        </div>
    </a> 
  );
}

//

