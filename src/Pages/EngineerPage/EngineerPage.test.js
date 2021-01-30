import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import EngineerPage from './EngineerPage'


it('renders alkerPage without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <EngineerPage />
    </BrowserRouter>, div)
  ReactDOM.unmountComponentAtNode(div)
})