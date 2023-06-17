/* eslint-disable no-unused-vars */
import React, { Component } from 'react'

export class UsersClass extends Component {
    constructor(props){
        super(props)
        this.state={
            users:[]
        }
 }

 componentDidMount(){
 fetch(" https://jsonplaceholder.typicode.com/users")
 .then((res)=>res.json())
 .then((data)=>{
    //console.log(data)
    this.setState({users:data})
 })
 }



  render() {
    return (
        <>
 <h1>USERS CLASS</h1>
 <div className='style-me' style={{backgroundColor:"blue"}}>
 {this.state.users.map((user,id)=>{
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
}

export default UsersClass