import React ,{useEffect}from 'react'
import {signOut, onAuthStateChanged} from 'firebase/auth'
import {auth} from '../firebase'
import { useNavigate } from 'react-router-dom'



function Homepage() {
    const navigate = useNavigate()
     

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (!user) {
                navigate('/')
            }
        })
    }, [])

    const handleSignout = () => {
        signOut(auth).then(() => {
            navigate('/')
        }).catch((error) => {
            alert(error.message)
        })
    }



  return (
    <div>
       <h1>Hello World</h1>
      <button onClick={handleSignout}>Logout</button>
    </div>
  )
}

export default Homepage
