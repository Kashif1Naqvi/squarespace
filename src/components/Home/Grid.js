import React from 'react'
import { Link } from 'react-router-dom'
const Grid =()=> {
  return(
    <div className="row" >
      <div className="col">
        <figure className="figure">
          <img className="m-5  img-figure img-fluid rounded rounded-circle img-thumbnail"   src="https://images.squarespace-cdn.com/content/v1/59dbc7c2cf81e0c47e15482d/1509981664066-URCHCKEDU0YDAYBKHSES/ke17ZwdGBToddI8pDm48kC9pJP4_RbwhTsWOMedvuEF7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mwD1g8DYbkhCsgrhnj8CXap6OtW2jH6l3khhVSoKzXI--aDuUwJxr6A25MKizLOzQ/_50A4133.jpg"  alt="AVATAR"/>
        </figure>
      </div>
      <div className="m-5 p-5 col">
        <div className="float-left ">
          <h1 className="pb-2 mb-2 display-5 font-weight-bold " style={{color:"red"}} >Our Mission</h1>
          <p className="text-muted " >Here is a description of your mission and goals. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mattis turpis vel ex semper, feugiat tincidunt quam mollis. Etiam malesuada molestie lacinia. Donec neque lectus, ornare ac massa vitae, faucibus vestibulum.</p>
          <Link  to="/mission" className="text-muted btn-lg " >Learn More</Link>
        </div>
      </div>
    </div>
  )
}
export default Grid