import styles from '../styles/Detail.module.css'

export default function Detail(props){

    const {h2, card, image} = styles

    return(
        <div className={card}>
            <h2 className={h2}>{props.name}</h2>
            <img src={props.flags} alt="Flag not found" className={image}/>
            <h3>REGION: {props.region}</h3>
            <h3>CAPITAL: {props.capital}</h3>
            <h3>SUBREGION: {props.subregion}</h3>
            <h3>AREA: {props.area}</h3>
            <h3>POPULATION: {props.population}</h3>
            <h3>CODE: {props.code}</h3>
        </div>
    )
}