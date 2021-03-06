import React, {useEffect, useState, useCallback} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import "./style.css";
import {Header} from '../../Components/Header/index'
import {UserProfile} from '../../Components/userProfile/index'
import axios from 'axios';
import InfiniteScroll from "react-infinite-scroller";
// import InfiniteScroll from 'react-infinite-scroll-component';
import qs from "qs";

export default function HomPage2() {
  const data1 = (state: any) => state
  const isLogged = useSelector(data1)
  const [userProfile, setUserProfile] = useState([])
  // useEffect(() => {
  //   handleFetch(10);
  //   return () => {
  //     setUserProfile([]); // This worked for me
  //   }
  // }, []);

  function handleFetch(params:number) {
    console.log(params)
    axios
    .get(`/api/pool/.json?`,
      { params: {
        order: 'DEFAULT', 
        size: params, 
        start: 0,
        //@ts-ignore
        Timestamp: new Date().getTime()
      },
        headers: {
          'Content-Type': 'application/json',
          'x-asgard-puk': localStorage.getItem('puk'),
          'x-asgard-token': localStorage.getItem('token')
        },
      }
    )
    .then((response) => {
      setTimeout(() => {
        setUserProfile(response.data.CONTENT.USERS)
        //(posts.length-records)>10? setrecords(records + 10):setrecords(records+15);
      }, 2000);
     
    })
    .catch((error) => {
      console.log(error)
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
                  loadMore={() =>  handleFetch(userProfile.length+10)}
                  hasMore={true || false}
                  useWindow={true} 
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
      
    




// @ts-ignore
// const Timestamp =  new Date().getTime()
// fetch(`/api/pool/.json?&order=DEFAULT&size=${params}&start=0&Timestamp=${Timestamp}`, 
// {
//   method: "GET",
//   headers: new Headers(
//        //@ts-ignore
//     {
//     'Content-Type': 'application/json',
//     'x-asgard-puk': localStorage.getItem('puk'),
//     'x-asgard-token': localStorage.getItem('token')
//   })

// })
// .then((res) => res.json())
// .then((res) => {
//   setUserProfile(res.data.CONTENT.USERS)
// })
// .catch((err) => console.log(err));