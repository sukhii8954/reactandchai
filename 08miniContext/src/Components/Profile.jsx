import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'

const Profile = () => {
    //  taking the value in this component
    const {user} = useContext(UserContext)
    
    // conditional return

    // by default user should be null to display first return as default message on screen

    if(!user) return <div>Please login</div>
     return <div>Welcome {user.username}</div>
}

export default Profile
