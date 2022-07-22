import React, { useState } from 'react'
import CreateProductForm from "../components/CreateProductForm";
import DisplayAllProducts from "../components/DisplayAllProducts";

const Main = (props) => {
    
    const [productList, setProductList] = useState([]);
    
    return (
        <div>
            <CreateProductForm
                productList={productList}
                setProductList={setProductList}
            />
            <DisplayAllProducts
                productList={productList}
                setProductList={setProductList}
            />
        </div>
    )
}
export default Main;