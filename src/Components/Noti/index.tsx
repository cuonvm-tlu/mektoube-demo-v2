import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { hideNoti } from '../../Actions/Noti/notiActions'
import "./style.css";
type noti = {
  noti: any
}

export const Noti: React.FC<{content:string, style:string}> = ({content, style}) => {
  const selectIsOn = (state: noti) => state.noti
  const displayState = useSelector(selectIsOn)
  var isShowed = displayState.isShowed
  const dispatch = useDispatch()
  const action = hideNoti()
  if (isShowed) {
    return (
        <button className={style} onClick={()=> dispatch(action)} > {content} </button> 
    );
  }
  return <> </>;
}



