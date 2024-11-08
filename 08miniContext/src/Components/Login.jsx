// how data is send will see in this component
import React , {useState,useContext} from 'react'
import UserContext from '../Context/UserContext'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  
  const {setUser} = useContext(UserContext) 


    const handleSubmit  = (e) => {
       e.preventDefault();
       setUser({username, password})
    }

// how we fetch values in Usercontext we take help of usecontext
//  IMP **** thing  we passed setuser in UserContext we 
//  setting in useContext which taking the context.


  return (
    <div>
       <h2>Login</h2>
       <input type="text" 
       value={username}
       onChange={(e)=> setUsername(e.target.value) }
       placeholder='username'/>
        {"   "}
       <input type="text" 
       value={password}
       onChange={(e) => setPassword(e.target.value) }
       placeholder='password' />
       {"  "}
       <button onClick={handleSubmit}>Submit</button>

    </div>
  )
}

export default Login
