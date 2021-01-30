import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import EngineerProfile from './EngineerProfile'


it('renders EngineerProfile without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <EngineerProfile />
    </BrowserRouter>, div)
  ReactDOM.unmountComponentAtNode(div)
})