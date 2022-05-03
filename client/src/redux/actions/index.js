import axios from 'axios';
import { GET_COUNTRIES, ID_COUNTRIES, NAME_COUNTRY, GET_ACTIVITIES, FILTER_REGION, FILTER_ACTIVITY} from '../actions-type';

/* export function getCountries(){
    return async function (dispatch){
    let response = await axios.get('http://localhost:3001/countries');
    return dispatch({
        type: GET_COUNTRIES,
        payload: response.data
    })
}} */

export function getCountries (){
    return function(dispatch){
        axios.get('http://localhost:3001/api/countries')
        .then(response => {
            dispatch({
                type: GET_COUNTRIES,
                payload: response.data
            })
       })
       .catch(error => console.log(error))
    }}

export function countryById(id){
    return function(dispatch){
        axios.get(`http://localhost:3001/api/countries/${id}`)
        .then(response => {
            dispatch({
                type: ID_COUNTRIES,
                payload: response.data
            })
        })
        .catch(error => console.log(error))
    }}

export function countryByName(name){
    return function(dispatch){
    axios.get(`http://localhost:3001/api/countries?name=${name}`)
    .then(response =>{
        dispatch({
            type: NAME_COUNTRY,
            payload: response.data
        })
    })
    .catch(error => console.log(error))
}}

export function getActivities(){
    return function (dispatch){
        axios.get('http://localhost:3001/api/activity/all')
        .then(response =>{
            dispatch({
                type: GET_ACTIVITIES,
                payload: response.data
            })
        })
    }
}

export function filterByRegion(region){
    return {
        type: FILTER_REGION,
        payload: region,
    }
}

export function filterByActivity(activity){
    return {
        type: FILTER_ACTIVITY,
        payload: activity,
    }
}