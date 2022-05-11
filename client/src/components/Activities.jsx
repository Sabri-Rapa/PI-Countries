import styles from '../styles/Detail.module.css'


export default function Activities (props){
    const {activityCard, x} = styles

    return(
            <div className={activityCard}>
    
            <button className={x}
                    onClick={props.onClose}>X</button>  
            <div>
            <h2>NAME: {props.name}</h2>
            <h3>DIFFICULTY: {props.difficulty}</h3>
            <h3>DURATION: {props.duration}</h3>
            <h3>SEASON: {props.season}</h3>
            </div>
            </div>
    )
}