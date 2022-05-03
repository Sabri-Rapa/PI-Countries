import axios from "axios";
import { Fragment, useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getCountries } from "../redux/actions";


function validation(activity){
    let errors = {}

    if(!activity.name) errors.name = 'Name of the activity is required';
    else if(activity.difficulty.length === 0) errors.difficulty = 'Difficulty is required';
    else if(!activity.duration) errors.duration = 'You must specify a duration'
    else if(isNaN(activity.duration)) errors.duration = 'Duration must be a number'
    else if(!activity.season) errors.season = 'Season is required';
    else if(!activity.country) errors.country = 'You must select at least one country';

    return errors
}


export default function AddActivity (){
    let dispatch = useDispatch()

    const [activity, setActivity] = useState({
        name: '',
        difficulty: [],
        duration: '',
        season: [],
        country: []
    })

    const [errors, setErrors] = useState({})
    const [enableButton, setEnableButton] = useState(Object.keys(errors).length === 0 ? false : true)
    const allCountries = useSelector(state => state.allCountries)

    
    useEffect(()=>{
        dispatch(getCountries())
    }, [dispatch])


    async function onSubmit(e){
        e.preventDefault();
        setErrors(validation(activity))
        await axios.post('http://localhost:3001/api/activity', activity)

        setActivity({
            name: '',
            difficulty: '',
            duration: '',
            season: [],
            country: []
        })
        alert('Activity was added')
    }

    function handleChange(e){
        setActivity({
            ...activity,
            [e.target.name]: e.target.value
        })

        let objErrors = validation({...activity, [e.target.name]: e.target.value})
        setErrors(objErrors)
    }

    function handleCountries(e){
        setActivity({
            ...activity,
            country: [...new Set([...activity.country, e.target.value])]
        })

        // let objErrors = validation({activity.country})
        // setErrors(objErrors)
    }

    function handleSelect(e){
        setActivity({
            ...activity,
            [e.target.name]: e.target.value
        })
    }


    //placeholder

    return(
    <Fragment >
        <form onSubmit={onSubmit}>
            <div>
                <label>Name:</label>
                <input name='name'
                    onChange={handleChange}
                    value={activity.name}/>
                    {errors.name ? <h4><small>{errors.name}</small></h4> : false}
            </div>
            
            <div>
                <label>Difficulty:</label>
                    <select name='difficulty'
                            value={activity.difficulty}
                            onChange={handleSelect}>
                        <option value='1'>1</option>
                        <option value='2'>2</option> 
                        <option value='3'>3</option> 
                        <option value='4'>4</option>
                        <option value='5'>5</option> 
                    </select>
                    {errors.difficulty ? <h4><small>{errors.difficulty}</small></h4> : false}
            </div>


            <div>
                <label>Duration:</label>
                <input name='duration' placeholder='Hours' onChange={handleChange} value={activity.duration}/>
                {errors.duration ? <h4><small>{errors.duration}</small></h4> : false}
            </div>

                <label>Season:</label>
                    <select name='season'
                            value={activity.season}
                            onChange={handleSelect}>
                        <option hidden={true}>Select...</option>
                        <option value='Summer'>Summer</option>
                        <option value='Winter'>Winter</option> 
                        <option value='Spring'>Spring</option> 
                        <option value='Autumn'>Autumn</option> 
                    </select>

            <div>
                <label>Countries:</label>
                    <select name='country'
                            value={activity.country}
                            onChange={handleCountries} >
                    <option hidden={true}>Select...</option>
                                
                        {
                        allCountries.map(country =>{
                            return <option>{country.name}</option>
                            })
                        }
                        
                    </select>
                {errors.country}
            </div>
            <button type='submit' disabled={enableButton}>Create Activity!</button>
            <Link to='/countries'><button>Back to home</button></Link>
        </form>
    </Fragment>
)}