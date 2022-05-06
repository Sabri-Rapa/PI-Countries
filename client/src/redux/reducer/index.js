import { FILTER_ACTIVITY, SORT_POPULATION, FILTER_REGION, GET_ACTIVITIES, GET_COUNTRIES, ID_COUNTRIES, NAME_COUNTRY, SORT_NAME } from "../actions-type";

const initialState = {
    allCountries: [],
    filteredCountry: [],
    activities: [],
    filteredActivity: []
}

function rootReducer(state = initialState, action){
    switch(action.type){
        case GET_COUNTRIES:
            return {
                ...state,
                allCountries: action.payload,
                filteredCountry: action.payload
            }
        
        case ID_COUNTRIES:
            return {
                ...state,
                filteredCountry: [action.payload]
            }
        
        case NAME_COUNTRY:
            return {
                ...state,
                filteredCountry: action.payload
            }
        
        case GET_ACTIVITIES:
            return{
                ...state,
                activities: action.payload,
            }
        
        case FILTER_REGION:
            return{
                ...state,
                filteredCountry: action.payload !== 'all'? 
                                 state.allCountries.filter(r => action.payload === r.region) : 
                                 state.allCountries
            }

           
        case FILTER_ACTIVITY:
            let selected = state.allCountries.filter(c => c.activities.map(a => a.name).includes(action.payload))
            return{
                ...state,
                filteredCountry: selected
                }


        case SORT_POPULATION:
            let sortPopulation = action.payload === 'ascendent' ?
                state.allCountries.sort((a, b) => {
                    if(a.population > b.population) return 1
                    if(a.population < b.population) return -1
                    return 0
                }) :
                state.allCountries.sort((a, b) => {
                    if(a.population > b.population) return -1
                    if(a.population < b.population) return 1
                    return 0
                })
            return{
                ...state,
                allCountries: sortPopulation
                }


        case SORT_NAME:
            let sortName = action.payload === 'atoz' ?
                state.allCountries.sort((a, b) => {
                    if(a.name > b.name) return 1
                    if(a.name < b.name) return -1
                    return 0
                }) :
                state.allCountries.sort((a, b) => {
                    if(a.name > b.name) return -1
                    if(a.name < b.name) return 1
                    return 0
                })
            return{
                ...state,
                allCountries: sortName
                }
        
    
        default: return state;
    }
}

export default rootReducer;


