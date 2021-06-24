import React, {useState, useEffect} from 'react';
import orderApi from './api/orderApi';

const OrderDetails = (props) => {
    const {status, quantity, productId} = props.location.query;
    const [ products, setProducts ] = useState([])
    const [productName, setProductName] = useState('')
  
    useEffect(() => {
        getAllProducts();
    }, [])

    const getAllProducts = async () => {
        const response = await orderApi.getProducts()
        setProducts(response)
    }

    const getProduct = () => {
       return products.map ( product => {
            if (product.id === productId) setProductName(product.title)
            return product;
        })
    }

    // show invidual order details
    return (
        <ul>
            <li>{props.location.query?.status}</li>
            <li>{props.location.query?.quantity}</li>
            <li>{productName}</li>
        </ul>
    );
};

export default OrderDetails;