import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import LandingPage from '../LandingPage/LandingPage'


it('renders LandingPage without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <LandingPage />
    </BrowserRouter>, div)
  ReactDOM.unmountComponentAtNode(div)
})