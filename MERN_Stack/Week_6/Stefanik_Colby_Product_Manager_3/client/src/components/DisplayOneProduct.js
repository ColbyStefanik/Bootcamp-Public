import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DisplayOneProduct = (props) => {

    const [oneProduct, setOneProduct] = useState({});
    const {id} = useParams();

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id)
        .then((res) => {
            console.log(res.data.product);
            setOneProduct(res.data.product);
        })
        .catch((err) => console.log(err));
    }, [id]);

    return (
        <div>
            <p>Name: {oneProduct.title}</p>
            <p>Price: ${oneProduct.price}</p>
            <p>Description: {oneProduct.description}</p>
        </div>
    )
}
export default DisplayOneProduct;