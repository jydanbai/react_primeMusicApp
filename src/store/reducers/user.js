import {SAVE_USER_TOKEN} from '../actionTypes'

const _id=JSON.parse(localStorage.getItem('id'))
const _userName=JSON.parse(localStorage.getItem('userName'))
const _code=JSON.parse(localStorage.getItem('code'))
const initUser={
    id:_id,
    userName:_userName,
    code:_code
}

export default function user(state=initUser,action){
    
    switch(action.type){
     case SAVE_USER_TOKEN:
         const {id,userName,code}=action.data
         return {
             user:id,
             userName:userName,
             code:code
         }
         default:
            return state
    }
}

