import Card from "../Cards/Cards";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../Config/Firebase";
import { sigout } from "../../Config/Firebase";

export function Navbar() {

    const [isOpen, setIsOpen] = useState(false); 

   
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

    async function logout() {
        sigout()
    }

    const [user, setuser] = useState(null)
    useEffect(function () {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setuser(user)


                // ...
            } else {

                setuser(null)
            }
        });

    }, [])



    const Navigate = useNavigate()

    return <div>
        <div className="main-nav">

            <img className="olxImg1st" src="https://logos-world.net/wp-content/uploads/2022/04/OLX-Logo-700x394.png" width="2.5%" alt="" />

            <div>
                <per className="carImg" ><i class="fa-solid fa-car" />  Motors </per>

                <per className="carImg1st"><i class="fa-solid fa-building" /> PROPERTY </per>
            </div>
            <img className="olxLogo" src="https://logos-world.net/wp-content/uploads/2022/04/OLX-Symbol-700x394.png" width="5%" alt=""></img>

            <select class="inpu form-select" aria-label="Default select example">

                <option selected>Pakistan</option>
                <option value="1">Azad Kashmir, Pakistan</option>
                <option value="2">Muzaffarabad, Azad Kashmir</option>
                <option value="3">Alfalah Town, Lahore</option>
            </select>

            <input className="inpu2Nd" placeholder="Find Cars, Mobile Phones and More.." type="text" name="" id=""></input>

            <span className="daba"><i class="fa-solid fa-magnifying-glass"></i></span>



            {user ? <div>

               

                <img
                    className="hello"
                    src="https://www.olx.com.pk/assets/iconProfilePicture.7975761176487dc62e25536d9a36a61d.png"
                    width={50}
                    onClick={toggleDropdown}
                    alt="Dropdown Trigger"
                />
                <h4 className="email">Wellcome: {user.email}</h4>
                <span className="sell" onClick={() => Navigate("/Add")}><b>+</b> SELL</span>
             
                {isOpen && (
                 
                    <div className="drop-Down">
                       <button className="btt" onClick={logout}>Logout</button>
                      
                    </div>
                    
                )}
            </div>

         
        :
        (
            <>
        <h3 className="haedLogin" onClick={() => Navigate("/Login")}>Login</h3>
        <span className="sel1" onClick={() => Navigate("/Add")}><b>+</b> SELL</span>
        </>
        )
        }

        




    </div>
    </div >
}
export default Navbar;