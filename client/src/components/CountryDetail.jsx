import { useEffect, Fragment } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import Detail from "./Detail"
import { countryById } from "../redux/actions"
import Activities from "./Activities"

export default function CountryDetail(){
    const countryId = useSelector(state => state.filteredCountry)
   
    const dispatch = useDispatch()
    const params = useParams()

    useEffect(()=> {
        dispatch(countryById(params.id))
    }, [dispatch, params.id])

    let activities = countryId.map(a => a.activities)
    activities = activities.flat()

    return(<Fragment>

        { !countryId.length ? <h1>LOADING</h1> :
        countryId.map( c => 
            <Detail key={c.alpha3Code}
                    flags={c.flags}
                    name={c.name}
                    region={c.region}
                    capital={c.capital}
                    subregion={c.subregion}
                    area={c.area}
                    population={c.population}
                    code={c.alpha3Code}
          />)}

        {activities.length?
        activities.map((ac, index) => <Activities key={index}
                                                  name={ac.name} 
                                                  difficulty={ac.difficulty}
                                                  duration={ac.duration}
                                                  season={ac.season}/>)  :
        <p style={{fontSize: '20px'}}>No activities added</p>}



        <Link to='/home'>BACK TO HOME</Link>

        <br/>
        
    </Fragment>)
}