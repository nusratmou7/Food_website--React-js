import React from 'react';
import {NavLink} from 'react-router-dom'
import Title from './Title'
function Home() {
    return (
        <>
        <Title/>

        <section id="header">
                <div className="container">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-6 pt-5 pt-lg-0  ">
                                <h2>Find Healthy And <br />Favourite Foods <br />Near You</h2>
                            </div>

       

                             <div className="flex social-btns">
                                <NavLink className="app-btn blu flex vert" to="/http:apple.com" >
                                     <i className="fab fa-apple"></i>
                                    <p style={{marginTop:'7px'}}>Available on the <br/> <span className="big-txt">App Store</span></p>
                                 </NavLink>

                                 <NavLink className="app-btn blu flex vert" to="/http:google.com" >
                                      <i className="fab fa-google-play"></i>
                                      <p style={{marginTop:'7px'}}>Get it on <br/> <span className="big-txt">Google Play</span></p>
                                 </NavLink>
                             </div>
                        </div>
                    </div>   
                </div>
            </section>

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container mt-3">
                  <p style={{fontWeight:'bold',fontSize:'25px',color:'#b50552'}}>Our Meals</p>
                <form className="d-flex ms-auto">
                   <input className="form-control" type="search" placeholder="Search by name" aria-label="Search"
                   style={{backgroundColor:' #f3f1f1',borderRadius:'50px'}}/>
                     <i className="fa fa-search" style={{margin: '10px',marginLeft:'-30px',color:'#b50552'}}></i>
               </form>
               <div className="nav-icon">
                  <i className="fa fa-bars" style={{margin:'12px',color:'#fff',fontSize:'26px'}}></i>
              </div>  
        
            </div>
        </nav>


        </>
    );
}
export default Home