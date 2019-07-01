import React from 'react'
import {Link} from 'react-router-dom'
export default function FirstContent() {
  return (
    <div className="container">
      <div className="row text-white bg-light  " >
      <div className="mt-3 pt-3 col col-sm-8 col-md-8 col-xl-8 col-lg-8  ">
        <p  className="pt-4 mt-5 " style={{color:"red"}} >OUR MISSION:</p>
        <h2 className="text-dark  display-3 font-weight-bold">Empower.</h2>
        <i className="text-dark" >We give young women the tools to become innovators in the fields of engineering, science, technology and mathematics.</i>
      </div>
      <div  className="pb-5 mb-5 col col-sm-4 col-md-4 col-xl-4 col-lg-4 mt-5 pt-5">
        <Link className=" text-light" to="/impact" ><button className="p-4 btn btn-danger btn-lg rounded-circle "  >Learn More</button></Link>
      </div>
    </div>
    </div>
  )
}
