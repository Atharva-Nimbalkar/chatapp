import axios from 'axios';
export const userRegister=(data)=>{
    return async ()=>{
        const config = {
            headers: {
                 'Content-Type':'multipart/form-data'
            }
       }
       try{
            const response = await axios.post('http://localhost:5000/api/messenger/user-register',data,config);
            console.log(response.data);
       } catch(error){
            console.log(error.response.data);
       }
    }
}