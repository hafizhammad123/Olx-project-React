

import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { ADDS } from "../Config/Firebase"


function Add(){
    const Navigate = useNavigate()
    const [add, setAdd] = useState('')
    const [mod, setMod] = useState('')
    const [Rs, setRs] = useState('')
    const [image, setImage] = useState('')
    
    async function products() {
        try {
            await ADDS({ add, mod, Rs, image })
            Navigate("/")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="form-container">
            <input className="input-field" onChange={(e) => setAdd(e.target.value)} required type="text" placeholder="Product Name" />
            <input className="input-field" onChange={(e) => setMod(e.target.value)} required type="text" placeholder="MODEL" />
            <input className="input-field" onChange={(e) => setRs(e.target.value)} required type="text" placeholder="Price" />
            <input className="file-input" onChange={(e) => setImage(e.target.files[0])} required type="file" />
            <button className="submit-button" onClick={products}>Submit</button>
        </div>
    )
}

export default Add;
