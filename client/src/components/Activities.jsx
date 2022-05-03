import { Fragment } from "react";

export default function Activities (props){

    return(
        <Fragment>
            <h2>{props.name}</h2>
            <h3>{props.difficulty}</h3>
            <h3>{props.duration}</h3>
            <h3>{props.season}</h3>
        </Fragment>
    )
}