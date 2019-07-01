import React from 'react'
import {Link} from 'react-router-dom'
const Program=()=> {
    return (
        <div style={{backgroundColor:"#F06648"}} className="p-5 m-5" >
            <div className="container mt-5 pt-5  " >
                <div className="row">
                    <div className="col col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xl-4  "> 
                        <h1 className="font-weight-bold text-white" >Our Programs</h1>
                    </div>
                    <div className="col col-sm-8 col-md-8 col-lg-8 col-xl-8 col-xl-8 ">
                        <i className="pb-4 mb-4 text-white" >Use this space to describe your organization or company's programs. Sed dictum ante a leo cursus mattis. Integer euismod, lorem sed molestie gravida, justo mauris dignissim orci, sed convallis elit ipsum at justo. Donec feugiat justo vitae mollis pretium. Suspendisse ultrices, tellus vitae varius convallis, ipsum justo commodo dui, a feugiat mauris turpis ut turpis. In laoreet magna eu consectetur facilisis. Etiam ut tempus metus. Phasellus maximus eros tempor est pretium.</i><br/>
                        <Link to="/program" ><button className="btn btn-danger btn-lg mt-2   text-dark bg-white ">Learn More</button></Link>
                    </div>
                </div>
                <div className="row" >
                    <div className="col col-sm-6  col-md-6 col-lg-6 col-xl-6 ">
                        <h4  className="mb-3 text-light display-5 " >ENGINEERING</h4>
                        <p className="text-white" >Donec feugiat justo vitae mollis pretium. Suspendisse ultrices, tellus vitae varius convallis, ipsum justo commodo dui, a feugiat mauris turpis ut turpis. In laoreet magna eu consectetur facilisis. Etiam ut tempus metus. Phasellus maximus eros tempor.</p>
                    </div>
                    <div className="col col-sm-6  col-md-6 col-lg-6 col-xl-6 ">
                        <h4  className="mb-3 text-light display-5 " >SCIENCE</h4>
                        <p className="text-white" >Donec feugiat justo vitae mollis pretium. Suspendisse ultrices, tellus vitae varius convallis, ipsum justo commodo dui, a feugiat mauris turpis ut turpis. In laoreet magna eu consectetur facilisis. Etiam ut tempus metus. Phasellus maximus eros tempor.</p>
                    </div>
                </div>
                <div className="row">
                    <div className=" col col-sm-6  col-md-6 col-lg-6 col-xl-6 ">
                            <h4  className="mb-3 text-light display-5 " >TECHNOLOGY</h4>
                            <p className="text-white" >Donec feugiat justo vitae mollis pretium. Suspendisse ultrices, tellus vitae varius convallis, ipsum justo commodo dui, a feugiat mauris turpis ut turpis. In laoreet magna eu consectetur facilisis. Etiam ut tempus metus. Phasellus maximus eros tempor.</p>
                    </div>
                    <div className="col col-sm-6  col-md-6 col-lg-6 col-xl-6 ">
                        <h4  className="mb-3 text-light display-5 " >MATHEMATICS</h4>
                        <p className="text-white" >Donec feugiat justo vitae mollis pretium. Suspendisse ultrices, tellus vitae varius convallis, ipsum justo commodo dui, a feugiat mauris turpis ut turpis. In laoreet magna eu consectetur facilisis. Etiam ut tempus metus. Phasellus maximus eros tempor.</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default Program