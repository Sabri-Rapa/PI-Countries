import { GET_COUNTRIES, ID_COUNTRIES, NAME_COUNTRY } from "../actions-type";

const initialState = {
    allCountries: [],
    filteredCountry: []
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
        
        default: return state;
    }
}

export default rootReducer;