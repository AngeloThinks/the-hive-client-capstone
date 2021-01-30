import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { EngineerListProvider } from './contexts/EngineerListContext'
import { UserProvider } from './contexts/UserContext'
import { AppointmentProvider } from './contexts/AppointmentContext'
import App from './Components/App/App';
import './index.css';


ReactDOM.render(
    <BrowserRouter>
        <UserProvider>
            <EngineerListProvider>
                <AppointmentProvider>
                    <App />
                </AppointmentProvider>
            </EngineerListProvider>
        </UserProvider>
    </BrowserRouter>
    , document.getElementById('root'));
