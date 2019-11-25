import React, { Component } from 'react';
import Aux from '../../hoc/Auxillary';
import './HikesList.css';
import CompletedHike from './CompletedHike/CompletedHike';
import TodoHike from './TodoHike/TodoHike';

class HikesList extends Component {

    state = {
        view : 'todo'
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
                <div className="tabs">
                    <button className="tab" onClick={this.handleTodoClick}>Todo</button>
                    <button className="tab" onClick={this.handleCompletedClick}>Completed</button>
                </div>
                <div>
                    {this.state.view === 'todo' ? <TodoHike /> : <CompletedHike />}  
                </div>
            </Aux>  
        );
    };
};

export default HikesList;