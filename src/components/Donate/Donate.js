import React from 'react'
import {Link} from 'react-router-dom'
const Donate =()=> {
    return (
        <div className="container " >
            <div className="row">
                <div className="m-5 p-5"  >
                    <p className=" text-center text-white font-weight-bold " >YOUR SUPPORT MATTERS</p>
                    <h1 className="text-center text-white font-weight-bold pb-3 mb-3 ">Make a Donation</h1> 
                    <p className="text-center text-white ">Here is additional information about donations. Maecenas nunc nunc, gravida et urna sed, ornare semper sapien. <br/> Vestibulum ultrices tellus id nibh tempor pellentesque. Aliquam porta tincidunt dapibus.<br/> Mauris mollis ornare condimentum. Aenean venenatis fringilla est, sit amet scelerisque metus auctor quis.</p>
                    <div className="text-center  " >
                        <Link className="font-weight-bold text-white " to="https://support.squarespace.com/hc/en-us/articles/206543967-Using-the-Donation-Block">Learn how to accept donations.</Link>              
                    </div>
                </div>
           </div>
        </div>
    )
}
export default Donate