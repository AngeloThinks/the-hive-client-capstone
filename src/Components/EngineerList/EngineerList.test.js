import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import EngineerList from './EngineerList'


it('renders EngineerList without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
        <EngineerList />
    </BrowserRouter>, div)
  ReactDOM.unmountComponentAtNode(div)
})