import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import "./style.css";
import {Header} from '../../Components/Header/index'
import {UserProfile} from '../../Components/userProfile/index'

export default function HomPage2() {
  const data1 = (state: any) => state
  const isLogged = useSelector(data1)
  console.log(isLogged)
  return (
    <div className='homepage-container-fluid'> 
        <div className="homepage-wrapper">
          <Header content="dsadas"/>
            <div className="homepage-main">
              <div className="homepage-image"> 
                  <div className="homepage-image-text"> 
                      <h1 className="homepage-image-h1" style={{fontSize: "42px"}}> Rencontres </h1>
                      <p style={{fontSize: "13px"}}> Découvrez les profils et croisez vos destins !</p>
                  </div>
              </div>
              <div className="homepage-main-body"> 
                <div className="homepage-main-body-infinite-scroll"> 
                    <ul className="homepage-userprofile"> 
                        <li className="homepage-userprofile-li"> 
                          <UserProfile avatar="/static/media/KhanhVy.453b0a6f.jpg" name="Khanh Vy" location="Hanoi" age="32 ans"/>
                        </li>
                        <li className="homepage-userprofile-li"> 
                          <UserProfile avatar="/static/media/KhanhVy.453b0a6f.jpg" name="Dam Thi Ngoc ANh" location="Lon don" age="12 ans"/>
                        </li>
                        <li className="homepage-userprofile-li"> 
                          <UserProfile avatar="/static/media/KhanhVy.453b0a6f.jpg" name="Duong Nguyen Thi" location="Paris de monte" age="40 ans"/>
                        </li>
                        <li className="homepage-userprofile-li"> 
                          <UserProfile avatar="/static/media/KhanhVy.453b0a6f.jpg" name="Nguyen Manh Cuong" location="Viet Nam" age="99 ans"/>
                        </li>
                        <li className="homepage-userprofile-li"> 
                          <UserProfile avatar="/static/media/KhanhVy.453b0a6f.jpg" name="Khanh Vy" location="Hanoi" age="32 ans"/>
                        </li>
                        <li className="homepage-userprofile-li"> 
                          <UserProfile avatar="/static/media/KhanhVy.453b0a6f.jpg" name="Vu Dung" location="Ho chi Minh" age="50 ans"/>
                        </li>
                        <li className="homepage-userprofile-li"> 
                          <UserProfile avatar="/static/media/KhanhVy.453b0a6f.jpg" name="Cuong Nguyen" location="Ha Noi" age="50 ans"/>
                        </li>
                        <li className="homepage-userprofile-li"> 
                          <UserProfile avatar="/static/media/KhanhVy.453b0a6f.jpg" name="Cuong Vu" location="Hai Duong" age="13 ans"/>
                        </li>
                        <li className="homepage-userprofile-li"> 
                          <UserProfile avatar="/static/media/KhanhVy.453b0a6f.jpg" name="Cuong Vu" location="Hai Duong" age="13 ans"/>
                        </li>
                    </ul>
                </div>
              </div>
            </div>
        </div>
    </div>
  );
}
      
    