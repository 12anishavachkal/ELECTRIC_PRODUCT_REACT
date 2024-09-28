import { useState } from "react"

const Cards=({id,name,price,info,image,remove})=>{
    const [read,setRead]=useState(false)
    const des = read ? info : info.substring(0,100)+'...'
    return(
        <div>
            <section id="Card">
                <img src={image} alt="tours" />
                <div>
                <h4>{name} </h4>
                <p> {price} </p>
                <p>{des} {read? <span onClick={()=>{setRead(false) }} style={{cursor:'pointer',color:'grey'}}>read less</span> : <span onClick={()=>{setRead(true)}} style={{cursor:'pointer',color:'grey'}} >read more</span>}   </p>

                </div>
                <button onClick={()=>{remove(id)}}>Delete</button>
                
                
            </section>
        </div>
    )
}
export default Cards