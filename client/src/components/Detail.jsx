export default function Detail(props){
    return(
        <div>
            <img src={props.flags} alt="Flag not found"/>
            <h2>{props.name}</h2>
            <h3>{props.region}</h3>
            <h3>{props.capital}</h3>
            <h3>{props.subregion}</h3>
            <h3>{props.area}</h3>
            <h3>{props.population}</h3>
            <h3>{props.code}</h3>
            <h3>{props.activities}</h3>
        </div>
    )
}