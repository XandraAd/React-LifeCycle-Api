/* eslint-disable no-unused-vars */
import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const UsersFunction = () => {
    const[users,setUsers]=useState([])


const data =async() => {
    try {
    let getData=await axios("https://jsonplaceholder.typicode.com/users")
       // console.log(getData.data)
       setUsers(getData.data)
        
    } catch (error) {
        console.log(error)
        
    }
}

useEffect(() => {
  data()
  }, []);

return (
     <>
        <h1>USERS FUNCTION</h1>
     <div className='style-me' style={{backgroundColor:"gold"}}>
     {users.map((user,id)=>{
        return(
            <div key={id}>
            <h3>Name:{user.name}</h3>
            <h3>User Name:{user.username}</h3>
            <h3>Email:{user.email}</h3>
            <hr />
            </div>
        )
      })}
     </div>
         
         </>
      
   
  )
}

export default UsersFunction