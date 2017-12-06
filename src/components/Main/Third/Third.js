import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Third extends Component {
    render() {
        return (
            <div>
                <Link to='/'>First</Link>
                <Link to='/second'>Second</Link>
                </div>
        )
    }
}

export default Third;