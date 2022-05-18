import React,{useEffect,useState} from 'react'
import { getProfile, jwt } from '../../services/service'
import "../../index.css"
export default function Profile() {
  const [user, setUser] = useState(null)
    useEffect(() => {
      getProfile(sessionStorage.getItem("_token")).then((res) => {
      setUser(res.data)
    })
      
    }, [])
    
  return (
    <>
    {user &&<div className='profileLayout'> <div>
    <h1>userId: {user.userId}</h1>
    <h1>username: {user.username}</h1>
    <h1>"description": {user.description}</h1>
    </div>
    <div>
    <img src={user.img}/>
    </div>
    </div>}
    </>
    
    
  )
}
