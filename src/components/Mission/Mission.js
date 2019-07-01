import React from 'react'

export default function Mission() {
    return (
        <div  >
            <div  style={{ backgroundImage:"url(https://images.pexels.com/photos/313690/pexels-photo-313690.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)",backgroundAttachment:"fixed",backgroundSize:"cover"  ,height:"900px" }} ></div>
            <div className="container p-5 m-5   ">
                <div className="row">
                    <div className="col col-sm-8 col-md-8 col-lg-8 col-xl-8">
                        <h1 className="font-weight-bold text-dark mb-3 " >Our Mission</h1>
                        <p className="text-dark" >Use this page to describe your mission and goals. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis vel tortor ac rhoncus. Donec ut eros ut felis imperdiet aliquam. Ut aliquam quam a ipsum tristique, ut consequat ante tempus. Curabitur bibendum nisi quis condimentum lobortis. Donec nec pellentesque neque, in suscipit diam. Mauris rhoncus lacus erat, eget tristique dui sagittis eu. Vestibulum tincidunt convallis hendrerit. Donec placerat mauris sed luctus suscipit. Donec faucibus mi id mauris convallis facilisis. Nulla euismod metus accumsan nunc mattis, eget laoreet sapien dictum. Mauris sit amet venenatis lorem. Vestibulum et convallis erat. Curabitur sit amet massa lobortis, aliquam elit at, scelerisque nisi. Suspendisse potenti.</p>
                        <p className="text-dark" >Aenean blandit ex vitae justo auctor, volutpat congue lorem egestas. Morbi auctor bibendum eros, sagittis varius tortor vulputate in. Mauris nec mollis metus. Nulla gravida ultrices ipsum non rutrum. Sed posuere viverra condimentum. Donec eu urna vel orci pretium luctus. Donec tempor, quam sit amet pulvinar fermentum, felis felis euismod magna, at vehicula felis magna nec dolor. Praesent id aliquam massa. Donec ligula felis, aliquam in ligula at, lobortis finibus mi. Quisque ligula augue, porta in rhoncus vel, imperdiet in mi. Nam volutpat mi non blandit ultricies. Praesent condimentum, odio vitae lacinia faucibus, lectus tortor pharetra mauris, eu pulvinar turpis libero non ante. Curabitur euismod lobortis imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non sem dignissim, vestibulum dolor ut, ultrices mauris. Etiam enim arcu, imperdiet at placerat at.</p>
                    </div>
                </div>
            </div>
            <div className="container ">
                <div className="row">
                    <div className="mt-5 col col-sm-5 col-md-5 col-lg-5 col-xl-5 "  >
                        <div className="bg-white " style={{width:"500px",position:"relative",zIndex:"1" }} >
                            <p className="p-5 m-5 text-center "  >"Sed dictum ante a leo cursus mattis. Integer euismod, lorem sed molestie gravida, justo mauris dignissim orci, sed convallis elit ipsum at justo. Donec feugiat justo vitae mollis pretium. Suspendisse ultrices, tellus vitae varius convallis, ipsum justo commodo dui, a feugiat mauris turpis ut turpis."</p>
                            <h4 className=" text-dark font-weight-bold " >— Donovan Mafnas, Impact Volunteer</h4>
                        </div>
                    </div>
                    <div className="col col-sm-5 col-md-5 col-lg-5 col-xl-5 ">
                        <figure className="figure">
                            <img src="https://images.pexels.com/photos/2067569/pexels-photo-2067569.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="figure-image img-thumbnail" alt="Avatar"/>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    )
}
