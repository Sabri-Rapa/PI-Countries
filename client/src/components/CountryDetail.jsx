import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import Detail from "./Detail"

import { countryById } from "../redux/actions"

export default function CountryDetail(){

    const countryId = useSelector(state => state.filteredCountry)
    const dispatch = useDispatch()
    const params = useParams()

    useEffect(()=> {
        dispatch(countryById(params.id))
    }, [])

    return(
        <div>
            {countryId.map( c =>
            <Detail flags={c.flags}
                    region={c.region}
                    id={c.id}
                    capital={c.capital}
                    subregion={c.subregion}
                    area={c.area}
                    population={c.population}/>
        )}
        <h3>ACTIVIDADES</h3>
        </div>
    )
}