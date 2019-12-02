import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Aux from '../../hoc/Auxillary';
import './AddHikeModal.css';
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

class AddHikeModal extends Component {

    state = {
        showModal : false
    };

    handleShow = () => {
        this.setState({ showModal : true })
    };

    handleClose = () => {
        this.setState({ showModal : false })
    };

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
                            <Form.Group>
                                <Form.Control as="select">
                                    <option>State1</option>
                                    <option>State2</option>
                                    <option>State3</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Control as="select">
                                    <option>Hike1</option>
                                    <option>Hike2</option>
                                    <option>Hike3</option>
                                </Form.Control>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="btn-close" onClick={this.handleClose}>Close</Button>
                        <Button className="btn-add">Add Hike</Button>
                    </Modal.Footer>
                </Modal>
            </Aux>
        );
    };
};

export default AddHikeModal;