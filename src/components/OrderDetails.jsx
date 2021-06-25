import React, {useState, useEffect, useCallback} from 'react';
import orderApi from './api/orderApi';
import { useHistory, withRouter } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';

const OrderDetails = (props) => {
    const {status, quantity, productId} = props.location.query
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

    const history = useHistory();
    const goDetailsPage = () => {
        history.push('/');
    };
    const cardStyle = { margin: '20px', width: '18rem', alignItems: 'center' }
    // show invidual order details
    return (
        <Card>
            <Card.Body style={cardStyle}>
                <Card.Subtitle>{props !== 'underfined' ? `Your order has been ${status}` : 'Click View to see details'}</Card.Subtitle>
                <Card.Text>{props !== 'underfined' ? `Quantity: ${quantity}` : 'Click View to see details'}</Card.Text> 
                <Card.Text>{props !== 'underfined' ? `Product: ${productName}` : 'Click View to see details'}</Card.Text>
                <Button onClick={goDetailsPage}>Back to List</Button>
            </Card.Body>
        </Card>
        
    )
};

export default withRouter(OrderDetails);