import { Fragment } from "react";

export default function Activities (props){

    return(
        <Fragment>
            <h2>NAME: {props.name}</h2>
            <h3>DIFFICULTY: {props.difficulty}</h3>
            <h3>DURATION: {props.duration}</h3>
            <h3>SEASON: {props.season}</h3>
        </Fragment>
    )
}