import React from 'react'
import {Link} from 'react-router-dom'
export default function Footer() {
  return (
    <div className="container-fluid text-light bg-dark">
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
            <ul className="m-3 p-3  navbar-nav ml-auto" >
                <Link className="nav-link  text-white " to="/volunteer" >Volunteer</Link>
                <Link className="nav-link  text-white " to="/contact" >Contact</Link>
                <Link className="nav-link  text-white " to="/donate" >Donate</Link>
            </ul>
          </div>
          <div className="mt-5 pt-5 col col-sm-3 col-md-3 col-lg-3 col-xl-3">
            <a  className="mr-1"  href="https://www.linkedin.com/in/syed-kashif-8b48a015b/" target="_blank" rel="noopener noreferrer"  > <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHoAAAB6CAMAAABHh7fWAAAAV1BMVEX///8Al9MAk9LM5vQAkNAAldLy+fyu0uswndXs9fp9t+CHveL2+/0emtRyuODl8vnB3vBLp9lYq9uVy+iezuqn0+wAjM+32u7Y6vWLxeZAo9h6veJdsN0x3E5qAAABz0lEQVRoge2afZOCIBCHFVnrSvEtX/L6/p/zysCb8roZcIOmfs9/bEPPAOtCYRQBAAAAAAAAwCuQJc5kq8SFIhKOEKnC3ZzkgmJnSOSJ85jzFeJJnruOW4l15jgWys2c0cpBn4dNbrmWrDaf3W6rnaye7/OMQw21pZqElJZZz6QWY9O3yq608qjFcYoOVtWVRT3XxMEmBXjU806gLIbNoaZqrsat9Kw+zfHet3pMTbyxWGyWtZaliY+e1zqmrc6zo8V8Mz3XtC3TKCu+rcorVyGV27oiu8LOtn3Q4yPTgw+Y1KRZNEh2FFP319bCk2bV/spuMijdymMhvsv0XG+KXi3lPA/XRoczuqScecrrTn3NPYrTffbzqtNJbXxjc9Nnf7/RPlF9uOtUkzf1/528qqOKgqkb6VE99G3/2xw6f2pFUsp4VhT+Jvy6kVFuDjHpzZ76VLVe2s5s51nlS53opdVHZZ9qc1CjnXd1G059EFB/irpZqOtPVEdQv6t68XC9qfr2J8BSfWJXC1Ve6S9fnW90y/ynQ7UOlPynlFhIzWQyjdmzjPCpnYAaaqhfTB3uii3gxWLA69SQl8gBr85DvjAQBXxNAgAAAAAAAAC4+AFoWSVtAShn3QAAAABJRU5ErkJggg==" alt="Linkdin"  width="30px" /> </a>
            <a  className="mr-1"  href="https://twitter.com/" target="_blank" rel="noopener noreferrer"> <img src="https://freepngimg.com/download/logo/62442-twitter-computer-black-icons-free-frame.png" alt="twitter" width="30px" /> </a>
            <a  className="mr-1"  href="https://mail.google.com" target="_blank" rel="noopener noreferrer"> <img src="http://cdn.onlinewebfonts.com/svg/img_465838.png" alt="Email" width="30px" /> </a> 
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
