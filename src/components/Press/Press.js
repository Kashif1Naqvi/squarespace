import React from 'react'
import {pressObj} from './pressObj'
import {Link} from 'react-router-dom'
const Press =()=> {
    return (
        <div className="container" > 
            {
                pressObj.map((press,index)=>{
                    return(
                        <div key={index} className="row" >
                            <div className=" container col text-center col-sm-9 col-md-9 col-lg-9 col-xl-9  mt-3 pt-3  ">
                                <h1  className="mt-2 mb-4 pt-2 mb-4 text-dark font-weight-bold " >{press.comma}</h1>
                                <h4 className="mb-2 text-center " style={{color:"red", fontSize:"15px" }} >{press.date}</h4>
                                <p className="text-dark text-center mt-2 mb-2 pt-2 mt-2   font-weight-bold   " style={{fontSize:"35px",color:"grey"}} >{press.description}</p>
                                <div className="mb-4 mb-4 pb-4 mb-4 text-center" >{press.quote}<Link className="mt-2 mb-2 pt-2 pb-2"  style={{color:"red"}} to={press.link}>Read Full Article</Link></div>
                                <hr/>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Press