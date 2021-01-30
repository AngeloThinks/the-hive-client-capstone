import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import  Engineer from './Engineer'



it('renders Engineer without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <Engineer  engineer={{engineer:{}}}/>
    </BrowserRouter>, div)
  ReactDOM.unmountComponentAtNode(div)
})
