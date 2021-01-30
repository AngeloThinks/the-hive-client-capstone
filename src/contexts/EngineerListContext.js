import React, { Component } from 'react'

const EngineerListContext = React.createContext({
    engineerList: [],
    error: null,
    setError: () => { },
    clearError: () => { },
    setEngineerList: () => { }
})
export default EngineerListContext
export class EngineerListProvider extends Component {
    state = {
        engineerList: [],
        error: null,
    }
    setEngineerList = engineerList => {
        this.setState({ engineerList })
    }
    setError = error => {
        console.error(error)
        this.setState({ error })
    }

    clearError = () => {
        this.setState({ error: null })
    }

    render() {
        const { engineerList,
                error,
               } = this.state
        
        const value = {
            engineerList,
            error,
            setEngineerList:this.setEngineerList,
            setError:this.setError,
            clearError:this.clearError
        }
        return (
            <EngineerListContext.Provider value={value}>
               {this.props.children}
            </EngineerListContext.Provider>
        )
    }
}
