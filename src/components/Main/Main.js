import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Main extends Component {
    render() {
        return (
            <div>
                <Link to='/second'>Second</Link>
                <Link to='/third'>Third</Link>
                </div>
        )
    }
}

export default Main;