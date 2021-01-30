import config from '../config'
import TokenService from './token-service'

const EngineerApiService = {
    getAllEngineers(){
        return fetch(`${config.API_ENDPOINT}/engineer`,{
            headers:{     
            },
        })
            .then(res => 
                (!res.ok) 
                  ? res.json().then(e => Promise.reject(e))
                  :res.json()
            )
    },
    getEngineer(engineerId){
        return fetch(`${config.API_ENDPOINT}/engineer/${engineerId}`,{
            headers:{
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            },
        })
        .then(res=> 
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        )
    },

    getEngineerServices(){
        return fetch(`${config.API_ENDPOINT}/services`,{
        headers:{
            },
        })
        .then(res => 
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        )
    }
}

export default EngineerApiService