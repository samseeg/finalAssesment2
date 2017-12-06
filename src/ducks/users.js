import axios from 'axios';

const initialState = {
    user: {},
    books: []
}

const GET_USER_INFO = 'GET_USER_INFO';
const GET_BOOKS = 'GET_BOOKS';

export function getUserInfo() {
    const userData = axios.get('/auth/me')
        .then(res => {
            return res.data
        })
    return {
        type: GET_USER_INFO,
        payload: userData
    }
}

export function getBooks() {
    const bookData = axios.get('/books')
    .then(res => {
        return res.data
    })
    return {
        type: GET_BOOKS,
        payload: bookData
    }
}


export default function reducer(state = initialState, action) {
    // console.log(action)
    switch (action.type) {
        case GET_USER_INFO + '_FULFILLED':
            // console.log(this.state.user)
            return Object.assign({}, state, { user: action.payload })

            case GET_BOOKS + '_FULFILLED':
            return Object.assign({}, state, { books: action.payload })

        default:
            return state;
    }
}