import React, { Component } from 'react'

const AppointmentContext = React.createContext({
  engineerInfo: [],
  serviceSelected: '',
  timeSelected: '',
  error: null,
  delete: () => { },
  setError: () => { },
  clearError: () => { },
  setEngineerInfo: () => { },
  setSelectTime: () => { },
  setServiceType: () => { }
})
export default AppointmentContext
export  class AppointmentProvider extends Component {
  state = {
    engineerInfo: [],
    serviceSelected: '',
    timeSelected: '',
    error: null,
    }

  
  setEngineerInfo = engineerInfo => {
    this.setState({ engineerInfo })
  }
  setServiceType = serviceSelected => {
    return this.setState({ serviceSelected})
  }
  setSelectTime = timeSelected => {
    return this.setState({ timeSelected})
  }
  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  render() {
    const { engineerInfo,
      serviceSelected,
      timeSelected,
      error,
      
    } = this.state

    const value = {
      engineerInfo,
      serviceSelected,
      timeSelected,
      error,
      setEngineerInfo: this.setEngineerInfo,
      setServiceType: this.setServiceType,
      setTimeSelected : this.setTimeSelected,
      setError: this.setError,
      clearError: this.clearError
    }
    return (
      <AppointmentContext.Provider value={value}>
        {this.props.children}
      </AppointmentContext.Provider>
    )
  }
}
