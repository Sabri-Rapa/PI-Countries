import Card from "./Card"
import {getCountries} from "../redux/actions"
import { useDispatch, useSelector } from "react-redux"
import { Fragment, useEffect } from "react"

export default function Cards(){

    let dispatch = useDispatch()
    const allCountries = useSelector(state => state.allCountries)

    useEffect(()=>{
        dispatch(getCountries())
    }, [])
 

    
    return <Fragment>
        {
            allCountries.map( c =>
            <Card id={c.alpha3Code} flags={c.flags} name={c.name} region={c.region}/>
        )}
    </Fragment>
}