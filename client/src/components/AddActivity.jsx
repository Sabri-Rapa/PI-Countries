import axios from "axios";
import { Fragment, useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getCountries } from "../redux/actions";
import styles from '../styles/AddActivity.module.css'


function validation(activity){
    let errors = {}

    if(!activity.name) errors.name = 'Name of the activity is required';
    else if(!/^[A-Za-z0-9]*$/.test(activity.name)) errors.name = 'Name cannot contain symbols'
    else if(!/^[a-zA-Z\ áéíóúÁÉÍÓÚñÑ\s]*$/.test(activity.name.trim())) errors.name = 'Name cannot contain numbers';
    else if(activity.name.length < 3) errors.name = 'Name must have at least three letters';
    else if(activity.difficulty.length === 0) errors.difficulty = 'Difficulty is required';
    else if(!activity.duration) errors.duration = 'You must specify a duration'
    else if(!/^[0-9]*$/.test(activity.duration)) errors.duration = 'Duration must be a number'
    else if(activity.duration > 72) errors.duration = 'Duration must be between 1 and 72 hours'
    else if(!activity.season) errors.season = 'Season is required';
    else if(activity.country.length < 1) errors.country = 'You must select at least one country';

    return errors
}


export default function AddActivity (){

    const { container, input, backHome, h1, errorStyle, countries, divButton, options, divOptions, buttonCreate } = styles

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [activity, setActivity] = useState({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        country: []
    })

    const [errors, setErrors] = useState({})
    const allCountries = useSelector(state => state.allCountries)

    
    useEffect(()=>{
        dispatch(getCountries())
    }, [dispatch])


    async function onSubmit(e){
        e.preventDefault();
        setErrors(validation(activity))


        if(!activity.name) return alert('Name of the activity is required');
        else if(!/^[A-Za-z0-9]*$/.test(activity.name)) return alert('Name cannot contain symbols')
        else if(!/^[a-zA-Z\ áéíóúÁÉÍÓÚñÑ\s]*$/.test(activity.name.trim())) return alert('Name cannot contain numbers');
        else if(activity.name.length < 3) return alert ('Name must have at least three letters');
        else if(activity.difficulty.length === 0) return alert('Difficulty is required');
        else if(!activity.duration) return alert('You must specify a duration')
        else if(!/^[0-9]*$/.test(activity.duration)) return alert('Duration must be a number')
        else if(activity.duration > 72) return alert('Duration must be between 1 and 72 hours')
        else if(!activity.season) return alert ('Season is required');
        else if(activity.country.length === 0) return alert('At least one country must be selected')

        
        await axios.post('http://localhost:3001/api/activity', activity)
        alert('Activity was added')
        setActivity({
            name: '',
            difficulty: '',
            duration: '',
            season: '',
            country: []
        })
        navigate('/home')
    }



    function handleState(e){
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

        let objErrors = validation({...activity, [e.target.name]: e.target.value})
        setErrors(objErrors)
        
    }

    function handleDelete(elem){
        setActivity({
            ...activity,
            country: activity.country.filter(country => country !== elem)
        })

    }


    return(
        <div >


        <h1 className={h1}>Add an activity</h1>
            <div className={container}>
            <br/>


        <form onSubmit={onSubmit}>
        <div>
            <div >
                <label className={input}>NAME</label>
                <input name='name'
                    onChange={handleState}
                    value={activity.name}/>
                    {errors.name?  <h4 className={errorStyle}><small>{errors.name}</small></h4> : false}
            </div>

            <br/>
            <div className={divOptions}>
                <label className={input}>DIFFICULTY</label>
                <div className={options}>
                <label><input type='radio'
                       name='difficulty'
                       value='1'
                       onChange={handleState}></input>1</label>
                <label><input type='radio'
                       name='difficulty'
                       value='2'
                       onChange={handleState}></input>2</label>
                <label><input type='radio'
                       name='difficulty'
                       value='3'
                       onChange={handleState}></input>3</label>
                <label><input type='radio'
                       name='difficulty'
                       value='4'
                       onChange={handleState}></input>4</label>
                <label><input type='radio'
                       name='difficulty'
                       value='5'
                       onChange={handleState}></input>5</label>
                </div>
                    {errors.difficulty ? <h4 className={errorStyle}><small>{errors.difficulty}</small></h4> : false}
            </div>

            <br/>

            <div>
                <label className={input}>DURATION</label>
                <input name='duration' placeholder='Hours' onChange={handleState} value={activity.duration}/>
                {errors.duration ? <h4 className={errorStyle}><small>{errors.duration}</small></h4> : false}
            </div>
                
            <br/>

            <div className={divOptions}>
                <label className={input}>SEASON</label>
                <div className={options}>
               <input type='radio'
                       name='season'
                       value='Summer'
                       onChange={handleState}/>Summer
                <input type='radio'
                       name='season'
                       value='Winter'
                       onChange={handleState}/>Winter
                <input type='radio'
                       name='season'
                       value='Spring'
                       onChange={handleState}/>Spring
                <input type='radio'
                       name='season'
                       value='Autumn'
                       onChange={handleState}/>Autumn
                </div>
                {errors.season ? <h4 className={errorStyle}><small>{errors.season}</small></h4> : false}
            </div>

            <br/>

            <div>
                <label className={input}>COUNTRIES</label>
                    <select name='country'
                            value={activity.country}
                            onChange={handleCountries}
                            multiple={false} >
                    <option hidden={true}>Select...</option>
                                
                        {
                        allCountries.map(country =>{
                            return <option key={country.alpha3Code} value={country.name}>{country.name}</option>
                            })
                        }
                        
                    </select>
                {errors.country? <h4 className={errorStyle}><small>{errors.country}</small></h4> : false}
            </div>
            <br/>
            {activity.country.map( elem => 
                        <div key={elem} className={divButton}>
                        <button className={countries} onClick={()=>handleDelete(elem)}>{elem}</button>
                        </div>)}

                        <br/>
            </div>
            <button className={buttonCreate} type='submit' disabled={Object.keys(errors).length > 0}>Create Activity!</button>
            <br/>
            <br/>

            <Link to='/home'><button className={backHome}>Back to home</button></Link>
        </form>
        </div>

        </div>           
)}