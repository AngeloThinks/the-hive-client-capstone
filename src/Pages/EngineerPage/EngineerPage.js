import React, { Component } from 'react'
import EngineerList from '../../Components/EngineerList/EngineerList'
import './EngineerPage.css'

export default class EngineerPage extends Component {

    render() {
        return (
            <div className='profile-container'>
                <section className='Engineer-section'>

                    <h1>Get Your Music Out to the People</h1>
                    <p> We have a team of very talented individuals to accommodate you!</p>
                    <p>Our team provides you with years of experience in the music industry.</p>
                    <p>We recognize that not everyone wants to sit next to an engineer during their appointment.</p>
                    <p>We can schedule a zoom appointment by request. </p>
                    <EngineerList />
                </section>
            </div>
        )
    }
}
