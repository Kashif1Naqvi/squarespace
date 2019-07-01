import React from 'react'

const Contact =()=> {
    return (
        <div className="container" > 
            <h1 className="mt-3 mb-3" >Contact Us</h1>
            <p>Here is a description of how to contact us. Nam nunc tortor, arcu quis luctus in nisi sit amet, tincidunt arcu quis malesuada elit. Nulla facilisi. Phasellus pellentesque arcu quis sapien mollis pharetra.</p>
            <p>123 Demo Street</p>
            <p>Manhattan, NY 12345</p>
            <p style={{color:"red"}} >(555) 555-5555</p>
            <p style={{color:"red"}} >email@email.com</p>
            <form onSubmit={(e)=>{e.preventDefault()}}>
                <div className="form-group">
                    <label htmlFor="name">Name *</label><br/>
                    <input type="text" placeholder="Enter First name"  size="30" style={{height:"40px"}} />
                    <input type="text" placeholder="Enter last name" className="m-2" size="30" style={{height:"40px"}} />
                    
                </div>
                <div className="form-group">
                    <label htmlFor="email"  >Address</label><br/>
                    <input   size="64" style={{height:"40px"}} type="text" />
                </div>
                <div className="form-group">
                    <label htmlFor="Subject *"  >Subject *</label><br/>
                    <input   size="64" style={{height:"40px"}} type="text" />
                </div>
                <div className="form-group">
                    <label htmlFor="Message"  >Message *</label><br/>
                    <textarea   cols="65" rows="4"></textarea>
                </div>
                <button className="p-2 m-2 btn btn-outline-danger" >Submit</button>
            </form>
        </div>
    )
}
export default Contact