import React from 'react';
import PropTypes from 'prop-types';
import {Button,Modal} from 'react-bootstrap';

const EditAddress = ({show, onHide, address}) => {

    // const getAddress = () => {

    // }
    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Address</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>{address}</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="primary">Save changes</Button>
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