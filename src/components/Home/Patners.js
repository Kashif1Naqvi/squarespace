import React,{Fragment} from 'react'
import {Link} from 'react-router-dom'
export default function Patners() {
    return (
        <Fragment>
            <div className="container">
            <div className="row" >
                <div className="col col-sm-6 col-lg-6 col-xl-6 col-md-6 img-fluid " style={{backgroundColor:"#42AEB8"}}>
                        <div className="ml-5 mt-5 pt-5" >
                            <h1 className="pt-5 pt-5 display-5 text-white font-weight-bold   " >Our Partners</h1>
                            <p className="text-white" >Here is a description of your partners. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mattis turpis vel ex semper.</p>
                            <Link  className="text-white font-weight-bold " to="/partners"  >Learn More</Link>
                    </div>
                </div>
            
                <div className="col col-sm-6 col-lg-6 col-xl-6 col-md-6"  >
                    <img  src="https://images.pexels.com/photos/1236701/pexels-photo-1236701.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="img-fluid" alt="avatar"   />
                </div>
            
            </div>
        
            <div className="p-5 m-5" >

            <div className="row">
                    <div className=" col col-sm-4 col-lg-4 col-xl-4 col-md-4">
                        <h1 className="text-dark font-weight-bold " >Our Impact</h1>
                    </div>
                    <div className="col col-sm-8 col-lg-8 col-xl-8 col-md-8">
                        <p className="text-muted" >Use this space to describe the impact your organization or company has made. Sed dictum ante a leo cursus mattis. Integer euismod, lorem sed molestie gravida, justo mauris dignissim orci, sed convallis elit ipsum at justo. Donec feugiat justo vitae mollis pretium. Suspendisse ultrices, tellus vitae varius convallis, ipsum justo commodo dui, a feugiat mauris turpis ut turpis. In laoreet magna eu consectetur facilisis. Etiam ut tempus metus. Phasellus maximus eros tempor est pretium.</p>
                        <Link  className="text-white font-weight-bold text-muted " to="/impact"  ><button className="btn btn-danger text-white btn-lg" >Learn More</button></Link>
                    </div>
                </div>
            </div>
            </div>
        </Fragment>
    )
}
