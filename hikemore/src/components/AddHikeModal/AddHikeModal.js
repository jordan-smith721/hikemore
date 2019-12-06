import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Aux from '../../hoc/Auxillary';
import './AddHikeModal.css';
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import HikeSelect from './HikeSelect/HikeSelect';
import axios from 'axios';

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

    addHike = () => {
        let hikeDropDown = document.getElementById('hikes');
        let hikeId = hikeDropDown.options[hikeDropDown.selectedIndex].value.toString();

        axios.post(
            'https://hikingapi.azurewebsites.net/api/HikeItems',
            { "toDo": hikeId, "completed": false },
            { headers: { 'Content-Type': 'application/json' } }
        );
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
                        <Button className="btn-add" onClick={this.addHike}>Add Hike</Button>
                    </Modal.Footer>
                </Modal>
            </Aux>
        );
    };
};

export default AddHikeModal;