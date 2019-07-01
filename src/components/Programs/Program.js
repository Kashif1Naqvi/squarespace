import React from 'react'
import {programObj} from './programObj'
const  Program =()=> {
    return (
        <div className="container bg-light" >
            <h1 className="mt-3 mb-3 pb-5 pt-5 font-weight-bold text-dark " >Our Programs</h1>
            {
                programObj.map((program,index)=>{
                    return(
                            <div key={index} className="row">
                                <div className="col col-sm-8 col-md-8 col-lg-8 col-xl-8 ">
                                    <h4 className="mb-4" style={{color:"red", fontSize:"15px" }} >{program.title}</h4>
                                    <p className="text-dark">{program.description1}</p>
                                    <p className="mb-5 text-dark">{program.description2}</p>
                                </div>
                                <div className="col col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                    <h4 style={{color:"red", fontSize:"15px" }} >{program.avalibility}</h4>
                                    <p className="mt-4 text-dark " >{program.days}</p>
                                    <p className="mt-4 text-dark " >{program.when}</p>
                                    <h4 className="mt-4 text-dark " >{program.location}</h4>
                                    <p className="mt-4 text-dark " >{program.street}</p>
                                    <p className="mt-4 text-dark " >{program.place}</p>
                                    <button className=" btn btn-outline-danger" >Sign Up</button>
                                </div>
                            </div>
                    )
                })
            }
        </div>
    )
}

export default  Program