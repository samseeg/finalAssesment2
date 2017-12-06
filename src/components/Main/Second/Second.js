import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Second extends Component {
    render() {
        return (
            <div>
                <Link to='/'>First</Link>
                <Link to='/third'>Third</Link>
                </div>
        )
    }
}

export default Second;