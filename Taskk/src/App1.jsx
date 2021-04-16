import React,{useState} from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from './Home'
import Food from './Food'
import Service from './Service'
import Menu from './Menu'
import Categories from './Categories';
import items from './Sdata';
import Item from './Item';
const allCategories = ['all(120)', ...new Set(items.map((item) => item.category)),'Drinks(53)','Desserts(33)','Fastfoods(41)'];

const App1=()=>{

    const [menuItems, setMenuItems] = useState(items);
    const [categories,setCategories] = useState(allCategories); 
    const filterItems = (category) => {
      if (category === 'all(120)') {
        setMenuItems(items);
        return;
      }
      const newItems = items.filter((list) => list.category === category);
      setMenuItems(newItems);
    };

return ( 
<>
<Menu/>
<Home/>
        <Categories categories={categories} filterItems={filterItems} />
        <Item items={menuItems} /> 
        
        
        <div className="container title">
          <h2 style={{fontWeight:'bold',color:'#b50552'}}>Popular</h2>
        </div>
 
       <Food/>

<Service/>

</>
 
) 
}



 export default App1

