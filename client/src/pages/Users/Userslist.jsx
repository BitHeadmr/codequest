import React from 'react'
import './Users.css'
import User from './User'
import {useSelector} from "react-redux"
const Userslist = () => {
    const users=useSelector((state)=>state.usersreducer)
    // console.log(users)
  return (
    <div className="user-list-container">
        {users.map((user)=>(
            <User user={user} key={user?._id}/>
        ))}
    </div>
  )
}

export default Userslist