import { FILTER_ACTIVITY, FILTER_REGION, GET_ACTIVITIES, GET_COUNTRIES, ID_COUNTRIES, NAME_COUNTRY } from "../actions-type";

const initialState = {
    allCountries: [],
    filteredCountry: [],
    activities: [],
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
                filteredActivity: action.payload
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
    
        default: return state;
    }
}

export default rootReducer;


// let selected = state.allCountries.filter(c => c.activities.map(a => a.name).includes(action.payload)
