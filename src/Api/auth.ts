import axios, {isCancel, AxiosError} from 'axios';
import { API_BASE_URL } from '../../env';



const baseURL = API_BASE_URL;
console.log('This is the base url',baseURL)

export const getUser = async () =>{

    try
    {
        console.log('bola',baseURL)
         axios.get(`${baseURL}/user`,{timeout:10000})
     .then(response => {
        console.log(response.data)
  
     })
     .catch(error =>{
        console.log(error)
       }
       )
    }catch(error){
        throw error;
    }
}



export const getUserById = async (id:string) =>{

    try
    {
        console.log('bola',baseURL)
         axios.get(`${baseURL}/user/${id}`,{timeout:10000})
     .then(response => {
        console.log(response.data)
  
     })
     .catch(error =>{
        console.log(error)
       }
       )
    }catch(error){
        throw error;
    }
}


export const loginUser = async ({email,password}) =>{
        
    try
    {
        console.log('bola',baseURL)
         axios.post(`${baseURL}/user`,{email:email, password:password})
     .then(response => {
        console.log(response.data)
        
        if (!loginUser) {
            console.log({message:'User does not exist'})
        }
        return response.data
  
     })
     .catch(error =>{
        console.log(error)
       }
       )
    }catch(error){
        throw error;
    }
}



