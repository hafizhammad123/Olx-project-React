import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { Res } from "../../Config/Firebase"

function SignUp() {
    const Navigate = useNavigate()
    const [email, setEmail] = useState()
    const [password, setpassword] = useState()
    const [naam, setnaam] = useState()
    const [Age, setAge] = useState()
    const [date, setdate] = useState()

    const signup = async () => {
        try {
            await Res({ email, password, naam, Age,date })
            Navigate("/Login")
        } catch (error) {
            console.log(error)
        }
    }
    return <div className="TOP">
    <input className="custom-input" onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" type="email" ></input><br />
    <input className="custom-input" onChange={(e) => setpassword(e.target.value)} placeholder="Enter password" type="password"></input><br />
    <input className="custom-input" onChange={(e) => setnaam(e.target.value)} placeholder="enter full name" type="Text"></input><br />
    <input className="custom-input" onChange={(e) => setAge(e.target.value)} placeholder="Age" type="number"></input><br />
    <input className="custom-input" onChange={(e) => setdate(e.target.value)}  type="date"></input><br />
    
    have an account.<span onClick={() => Navigate("/Login")}>Click here</span><br />
    <button onClick={signup}>SignUp</button>
</div>
}

export default SignUp;