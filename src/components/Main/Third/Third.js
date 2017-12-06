import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


export const Third = (props) => {
    console.log(props)
        return (
            <div>
                <Link to='/'>First</Link>
                <Link to='/second'>Second</Link>
                {props.hi}
            </div>
        )
}
