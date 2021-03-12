import { SHOW_NOTI, HIDE_NOTI, NotiActionTypes } from './notiTypes'


export function showNoti(): NotiActionTypes {
  return {
    type: SHOW_NOTI
  }
}

export function hideNoti(): NotiActionTypes {
  return {
    type: HIDE_NOTI
  }
}