import { Fragment } from "react"
import styles from '../styles/Card.module.css'

export default function Card({flags, name, region}){

    const { card, img, text, text2 } = styles

    return <Fragment >
        <div className={card}>

            <img src={flags} alt="Flag not found" className={img}/>
            
            <div>

            <h4 className={text}>{name}</h4>
            <h4 className={text2}>{region}</h4>

            </div>

        </div>
    </Fragment>
}