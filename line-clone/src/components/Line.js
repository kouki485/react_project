import React,{ useState } from 'react'
import SignOut from './SignOut'
import { db } from '../firebase'


function Line() {
    const [messages,setMessages] = useState();
  return (
    <div>
        <SignOut />
    </div>
  )
}

export default Line