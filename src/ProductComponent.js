import React from 'react';
import { useSelector } from 'react-redux';
const ProductComponent = () => {
    const products = useSelector((state) => state.productReducer.products.data)

    const renderList = products ? products.map((item) => {
        return (
            <div key={item.id} className="four wide column">
            <div className="ui link cards" key={item.id}>
              <div id="shadow" className="card">
                <div style={{background:'none'}} className="image">
                  <img style={{padding:'30px',height:'250px'}} src={item.image} alt=""/>
                </div>
                <div className="content">
                  <div className="header">{item.title}</div>
                  <div style={{color:'black',fontWeight:'bold'}} className="meta price">${item.price}</div>
                  <div className="meta">{item.category}</div>
                </div>
              </div>
            </div>
            </div>
          )
    }) : ''
    return <> {renderList}</>
       
        
       
    ;
}

export default ProductComponent;
