import React, { useState } from 'react'
import Login from '../components/Logini'
import Signup from '../components/Signup'
import {uesState} from 'react'
function LoginPage() {
    const [com,setCom]=useState(true)
    
    const handleClick=()=>{
      setCom(!com)
    }
  return (
    <div>
       {com?<Login x={handleClick}/>:<Signup x={handleClick}/>}
    </div>
  )
}

export default LoginPage
