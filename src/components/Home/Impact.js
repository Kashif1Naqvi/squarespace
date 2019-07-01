import React from 'react'
import  { Link} from 'react-router-dom'
import FirstContent from './FirstContent';
import Grid from './Grid';
import Patners from './Patners';
import Range from './Range';
import Program from './Program';
const Impact = () => {
  return (

    <div  className="container-fluid">
      <div className="jumbotron " style={{ backgroundImage:"url(https://images.pexels.com/photos/256401/pexels-photo-256401.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)",backgroundAttachment:"fixed",backgroundSize:"cover"  ,height:"900px" }} ></div>
      <FirstContent />
      <Grid />
      <Patners />
      <Range />
      <Program />
    
      <div className="container">
        <div className="mt-5 pt-5 mb-5 pb-5 row">
          <div className="mt-3  col col-sm-12  col-md-12 col-lg-12 col-xl-12 ">
            <h1 className="mb-3  text-center " >“</h1>
            <p className="mb-3 text-center" style={{color:"red"}} >OCTOBER 2017</p>
            <h1 className="mb-3 text-center" >This is an example testimonial. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec vestibulum augue. Sed purus felis, sollicitudin vel arcu sit amet.</h1>
          <div className="text-center">Quote Source /<a  href="http://squarespace.com" style={{color:"red"}} target="_blank" rel="noopener noreferrer" > Read Full Article</a></div>
        </div>
      </div>
      </div>
    
      <div className="container-fluid"> 
        <div className="row">
          <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6  ">
            <figure className="figure">
              <img className="figure-img img-fluid"  src="https://images.pexels.com/photos/1007066/pexels-photo-1007066.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="avatar"/>   
            </figure>
          </div>
          <div  style={{backgroundColor:"#42AEB8",height:"auto"}} className="col  col-sm-6  col-md-6 col-lg-6 col-xl-6">
            <div className="pt-5 mt-5  "  >
            <h1 className="mt-5 pt-5 font-weight-bold text-white " >Our Team</h1>
              <p className="text-white ">Here is a description of your team. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mattis turpis vel ex semper.</p>
              <a className="font-weight-bold text-white " href="/volunteer" >Join Our Team</a>
            </div>
          </div>
        </div>
      </div>
    
      <div className="container m-5 p-5 " >
        <div className="row">
          <div className="col col-sm-4  col-md-4 col-lg-4 col-xl-4">
            <h1 className="display-7 font-weight-bold  " >Get Involved</h1>
          </div>
          <div className="col col-sm-8  col-md-8 col-lg-8 col-xl-8">
            <p className="text-dark m-2" >Here is a description of how to get involved. Integer euismod, lorem sed molestie gravida, justo mauris dignissim orci, sed convallis elit ipsum at justo. Donec feugiat justo vitae mollis pretium. Suspendisse ultrices, tellus vitae varius convallis, ipsum justo commodo dui, a feugiat mauris turpis ut turpis. In laoreet magna eu consectetur facilisis. Etiam ut tempus metus. Phasellus maximus eros tempor est pretium.</p>
          </div>
        </div>
      </div>
    
      <div className="container m-5 p-5">
        <div className="row">
          <div className=" col col-sm-4  col-md-4 col-lg-4 col-xl-4">
            <h1 style={{fontSize:"15px",color:"red"}}  className="font-weight-bold  " >SIGN UP FOR A PROGRAM</h1>
            <p className="mt-3" >Sed dictum ante a leo cursus mattis. Integer euismod, lorem sed molestie gravida, justo mauris dignissim orci.</p>
            <Link to="/program" > <button className="btn btn-danger btn-lg" >Sign Up</button> </Link>
          </div>
          <div className="  col-md-4 col-lg-4 col-xl-4">
            <h1 style={{fontSize:"15px",color:"red"}} className="font-weight-bold  " >VOLUNTEER OPPORTUNITIES</h1>
            <p className="mt-3" >Sed dictum ante a leo cursus mattis. Integer euismod, lorem sed molestie gravida, justo mauris dignissim orci.</p>
            <Link to="/volunteer" > <button className="btn btn-danger btn-lg" >Learn More</button> </Link>
          </div>
          <div className="b-4 col col-sm-4  col-md-4 col-lg-4 col-xl-4">
            <h1 style={{fontSize:"15px",color:"red"}} className="font-weight-bold  " >MAKE A DONATION</h1>
            <p className="mt-3" >Sed dictum ante a leo cursus mattis. Integer euismod, lorem sed molestie gravida, justo mauris dignissim orci.</p>
            <Link to="/donate" > <button className="btn btn-danger btn-lg" >Donate</button> </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Impact