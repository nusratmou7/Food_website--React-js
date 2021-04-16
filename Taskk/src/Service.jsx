import React from 'react';
import {NavLink} from 'react-router-dom'
import bike from "../src/img/asset (6).png"
import pasta from "../src/img/asset (5).png"
const Service=()=>{
    return (
        <>


<div className="container mb-5 mt-5">
    <div className="row">
      <div className="col-12 mx-auto">
        <div className="row gy-4">
            <div className="col-md-4 col-10 mx-auto">
                <div className="card" >
                  <div className="card-body">
                    <h5 className="card-title" style={{fontWeight:'bold',color:'grey'}}>Your Meal Has <br /> Been Shipped</h5>
                    <img src={bike} style={{marginTop:'160px',position:'relative'}} className="card-img-top" alt=""/>
                    <p style={{fontSize:'34px',color:'rgb(245 79 16)',marginTop:'10px'}}>15m: 20s</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
 <div className="container mb-5 mt-5">
    <div className="row">
      <div className="col-12 mx-auto">
        <div className="row gy-4">
            <div className="col-md-4 col-10 mx-auto">
                <div className="card" >
                  <div className="card-body">
                    <h5 className="card-title" style={{fontWeight:'bold',color:'grey'}}>Price/Serving</h5>

                    <div className="container "
                    style= {{borderBottom :'5px solid rgb(245 79 16)',marginTop:'50px'}} ></div>

       <div className="d-flex">
               
       <ul style={{listStyle:'none',marginTop:'20px'}}>
       <h5  style={{ margin:'10px -5px'}}>Cusine</h5>  
          <li className="nav-icon" style={{ margin:'0px -5px'}}>
          <NavLink  style={{fontSize:'10px',textDecoration:'none',color:'#fff'}} to="/"> American
          </NavLink>
          </li>
        <li >
          <NavLink style={{fontSize:'12px',textDecoration:'none',color:'grey'}} to="/"> Indian</NavLink>
        </li>      
        <li >
          <NavLink style={{fontSize:'12px',textDecoration:'none',color:'grey'}} to="/">Italian</NavLink>
        </li>
        <li >
          <NavLink  style={{fontSize:'12px',textDecoration:'none',color:'grey'}} to="/">parsian</NavLink>
        </li>
        <li >
          <NavLink  style={{fontSize:'12px',textDecoration:'none',color:'grey'}} to="/">Russian</NavLink>
        </li>    
       
      </ul>

      <ul style={{listStyle:'none',marginTop:'60px',marginLeft:'20px'}}>
          <li>
          <NavLink  style={{fontSize:'10px',textDecoration:'none',color:'grey'}} to="/"> Italian
          </NavLink>
          </li>
        <li >
          <NavLink style={{fontSize:'12px',textDecoration:'none',color:'grey'}} to="/"> japanese</NavLink>
        </li>      
        <li className="nav-icon" style={{ margin:'0px -5px'}}>
          <NavLink style={{fontSize:'12px',textDecoration:'none',color:'#fff'}} to="/">Latin</NavLink>
        </li>
        <li >
          <NavLink  style={{fontSize:'12px',textDecoration:'none',color:'grey'}} to="/">Maxican</NavLink>
        </li>
        <li >
          <NavLink  style={{fontSize:'12px',textDecoration:'none',color:'grey'}} to="/">Seafood</NavLink>
        </li>    
       
      </ul>
    </div> 

                    <img src={pasta} style={{marginTop:'100px',position:'relative'}} className="card-img-top" alt=""/>
                        <button className="item-icon" style={{textAlign:'center'}}>Select</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

       </>
    )
    }
export default Service