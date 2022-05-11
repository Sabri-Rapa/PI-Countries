import styles from "../styles/Detail.module.css";


export default function Detail(props) {
  const { h2, card, image, detail, dataDetail } = styles;



  return (
    <div className={card}>
      <h2 className={h2}>{props.name}</h2>
      <div className={dataDetail}>
        <img src={props.flags} alt="Flag not found" className={image} />

        <div className={detail}>
          <h3>REGION: {props.region}</h3>
          <h3>CAPITAL: {props.capital}</h3>
          <h3>SUBREGION: {props.subregion}</h3>
          <h3>AREA: {props.area}</h3>
          <h3>POPULATION: {props.population}</h3>
          <h3>CODE: {props.code}</h3>
        </div>
      </div>
    </div>
  );
}
