import { Fragment } from "react"
import { Link } from "react-router-dom"

export default function Card({id, flags, name, region}){

    return <Fragment>
        <img src={flags} alt="Flag not found" width={200} height={160}/>
        <Link to={`/countries/${id}`}><h2>{name}</h2></Link>
        <h4>{region}</h4>
    </Fragment>
}