import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Aux from '../../hoc/Auxillary';
import './AddHikeModal.css';
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import HikeSelect from './HikeSelect/HikeSelect';

class AddHikeModal extends Component {

    state = {
        showModal : this.props.modalState
    };

    handleShow = () => {
        this.setState({ showModal : true })
    };

    handleClose = () => {
        this.setState({ showModal : false })
    };

    postAndClose = () => {
        this.props.clicked();
        this.handleClose();
    }

    render() {
        return(
            <Aux>
                <div style={{textAlign : 'center'}}>
                    <Button size="lg" className="btn-add" onClick={this.handleShow}>Add a Hike</Button>
                </div>
                <Modal show={this.state.showModal} onHide={this.handleClose} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Add a Hike!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <HikeSelect />
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="btn-close" onClick={this.handleClose}>Close</Button>
                        <Button className="btn-add" onClick={this.postAndClose}>Add Hike</Button>
                    </Modal.Footer>
                </Modal>
            </Aux>
        );
    };
};

export default AddHikeModal;