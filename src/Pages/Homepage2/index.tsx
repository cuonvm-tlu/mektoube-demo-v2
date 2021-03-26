import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import "./style.css";
import {Header} from '../../Components/Header/index'
import {UserProfile} from '../../Components/userProfile/index'
import axios from 'axios';
import InfiniteScroll from "react-infinite-scroller";
import qs from "qs";

export default function HomPage2() {
  const data1 = (state: any) => state
  const isLogged = useSelector(data1)
  const [userProfile, setUserProfile] = useState([])
  console.log(isLogged)
  console.log(localStorage.getItem('token'))
  console.log(localStorage.getItem('puk'))
  //`https://apiv2.ltservices2.ovh/pool/.json?order=DEFAULT&size=20&start=0`
  // useEffect(()=>{
  //   axios
  //   .get(`https://apiv2.ltservices2.ovh/pool/.json?`,
  //     {
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'x-asgard-puk': localStorage.getItem('puk'),
  //         'x-asgard-token': localStorage.getItem('token')
  //       },
  //       params: {
  //         order: 'DEFAULT', 
  //         size: 40, 
  //         start: 0
  //       }
  //     }
  //   )
  //   .then((response) => {
  //     console.log(response.data.CONTENT.USERS)
  //     setUserProfile(response.data.CONTENT.USERS)
  //   })
  //   .catch((error) => {

  //   })
  // }, [])

  useEffect(() => {
    handleFetch(10);
  }, []);

  function handleFetch(params:number) {
    const strParams = qs.stringify(params);
    let url = "https://jsonplaceholder.typicode.com/comments";

    if (strParams) {
      url = url + "/?" + strParams;
    }

    axios
    .get(`https://apiv2.ltservices2.ovh/pool/.json?`,
      {
        headers: {
          'Content-Type': 'application/json',
          'x-asgard-puk': localStorage.getItem('puk'),
          'x-asgard-token': localStorage.getItem('token')
        },
        params: {
          order: 'DEFAULT', 
          size: params, 
          start: 0
        }
      }
    )
    .then((response) => {
      setUserProfile(response.data.CONTENT.USERS)
    })
    .catch((error) => {

    })
  }

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
                <InfiniteScroll
                  pageStart={0}
                  loadMore={() => handleFetch(userProfile.length+10)}
                  hasMore={true || false}
                  useWindow={false}
                  loader={
                    <div key="loading" className="loader">
                      Loading ...
                    </div>
                  }
                >
                    <ul className="homepage-userprofile"> 
                     {
                        userProfile.map((user:any) => (
                          <li key={user["uuid"]} className="homepage-userprofile-li"> 
                              <UserProfile avatar={user["thumbnail"]} name={user['name']} location={user['city']} age={user['age']} origin={user['origin']} online={user['online']}/>
                           </li>
                            ))
                      }
                    </ul>
                  </InfiniteScroll>
                </div>
              </div>
            </div>
        </div>
    </div>
  );
}
      
    