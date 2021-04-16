import React from 'react';

import {NavLink} from 'react-router-dom'
const Card=(props)=>{
    
    return (
        <>  
            <div className="col-md-4 col-10 mx-auto">
                    <div className="card" >
                         <img src= {props.img} style={{height:'215px'}}
                          className="card-img-top" alt={props.img}/>
                        
                                <div className="card-body">
                                      <h5 className="card-title font-weight-bold">{props.title}
                                         <i className='fas fa-heart' style={{float:'right',color:'red'}}></i> </h5>
                                              <div className="d-flex" >
                                              <span className="fa fa-star checked"></span>
                                              <span className="fa fa-star checked"></span>
                                              <span className="fa fa-star checked"></span>
                                              <span className="fa fa-star checked"></span>
                                               <span className="fa fa-star" style={{color:'#d0cbc6'}}></span>

                                        <p style={{marginLeft:'20px',fontSize:'12px'}}>32 reviews</p>
                                </div>
                             
                               <NavLink to="#" className="card-link">Indian</NavLink>
                               <NavLink to="#" className="card-link">Pakistani</NavLink>
                            </div>
                   </div>
              </div>
       </>
    )
}
  
export default Card