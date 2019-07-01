import React from 'react'
import {Link} from 'react-router-dom'
import linkdin from './images/linkdin.svg'
import facebook from './images/facebook.svg'
import email from './images/email.svg'
export default function Footer() {
  return (
    <div className="container-fluid m-5 p-5 text-light bg-dark" >
      <div className="container  ">
        <div className="row">
          <div className="mt-5 pt-5 col col-sm-4 col-md-4 col-lg-4 col-xl-4 ">
            <p  className="text-white font-weight-bold " >&copy; 2019 IMPACT </p>
            <p className="mb-4  text-white">123 Demo Street Manhattan, NY 12345</p>
            <p className=" text-white text-muted " >(555) 555-5555</p>
            <p className=" text-white " >email@email.com</p>
            <p className=" text-muted " >Powered by:</p>
            <Link className="text-white" to="/" >Squarespace</Link>
            <p className="text-muted" >Photography by:</p>
            <p className="text-white font-weight-bold" >Black Girls Code</p>
          </div>
          <div className="mt-5 pt-5 col col-sm-2 col-md-2 col-lg-2 col-xl-2 ">
          <p className="text-center text-white " >INFO</p>
            <ul className="m-3 p-3 text-center navbar-nav ml-auto" >
                <Link to="/mission" className="nav-link  text-white  ">Mission</Link>
              
                <Link className="nav-link  text-white " to="/partners" >Partners</Link>
              
                <Link className="nav-link  text-white " to="/impact" >Impact</Link>
              
                <Link className="nav-link  text-white " to="/programs" >Programs</Link>
              
                <Link className="nav-link  text-white " to="/press" >Press</Link>
             </ul>
          </div>
          <div className="mt-5 pt-5 col col-sm-3 col-md-3 col-lg-3 col-xl-3 ">
            <h4>ACTION</h4>
            <ul className="navbar-nav ml-auto" >
                <Link className="nav-link  text-white " to="/volunteer" >Volunteer</Link>
                <Link className="nav-link  text-white " to="/contact" >Contact</Link>
                <Link className="nav-link  text-white " to="/donate" >Donate</Link>
            </ul>
          </div>
          <div className="mt-5 pt-5 col col-sm-3 col-md-3 col-lg-3 col-xl-3">
            <a  className="mr-1"  href="https://www.linkedin.com/in/syed-kashif-8b48a015b/" target="_blank" rel="noopener noreferrer"  > <img src={linkdin}  alt="Linkdin"  width="30px" /> </a>
            <a  className="mr-1"  href="https://facebook.com/" target="_blank" rel="noopener noreferrer"> <img src={facebook} alt="facebook" width="30px" /> </a>
            <a  className="mr-1"  href="https://mail.google.com" target="_blank" rel="noopener noreferrer"> <img src={email} alt="Email" width="30px" /> </a> 
            <form  onSubmit={(e)=>e.preventDefault()} >
              <p className="mt-3 text-white " >Sign up to receive news and updates.</p>
              <input type="text" size="19" placeholder="Email Address" className="form-control  " /><br/>
              <button className="p-3 btn btn-outline-primary ">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
