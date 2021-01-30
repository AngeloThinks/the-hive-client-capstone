import React, { Component } from 'react'
import EngineerApiService from '../../services/engineer-api-service'
import { ServiceList, Spinner } from '../../Components/Utilities/Utils'
import './ServiceMenuPage.css'

export default class ServiceMenuPage extends Component {
    state={
        engineerServices: [],
        error: null,
        loader:true
    }
    componentDidMount() {
        EngineerApiService.getEngineerServices()
            .then(services => {
                return  this.setState({
                    engineerServices: services,
                    loader: false
                })
            })
                .catch(() => {
                    this.setState({
                        loader:true,
                        error:'there was an error'
                    })
                    this.wait(5000)
                })
    }
    sleep = milliseconds => {
        return new Promise(resolve => setTimeout(resolve, milliseconds));
    };
    wait = async (milliseconds = 2000) => {
        await this.sleep(milliseconds);
        return this.state.error
    };
    render() {
        return (
            <div className='ServiceMenu-container'>
                <section className='Service-menu-list'>
                <h1> Audio Services </h1>
                    {this.state.error ?
                    <Spinner error={this.state.error}/> :
              <ServiceList {...this.state}/>}
                </section>
            </div>
        )
    }
}


