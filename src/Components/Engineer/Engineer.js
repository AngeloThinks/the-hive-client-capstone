import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Engineer extends Component {

    render() {
        const { engineer } = this.props
        return (
            <div className='Engineer-wrapper'>
                <li>
                    <Link to={`/EngineersProfile/${engineer.id}`}>
                        {engineer.first_name}
                    </Link>
                    <h2>Available next day</h2>
                    <p>Next day @ 7 a.m</p>
                </li>
            </div>
        )
    }
}

