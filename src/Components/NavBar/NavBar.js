import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { SideNavButton } from '../Utilities/Utils'
import UserContext from '../../contexts/UserContext'
import './NavBar.css'

export default class NavBar extends Component {
  static contextType = UserContext
  handleLogout = () => {
    this.context.processLogout()
  }
  render() {
    return (
      <nav className='NavBar'>
        <div className='logo'>
          <Link to="/">The Hive Audio</Link>
        </div>
        <div className='spacer' />
        <div className='right-nav'>
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
        </div>
          <SideNavButton />
        
      </nav>
    )
  }
}
