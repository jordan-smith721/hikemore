import React, { Component } from 'react';
import Aux from '../../../hoc/Auxillary';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

const stateMap = new Map([
    ['', ''],
    ['Washington', 'https://www.hikingproject.com/data/get-trails?lat=47.5779&lon=-122.4159&maxDistance=100&key=200638014-3dd93782c23a676e212d6ae420598331&maxResults=20&sort=distance'],
    ['Oregon', 'https://www.hikingproject.com/data/get-trails?lat=45.5051&lon=-122.6750&maxDistance=25&key=200638014-3dd93782c23a676e212d6ae420598331&maxResults=20&sort=distance'],
    ['California', 'https://www.hikingproject.com/data/get-trails?lat=37.7899&lon=-122.4854&maxDistance=100&key=200638014-3dd93782c23a676e212d6ae420598331&maxResults=20&sort=distance']
]);

class HikeSelect extends Component {
    state = {
        hikes: []
    }

    getStatesHandler = () => {
        const states = [];
        const stateOptions = [];

        for (let state of stateMap.keys()) {
            states.push(state);
        }

        for (let i = 0; i < states.length; i++) {
            stateOptions.push(
                <option key={i}>{states[i]}</option>
            );
        }

        return stateOptions;
    }

    getHikesHandler = (event) => {
        const selectedState = event.target.value;

        if (selectedState == '') {
            this.setState({
                hikes: []
            })
        } else {
            axios.get(stateMap.get(selectedState))
                .then(response => {
                    this.setState({
                        hikes: response.data.trails
                    });
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }

    displayHikes = () => {
        const hikes = this.state.hikes;
        const hikeOptions = [];

        hikes.forEach(hike => {
            hikeOptions.push(
                <option key={hike.id} value={hike.id}>{hike.name}</option>
            );
        })
        return hikeOptions;
    }

    render() {
        return (
            <Aux>
                <Form.Group>
                    <Form.Label>Select a State</Form.Label>
                    <Form.Control as="select" onChange={this.getHikesHandler}>
                        {this.getStatesHandler()}
                    </Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Select a Hike</Form.Label>
                    <Form.Control as="select" id="hikes">
                        {this.displayHikes()}
                    </Form.Control>
                </Form.Group>
            </Aux>
        );
    }
}

export default HikeSelect;