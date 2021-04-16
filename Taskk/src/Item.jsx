import React from 'react';
import Card from './Card'
const Item = ({ items }) => {
 
             
    return(
      <div className="container mb-5 mt-5">
      <div className="row">
          <div className="col-12 mx-auto">
          <div className="row gy-4">
          {items.map((val, id) => {
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
export default Item