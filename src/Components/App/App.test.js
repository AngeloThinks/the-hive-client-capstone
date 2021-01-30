import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { EngineerListProvider } from '../../Contexts/EngineerListContext'
import App from './App'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
      <BrowserRouter>
        <EngineerListProvider>
          <App />
        </EngineerListProvider>
      </BrowserRouter>
      , 
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})