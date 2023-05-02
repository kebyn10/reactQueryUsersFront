import axios from 'axios'
const URL='http://localhost:3000'


export const getUsers=async()=>{
   const res= await axios.get(`${URL}/users`)
  return res.data
}



export const getUser=async(param)=>{
  const res=  await axios.get(`${URL}/users/${param}`)
  return res.data
}


export const createUser=async(user)=>{
   const res= await axios.post(`${URL}/users`,user)
   return res.data
}


export const deleteUser=async(param)=>{
  const res=  await axios.delete(`${URL}/users/${param}`)
  return res.data
}


export const updateUser=async(param,userUpdate)=>{
  const res=  await axios.put(`${URL}/users/${param}`,userUpdate)
  return res.data 
}
