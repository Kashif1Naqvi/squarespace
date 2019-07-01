import React from 'react'

const Search =()=> {
    return (
        <div className="container p-5 m-5 " >
            <div className="form-group has-search">
                <span className="fa fa-search form-control-feedback" ></span>
                <input type="text" className=" bg-white form-control" style={{height:"70px"}} placeholder="Type to Search"  />
            </div>
        </div>
    )
}

export default Search