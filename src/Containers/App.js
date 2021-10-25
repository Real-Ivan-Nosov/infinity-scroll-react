import React, {Component} from 'react';
import Header from '../Components/Header';
import ScrollBoundary from './ScrollBoundary';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: ''
        }
    }

    render() {
        return (
            <>
                <Header />
                <ScrollBoundary />  
            </>
        )
    }
}

export default App;