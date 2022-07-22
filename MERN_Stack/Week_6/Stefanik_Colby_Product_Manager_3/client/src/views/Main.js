import React, { useState } from 'react'
import CreateProductForm from "../components/CreateProductForm";
import DisplayAllProducts from "../components/DisplayAllProducts";

const Main = (props) => {
    
    const [productList, setProductList] = useState([]);

    const removeFromDom = productId => {
        setProductList(productList.filter(product => product._id != productId));
    }
    
    return (
        <div>
            <CreateProductForm
                productList={productList}
                setProductList={setProductList}
            />
            <DisplayAllProducts
                productList={productList}
                setProductList={setProductList}
                removeFromDom={removeFromDom}
            />
        </div>
    )
}
export default Main;