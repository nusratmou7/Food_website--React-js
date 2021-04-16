import React from 'react';
import ap from "../src/img/asset (3).png"
 import {NavLink} from 'react-router-dom'
const Menu=()=>{
    return (
        <>
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-12 mx-auto">

                  <nav className="navbar navbar-expand-lg navbar-light">
                       <div className="container-fluid bb">
                          <NavLink className="navbar-brand"  to="/" style={{fontSize:'25px'}}>RESTAURANT</NavLink>
                             <button className="navbar-toggler" type="button"
                              data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                               aria-controls="navbarSupportedContent" aria-expanded="false" 
                               aria-label="Toggle navigation">
                             <span className="navbar-toggler-icon"></span>
                             </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
          <NavLink activeClassName="menu_active" exact className="nav-link active" aria-current="page" to="/"> Find</NavLink>
          </li>
        <li className="nav-item">
          <NavLink activeClassName="menu_active" className="nav-link" to="/about">About us</NavLink>
        </li>      
        <li className="nav-item">
          <NavLink activeClassName="menu_active" className="nav-link" to="/how">How It Works</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu_active" className="nav-link" to="/plans">plans</NavLink>
        </li>    
        <li className="nav-item">
          <NavLink activeClassName="menu_active" className="nav-link" to="/contact">Contact us</NavLink>
        </li>   

        <li className="nav-item-pic">
         <img src={ap} alt='prfpic'
         />
        </li>   

         <li className="nav-item-icon">
         <i className="fa fa-shopping-cart" style={{margin:'12px',color:'#fff'}}>(5) items</i>
        </li>  
      
      </ul>
     
    </div>
  </div>
</nav>
 </div>
</div>
</div>
        </>
    )
    }
export default Menu