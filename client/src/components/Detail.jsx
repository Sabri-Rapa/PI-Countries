export default function Detail(props){
    return(
        <div>
            <img src={props.flags} alt="Flag not found"/>
            <h2>{props.name}</h2>
            <h3>REGION: {props.region}</h3>
            <h3>CAPITAL: {props.capital}</h3>
            <h3>SUBREGION: {props.subregion}</h3>
            <h3>AREA: {props.area}</h3>
            <h3>POPULATION: {props.population}</h3>
            <h3>CODE: {props.code}</h3>
            <h3>ACTIVITIES: {props.activities}</h3>
        </div>
    )
}