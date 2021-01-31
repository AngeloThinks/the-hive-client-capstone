import React ,{useContext} from 'react'
import TokenService from '../../services/token-service'
import UserContext from '../../contexts/UserContext'
import { Link, Redirect } from 'react-router-dom'

export default function LandingPage() {
  // eslint-disable-next-line no-unused-vars
  const userContext = useContext(UserContext)
    return (
      <div className='homePage-container'>
        {TokenService.hasAuthToken() ? <Redirect to="/homePage" /> : <></>}
        <section className='title'>
        <h1> The Hive</h1>
        {/* <h3>Some features may not be available in demo mode</h3> */}
        
        <p>
        We are Audio Engineers and Producers that help musicians get their music out to the people! <br />
        Once logged in you'll be able to select from one of our Audio Engineers.
        Just select the name of the Engineer, pick your Service and Time, then check your profile.
        Your appointment will be updated! So Login or Sign up and we can take care of your incomplete albums!
         </p> 
          <div className='homePagebutton-container'>
            <button className='homePage-button'>
              <Link to="/Login">
                Login
              </Link>
            </button>
            <button className='homePage-button'>
              <Link to="/Register">
                Register
              </Link>
            </button>
          </div>
        </section>
      </div>
    )
}
