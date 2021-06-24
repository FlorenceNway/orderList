import React,{ useState, useEffect, useCallback } from 'react';
import orderApi from './api/orderApi';
import { Link } from 'react-router-dom';


const OrderList = () => {
    const [orderList, setOrderList] = useState([])
    const [orderItems, setOrderItems] = useState([])
    const [uniqueOrderList, setUniqueOrderList] = useState([])

// list all orders
    const showOrderList = async () => {
        const response = await orderApi.getOrders();
        setOrderList(response)
    }
// get order items 
    const getOrderItem = async() => {
        const response = await orderApi.getOrderItems();
        console.log('orderItems',response)
        setOrderItems(response)
    }

    const getOrders = useCallback(() => {
       const localOrderList = [...orderList]
       localOrderList.map(order => {
            order.quantity = 0;
           return orderItems.map(orderItem => {
              if (order.id === orderItem.orderId) {
                  order['quantity'] += 1;
                  order['productId'] = orderItem.productId;
              }   
              return order;
            })
        })
        console.log('unique', localOrderList)
        setUniqueOrderList(localOrderList)
    }, [orderItems,orderList])


    useEffect(() => {
        getOrders()
    },[getOrders])

    // call the orderList and orderItem APIs when the component loadss
    useEffect(()=> {
        showOrderList()
        getOrderItem()
    },[])

    return (
        <div>
            <table>
                <thead>
                    <th>No.</th>
                    <th>Total</th>
                    <th>Status</th>
                    <th>Quantity</th>
                </thead>
                {uniqueOrderList.map(order => (
                    <tr key={order.id}>
                        <td>{order.id}</td>
                        <td>{order.total}</td>
                        <td>{order.status}</td>
                        <td>{order.quantity}</td>
                        <td><button><Link to={{ pathname: '/details', query: { status:order.status, quantity:order.quantity, productId:order.productId} }}>View</Link></button></td>
                    </tr>
                ))}
            </table>

        </div>
    );
};

export default OrderList;