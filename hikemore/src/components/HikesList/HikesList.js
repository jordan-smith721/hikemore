import React, { Component } from 'react';
import Aux from '../../hoc/Auxillary';
import './HikesList.css';
import CompletedHike from './CompletedHike/CompletedHike';
import TodoHike from './TodoHike/TodoHike';
import Nav from 'react-bootstrap/Nav';


class HikesList extends Component {

    state = {
        view : 'todo',
    };

    handleTodoClick= () => {
       this.setState({view : 'todo'});
    };

    handleCompletedClick = () => {
        this.setState({view: 'completed'});
    }


    render() {

        return (
            <Aux>
                <Nav variant="tabs" defaultActiveKey="todo-link">
                    <Nav.Item>
                        <Nav.Link eventKey="todo-link" className="tab" onClick={this.handleTodoClick}>Todo</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="completed-link" className="tab" onClick={this.handleCompletedClick}>Completed</Nav.Link>
                    </Nav.Item>
                </Nav>
                <section>
                    {this.state.view === 'todo' ? <TodoHike />: <CompletedHike />}  
                </section>
                
            </Aux>  
        );
    };
};

export default HikesList;