import React, {useState, useEffect, useCallback} from 'react';
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

    const getProduct = useCallback(() => {
       return products.map ( product => {
            if (product.id === productId) setProductName(product.title)
            return product;
        })
    },[productId,products])

    useEffect(() => {
        getProduct();
    }, [getProduct])
    // show invidual order details

    return (
        <ul>
            {status ? <li>{status}</li> : ''}
            {quantity? <li>{props.location.query?.quantity}</li> : ''}
            <li>{productName}</li>
        </ul>
    )
};

export default OrderDetails;