import React from 'react';
import {BrowserRouter as Router , Link,Route} from 'react-router-dom'
import Impact from './components/Home/Impact';
import Footer from './Footer';
import Mission from './components/Mission/Mission';
import Patners from './components/Partners/Patners';
import Program from './components/Programs/Program';
import Press from './components/Press/Press';
import Volunteer from './components/Volunteer/Volunteer';
import Contact from './components/Contact/Contact';

const  App =()=> {
  return (
    <Router>
      <div className="container-fluid" >
        <nav className=" navbar navbar-expand-md  navbar-light " >
          <div className="container-fluid t ">
              <Link className="navbar-brand text-dark text-muted" to="/" >Impact</Link>
              <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarSupport" >
                  <span className="glyphicon glyphicon-plus" style={{color:"red"}} >+</span>
              </button>
          <div className="collapse navbar-collapse " id="navbarSupport" >
            <ul className="m-3 p-3  navbar-nav ml-auto" >
              <li className="nav-item">
                <Link to="/mission" className="nav-link text-dark text-muted ">Mission</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark text-muted" to="/partners" >Partners</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark text-muted" to="/impact" >Impact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark text-muted" to="/programs" >Programs</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark text-muted" to="/press" >Press</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark text-muted" to="/volunteer" >Volunteer</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark text-muted" to="/contact" >Contact</Link>
              </li>
              <li className="nav-item">
                <Link to="/donate" ><button className="btn btn-outline-danger" >Donate</button></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark text-muted" to="Search" > <img src="https://cdn1.iconfinder.com/data/icons/hawcons/32/698627-icon-111-search-512.png" width="20" height="20" alt="avator"/> </Link>
              </li>
            </ul>
          </div>
          </div>
        </nav>
        <div className="bg-light" >
        <Route exact path="/"  component={Impact} />
        <Route path="/mission"  component={Mission} /> 
        <Route path="/partners" component={Patners} />
        <Route path="/programs" component={Program} />
        <Route path="/press" component={Press} />
        <Route path="/volunteer" component={Volunteer} />
        <Route path="/contact" component={Contact} />
        </div>
        <Footer />
        </div>
    </Router>    
  );
}

export default App;
