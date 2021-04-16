import React from 'react';
import Card from './Card';
import Pdata from './Pdata';


const Food=()=>{
   
                     
              return(
                <div className="container mb-5 mt-5">
                <div className="row">
                    <div className="col-12 mx-auto">
                    <div className="row gy-4">
                    {Pdata.map((val, id) => {
                            return <Card
                            key={id}
                            img={val.img}
                            title={val.title} />
                        })}
                    </div>
                    </div>
                </div>
            </div>
              )
            }
   
                        
    export default Food;    