import React, { useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const DisplayAll = (props) => {

    const {removeFromDom, productList, setProductList} = props;
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then((res) => {
                console.log(res.data.product);
                setProductList(res.data.product);
            })
            .catch((err) => console.log(err));
    }, [setProductList]);

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/delete/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <header>
                All Products:
            </header>
            {
                productList.map((product, index) => (
                    <div key={index}>
                        <Link to={`/products/${product._id}`}>
                            {product.title}
                        </Link>
                        <button onClick={() => navigate(`/products/edit/${product._id}`)}>
                            Edit
                        </button>
                        <button onClick={(e)=>{deleteProduct(product._id)}}>
                            Delete
                        </button>
                    </div>
                ))
            }
        </div>
    );
};

export default DisplayAll;