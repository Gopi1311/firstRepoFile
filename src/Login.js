import React,{useState} from "react";
import './Login.css';
import { useNavigate } from "react-router-dom";

 function Login(){

    const navigate = useNavigate();

        const [username,setUsername]=useState("");
        const [password,setPassword]=useState("");

         const clickhandler=(e)=>{
           
           e.preventDefault();
            navigate('todo-list')

         }

    return(
        <div className="login-container" >
            <h2>Login</h2>
            <form onSubmit={clickhandler}>
                <div>
                    <input type="text" 
                    placeholder="Username"
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                    required/>
                </div>
                <div>
                    <input type='password'
                     placeholder="Password"
                     value={password}
                     onChange={(e)=>setPassword(e.target.value)}
                     required/>
                </div>
                <div>
                    <button type="submit" >Login</button>
                </div>
            </form>
        </div>
    )
 }
 export default Login