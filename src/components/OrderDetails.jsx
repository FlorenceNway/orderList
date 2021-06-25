import React, {useState, useEffect, useCallback} from 'react';
import orderApi from './api/orderApi';
import { useHistory, withRouter } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import EditAddress from './EditAddress';

const OrderDetails = ({location}) => {
    const {order} = location.query;
    const [ products, setProducts ] = useState([])
    const [productName, setProductName] = useState('')
    const [showModal, setShow] = useState(false);
  
    useEffect(() => {
        getAllProducts();
    }, [])

    const getAllProducts = async () => {
        const response = await orderApi.getProducts()
        setProducts(response)
    }

    const getProduct = useCallback(() => {
       return products.map ( product => {
           if(order.productId) {
            if (product.id === order.productId) setProductName(product.title)
           }
             return product;
        })
    },[order.productId,products])

    useEffect(() => {
        getProduct();
    }, [getProduct])

    const history = useHistory();
    const goDetailsPage = () => {
        history.push('/');
    };

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const cardStyle = { margin: '20px', width: 300, alignItems: 'center' }
  
    // show invidual order details
    return (
        <>
        <Card style={cardStyle}>
            <Card.Body>
                <Card.Subtitle>{order.productId === null ? 'Click View from List Page to see details' :
                order.status === 'failed' ? 'Delivery attempt is failed. Please revise your address'
                :`Your order has been ${order.status}`
                }</Card.Subtitle>
                <Card.Text>Quantity: {order.quantity}</Card.Text> 
                <Card.Text>Product: {productName}</Card.Text>
                <Button onClick={goDetailsPage}>Back to List</Button>{' '}
                {order.status === 'failed' && <Button variant="info" onClick={handleShow}>Edit Address</Button>}
            </Card.Body>
        </Card>
        <EditAddress show={showModal} onHide={handleClose} order={order}/>
        </>
    )
};

OrderDetails.defaultProps = {
    location: {
      query:{
          order: {
            productId: null,
            status: '',
            address: '',
            quantity: 0
      }}
    },
};
OrderDetails.propTypes = {
    location: PropTypes.shape({
      query:{ order: {
          productId: PropTypes.number,
          status: PropTypes.string,
          address: PropTypes.string,
          quantity: PropTypes.number
      }},
    }),
};
  
export default withRouter(OrderDetails);