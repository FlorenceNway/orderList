import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { useRef } from 'react';
import {Button,Modal} from 'react-bootstrap';
import orderApi from './api/orderApi';

const EditAddress = ({show, onHide, order}) => {

    const [newAddress, setNewAddress] = useState(order.address);
    const [Message, setMessage] = useState('You can revise the Address')
    const [ disabled, setDisabled] = useState(false)
    // const inputRef = useRef(order.address);

    const onChange= (e) => {
        setDisabled(false)
        setMessage()
        setNewAddress(e.target.value)
    }

    const updateAddress = async (id) => {
        const response = await orderApi.updateOrder(id, {
            address: newAddress
        })
        if(response) {
            setDisabled(true);
            setMessage('Your address has been changed!!')
        }    
        return response;
    }

    // useEffect(() => {
    //     if (inputRef.current) inputRef.current.value = order.address;
    // },[order.address]);

    const inputStyle = {border: 'none', cursor: 'pointer', width: '100%' }
    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>{Message}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                {/* <input ref={inputRef} value={useRef.current.value} style={inputStyle}/> */}
                <input onChange={onChange} value={newAddress} style={inputStyle}/>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="primary" onClick={() => updateAddress(order.id)} disabled={disabled}>Save changes</Button>
            </Modal.Footer>
        </Modal>
    );
};

EditAddress.defaultProps = {
    address: '',
};

EditAddress.propTypes = {
    show: PropTypes.bool.isRequired,
    onHide: PropTypes.func.isRequired,
    address: PropTypes.string,
};

export default EditAddress;