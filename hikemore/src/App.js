import React, { Component } from 'react';
import './App.css';
import Layout from './Layout/Layout';
import HikesList from './components/HikesList/HikesList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Aux from './hoc/Auxillary';
import Splash from './components/Splash/Splash';

class App extends Component {

  state = {
    splash : true
  };

  toggleSplash = () => {
    this.setState({
      splash : false
    });
  };

  render() {
    return (
      <Aux>
        { this.state.splash ? <Splash clicked={this.toggleSplash} /> : 
        
        <Layout>
         <HikesList />
        </Layout>
        
        }
      </Aux>
    );
  } 
}

export default App;
