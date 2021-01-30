import React, { Component } from 'react'

import EngineerApiService from '../../services/engineer-api-service';
import { Link } from 'react-router-dom'
import './Utils.css'

export class ServiceButtons extends Component {
    state = {
        engineerServices: [],
        error:null,
    }
    componentDidMount() {
        EngineerApiService.getEngineerServices()
            .then(services => {
                return this.setState({ engineerServices: services })

            })
    }
    handleSelectServiceType = (e, selected) => {
        e.preventDefault()
        this.props.serviceId(selected.id)
    }

    renderServices() {
        return this.state.engineerServices.map(engineer => {
            return <button className='service-buttons'
                onClick={(e) => this.handleSelectServiceType(e, engineer)}
                key={engineer.id} >
                <h3>{engineer.type}</h3>
                <p>{engineer.price} 30min</p>
            </button>
        })
    }

    render() {
        return (
            <div className='service-space'>
                {this.renderServices()}
            </div>
        )
    }
}


export class TimeButtons extends Component {

    handleSelectTime = (e, selected) => {
        e.preventDefault()
        this.props.timeId(selected)
    }
    renderTimeButtons() {
        let timesArray = ['7:00 a.m',
            '8:00 a.m',
            '9:00 a.m',
            '10:00 a.m',
            '11:00 a.m',
            '12:00 p.m',
            '1:00 p.m',
            '2:00 p.m',
            '3:00 p.m',
            '4:00 p.m',
            '5:00 p.m',
            '6:00 p.m',
            '7:00 p.m']

        return timesArray.map((time, key) => {
            let idNumber;
            for (let i = 1; i <= 12; i++) {
                i += idNumber
            }
            return <button className='time-buttons'  onClick={(e) => this.handleSelectTime(e, time)}
                id={idNumber}
                key={key}>
                <p>{time}</p>
            </button>
        })
    }
    render() {
        return (
            <div className='time-service-space'>
                {this.renderTimeButtons()}
            </div>
        )
    }
}



export class SideNavButton extends Component {
    state = {
        dropdownToggled: false
    }
    handleDropdownToggle = () => {
      this.setState( prevState => ({
          dropdownToggled: !prevState.dropdownToggled
      }))
      
    }
    render() {
        return (
            <div className={`SideNav-button ${this.state.dropdownToggled && 'active'}`} onClick={this.handleDropdownToggle}>
                <section className='nav-dropdown-button'>
                <div className='SideNav-button-line' />
                <div className='SideNav-button-line' />
                <div className='SideNav-button-line' />
                </section>
                <SideNavDrawer active={this.state.dropdownToggled}/>
            </div >
        )   
    }
}

export class SideNavDrawer extends Component {
    render() {
        return (
            <nav className={`side-drawer ${this.props.active && 'active'}`}>
                <ul>
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/Service">
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link to="/Engineers">
                            Engineers
                        </Link>
                    </li>
                    <li>
                        <Link to='/Profile'>
                            Profile
                        </Link>
                    </li>
                    <li>
                        <Link to="/Login">
                            Login
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={this.handleLogout}
                            to="/">
                            Logout
                        </Link>
                    </li>
                </ul>
            </nav>
        )
    }
}



export class Backdrop extends Component {
    render() {
        return (
            <div className='backdrop' />
        )
    }
}



export function ServiceList(props) {
    
     const renderServices = () => {
        return props.engineerServices.map((engineer, key) => {
            return <ul key={key}>
                <li id={engineer.id} >
                    <p>
                        {engineer.type}........{engineer.price}
                    </p>
                </li>
            </ul>

        })
    }
        return (
            <div className='serive-space'>
                {props.loader ? <Spinner/> : renderServices()}
            </div>
        )
}
export function Spinner(){
    return (
        <div className="lds-spinner"><div></div><div></div><div></div><div></div>
        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    )
}