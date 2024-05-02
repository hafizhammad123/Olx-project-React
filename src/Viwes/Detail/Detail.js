import Navbar from "../../Components/Navbar/Navbar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../Config/Firebase";


function Details() {
    const { adId } = useParams()
    const [main, setMain] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const docRef = doc(db, "ADD", adId);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setMain(docSnap.data());
                   
                } else {
                    console.log("No such document!");
                }
            } catch (error) {
                console.error("Error fetching document:", error);
            }
        };

        fetchData();
    }, [adId]);
   console.log(main)

    
    const { Product, Price, Model, imaurl } = main;


    return (
        <div className="vvvvw">
            {/* ... (existing code) */}
            
            <div className="detailMain">
              <img src={imaurl}  alt =''/>
              <h2 className="detailnested">Rs {Price}</h2>
              <h3 className="detailnested">{Product}</h3>
              <h4 className="detailnested">{Model}</h4>
              
            </div>
            <div className="side">
            <img src="https://github.com/hafizhammad123/immggg/blob/main/may%20self.png?raw=true" />
            </div>
            <div className="mar">
                 
      <img src="https://github.com/hafizhammad123/immggg/blob/main/hello.png?raw=true" />

            </div>
        </div>
    );
}

export default Details;