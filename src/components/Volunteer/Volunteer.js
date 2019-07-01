import React from 'react'

const Volunteer =()=> {
    return (
        <div>
            <div  style={{ backgroundImage:"url(https://images.pexels.com/photos/442574/pexels-photo-442574.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)",backgroundAttachment:"fixed",backgroundSize:"cover"  ,height:"900px" }} ></div>
            <div className="container" >
                <div className="row" >
                    <div className="mt-3 col col-sm-7 col-md-7 col-lg-7 col-xl-7 ">
                        <h1 className="font-weight-bold pt-3 mt-3 pb-3 mb-3 " >Volunteer</h1>
                        <p>Use this page to list volunteer opportunities and current job openings. Donec ultrices ex ut ante consectetur, sed varius libero pharetra. Aenean consequat orci metus, in tempus erat venenatis sed. Donec ut est et tortor rhoncus aliquet. Nulla sollicitudin, sapien quis malesuada semper, felis lectus eleifend ipsum, ultrices hendrerit turpis lorem sit amet nunc. Aenean facilisis leo sapien, eget congue justo sollicitudin at. Morbi a elit at mi pulvinar vulputate. Etiam bibendum sed lorem ut mollis.</p>
                        <form onSubmit={(e)=>{e.preventDefault()}}>
                            <label htmlFor="name">Name *</label><br/>
                            <input className="mr-2 " size="30" style={{height:"40px"}} type="text" />
                            <input className="mr-2 mb-3 " size="30" style={{height:"40px"}} type="text" />
                            <label htmlFor="email">Email Address</label><br/>
                            <input  size="64" style={{height:"40px"}} type="text" />
                            <label className="mt-4" htmlFor="Phone">Phone:</label><br/>
                            <input type="text" className="m-2" size="5" style={{height:"45px"}} />
                            <input type="text" className="m-2" size="5" style={{height:"45px"}} />
                            <input type="text" className="m-2" size="5" style={{height:"45px"}} /><br />
                            <h7>Address *</h7>
                            <input  size="64" style={{height:"40px"}} type="text" />
                            <label htmlFor="address">Address 1</label>
                            <input  size="64" style={{height:"40px"}} type="text" />
                            <label htmlFor="address">Address 2</label><br/>
                            <input className="mr-2 " placeholder="city"  size="45" style={{height:"40px"}} type="text" />
                            <input className="mr-2 mb-3 " placeholder="State/Province" size="15" style={{height:"40px"}} type="text" />
                            <input className="mr-2 mb-3 " size="25" style={{height:"40px"}} type="text" /> <br/>
                            <label htmlFor="zip">Zip/Postal Code</label>
                            <input  size="64" style={{height:"40px"}} type="text" />
                            <label htmlFor="country">country</label>
                            <h5>Language(s) Spoken *</h5>
                            <input type="checkbox" name="Arabic" id=""/>Arabic <br/>
                            <input type="checkbox" name="Chinese" id=""/>Chinese <br/>
                            <input type="checkbox" name="English" id=""/>English <br/>
                            <input type="checkbox" name=" French" id=""/> French <br/>
                            <input type="checkbox" name=" Japanese" id=""/> Japanese <br/>
                            <input type="checkbox" name="Portuguese" id=""/>Portugueseb <br/>
                            <input type="checkbox" name="Russian" id=""/>Russian <br/>
                            <input type="checkbox" name="other" id=""/>other <br/>

                            <p>Preferred Volunteer Region *</p>
                            <select name="san francisco" >
                                <option>California </option>
                                <option>London </option>
                            </select>
                            <h5>Availability *</h5>
                            <p>Please select one or more options</p>
                            <input type="checkbox" name=" Weekend Workshop (4 Hour Shift)" id=""/> Weekend Workshop (4 Hour Shift) <br/>
                            <input type="checkbox" name=" Weekend Workshop (8 Hour Shift)" id=""/> Weekend Workshop (8 Hour Shift) <br/>
                            <input type="checkbox" name=" One-Week Summer Camp" id=""/> One-Week Summer Camp <br/>
                            <input type="checkbox" name="  Weekday Workshop" />  Weekday Workshop <br/>
                            <input type="checkbox" name="  Ongoing, Weekday Commitment" id=""/>  Ongoing, Weekday Commitment <br/>
                            <input type="checkbox" name="Portuguese" id=""/>Portugueseb <br/>

                            <h4>Volunteer Roles *</h4>
                            <p>Please select one or more options</p>
                            <input type="checkbox" name="  Tech Instructor" id=""/>  Tech Instructor <br/>
                            <input type="checkbox" name="  Tech Assistant" id=""/>  Tech Assistant <br/>
                            <input type="checkbox" name="  Classroom Assistant" id=""/>  Classroom Assistant <br/>
                            <input type="checkbox" name="   Non Tech Volunteer" />   Non Tech Volunteer <br/>
                            <input type="checkbox" name="   Social Media Volunteer" id=""/>   Social Media Volunteer <br/>
                            <input type="checkbox" name=" General Office / Admin Assistance" id=""/> General Office / Admin Assistanceb <br/>
                            <input type="checkbox" name="  General IT / Tech Support" id=""/>  General IT / Tech Supportb <br/>
                            <h4 className="mt-5" >Technical Skills</h4>
                            <p>Please list any technical skills that you have</p>
                            <textarea  id="" cols="65" rows="4"></textarea>
                            <h3 className="mt-4" >Why would you like to volunteer with us? *</h3>
                            <textarea  id="" cols="65" rows="4"></textarea>
                            <p  className="pt-4 display-5 " >Would you be willing to complete a personal background check? *</p>
                            <select name="Yes" >
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select><br/>
                            <input type="submit" value="Submit" className="mt-4 pt-4 mb-4 pb-4 btn btn-outline-danger rounded-circle " />
                        </form>
                    </div>
                </div>    
            </div>
        </div>
    )
}
export default  Volunteer