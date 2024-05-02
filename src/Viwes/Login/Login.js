import { useState } from "react"
import Navbar from "../../Components/Navbar/Navbar"
import { Navigate, useNavigate } from "react-router-dom"
import { sigin } from "../../Config/Firebase"


function Login (){

    const Navigate =useNavigate()

    const [email, setEmail] = useState()
    const [password, setpassword] = useState()
   

    

    const login = async ()=>{
        try{
           await  sigin({email, password})
            Navigate("/")
        }catch(error){
            console.log(error)
        }
    }

    return<div>
      
        <div className="faheem">
       <input onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" type="text" ></input>
       <input onChange={(e) => setpassword(e.target.value)} placeholder="Enter password" type="password"></input><br/>
       
       Don't have an account.<span onClick={()=>Navigate("/SignUp")}>Click here</span><br/>
       <button onClick={login}>Login</button>
       </div>
    </div>
}
export default Login;