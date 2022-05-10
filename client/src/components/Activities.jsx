import { Fragment } from "react";
import styles from '../styles/Detail.module.css'

export default function Activities (props){
    const {activityCard} = styles

    return(
            <div className={activityCard}>      
            <h2>NAME: {props.name}</h2>
            <h3>DIFFICULTY: {props.difficulty}</h3>
            <h3>DURATION: {props.duration}</h3>
            <h3>SEASON: {props.season}</h3>
            </div>
    )
}