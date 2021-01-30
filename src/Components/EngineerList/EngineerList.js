import React, { Component } from 'react'

import EngineerListContext from '../../contexts/EngineerListContext'
import Engineer from '../Engineer/Engineer'
import EngineerApiService from '../../services/engineer-api-service'
import { Spinner } from '../Utilities/Utils'

export default class EngineerList extends Component {
    static contextType = EngineerListContext
    state = {
        error: null,
        loader: true
    }
    componentDidMount() {
        EngineerApiService.getAllEngineers()
            .then(data => {
                this.context.setEngineerList(data)
                this.setState({
                    loader: false
                })
            })
            .catch(err => {
                this.context.setError(err)
                this.wait()
            })
    }
    sleep = milliseconds => {
        return new Promise(resolve => setTimeout(resolve, milliseconds));
    };
    wait = async (milliseconds = 2000) => {
        await this.sleep(milliseconds);
    };
    renderEngineers() {
        const { engineerList = [] } = this.context
        return engineerList.map(engineer =>
            <Engineer
                key={engineer.id}
                engineer={engineer}
            />
        )
    }
    render() {
        const { error } = this.context
        return (
            <div>
                {this.state.loader ? <Spinner /> : <ul className='EngineerList'>
                    {error ?
                        <p >There was and error,try again later</p>
                        : this.renderEngineers()}
                </ul>}
            </div>
        )
    }
}
