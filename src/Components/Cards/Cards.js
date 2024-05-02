import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getADS } from "../../Config/Firebase";



function Card() {
    const Navigate= useNavigate()

const [product, setproduct] = useState ([])

 useEffect(function(){

getproducts()

 },[])   

async function getproducts (){
const ads= await getADS()
setproduct(ads)
}

    return <div   className="mar">

    {product.map(function(item){

    const {Model, Price, imaurl,Product,id} = item

        return<div onClick={()=> Navigate(`/Details/${id}`)}  className="card">
            <div className="image">
                <img src={imaurl} alt="" />
            </div>
            <div className="detai">
                <h2 className="text">Rs:{Price} <i class="fa-regular fa-heart"></i></h2>

                <p className="textDES">{Product}</p>

            </div>
        </div>
    })}    



    </div>
}
export default Card;