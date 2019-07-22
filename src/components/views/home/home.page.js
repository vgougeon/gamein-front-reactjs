import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePage extends Component {
    state = {  }
    render() { 
        return (
            <Link to="/games">Page jeux</Link>
        );
    }
}
 
export default HomePage;