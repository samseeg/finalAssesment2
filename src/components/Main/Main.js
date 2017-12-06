import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getBooks } from '../../ducks/users';
import {Third} from './Third/Third';
import axios from 'axios';

class Main extends Component {

    componentDidMount() {
        // console.log(this.props.getBooks)
        this.props.getBooks()
    }

    addBook() {
        axios.post('/add', {
            title: 'the walking drum',
            author: 'louis lamour',
            genre: 'adventure'
        })
            .then(response => {
                this.props.getBooks()
            })
    }

    updateBook() {
        axios.put('/update', {
            title: 'the last of the breed'
        })
            .then(response => {
                this.props.getBooks()
            })
    }

    deleteBook(id) {
        axios.delete(`/delete/:${id}`)
        .then(response => {
            this.props.getBooks()
        })
    }

    render() {
        // console.log('main test', this.props.books)
        console.log(this.props.match)
        return (
            <div>
                <Link to='/second'>Second</Link>
                <Link to='/third'>Third</Link>
                <Third hi='hi' />
                <div onClick={() => this.addBook()}>
                    add book
                    </div>
                <div onClick={() => this.updateBook()}>
                    update books
                        </div>
                {this.props.match.path}
                {this.props.books.map((item, i) => {
                    console.log('item info', item.id)
                    return (
                        <div key={i} onClick={() => this.deleteBook(item.id)}>
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

export default connect(mapStateToProps, { getBooks })(Main);