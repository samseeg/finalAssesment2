import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {getBooks} from '../../ducks/users';
import Third from './Third/Third';

class Main extends Component {

    componentDidMount() {
        // console.log(this.props.getBooks)
        this.props.getBooks()
    }

    render() {
        console.log('main test', this.props.books)
        return (
            <div>
                <Link to='/second'>Second</Link>
                <Link to='/third'>Third</Link>
                <Third/>
                {this.props.match.path}
                {this.props.books.map((item, i) => {
                    return (
                        <div key={i}>
                        {item.title}
                            </div>
                    )
                })}
                </div>
        )
    }
}

function mapStateToProps(state) {
    return {
    books: state.books
    }
}

export default connect(mapStateToProps, {getBooks})(Main);