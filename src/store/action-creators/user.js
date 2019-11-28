import {reqLogin} from '../../api'
import {message} from 'antd'
import {SAVE_USER_TOKEN} from '../actionTypes'

const saveUserToken = (id,userName,code) => ({type: SAVE_USER_TOKEN, data: {id,userName,code}})
export function loginAsync(email,password){
    
    return async (dispatch)=>{
        
        const result =await reqLogin(email,password)
        const code=result.data.code
        
             localStorage.setItem('code',JSON.stringify(code))
             
        if(result.data.code===200){
            const {id,userName}=result.data.account
            localStorage.setItem('id',JSON.stringify(id))
            localStorage.setItem('userName',JSON.stringify(userName))
            
            dispatch(saveUserToken(id,userName,code))
            message.success('登陆成功')

        }else{
            message.error(result.data.msg)
        }
    }
}