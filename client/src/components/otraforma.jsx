import Card from "./Card"
import {getCountries} from "../redux/actions"
import { useDispatch, useSelector } from "react-redux"
import { Fragment, useEffect, useState } from "react"

export default function Cards(){

    let dispatch = useDispatch()
    const allCountries = useSelector(state => state.filteredCountry)

    const [pages, setPages] = useState(0)
    const [order, setOrder] = useState('ASC')
    const [filter, setFiltro] = useState('')

    useEffect(()=>{
        dispatch(getCountries(pages,order, filter))
    }, [dispatch])
 
    const handleClick = (e) => {
        e.preventDefault();
        dispatch(getCountries(pages,order, filter))
    }

    const prev = e => {
        e.preventDefault();
        if(pages <= 0) setPages(0)
        else setPages(pages - 10)
    };

    const next = e =>{
        e.preventDefault();
        if(allCountries.length < 10) return;
        else setPages(pages + 10);
    };


    const changeOrder = e =>{
        e.preventDefault();
        setOrder(e.target.value)
    }

    const changeFilter = e =>{
        e.preventDefault();
        setFiltro(e.target.value)
    }
    
    
    return (<Fragment>
        <button onClick={handleClick}>volver a cargar</button>
        {
            currentCountries.map( c =>
            <Card key={c.alpha3Code} id={c.alpha3Code} flags={c.flags} name={c.name} region={c.region}/>
        )}

        <button onClick={e=>prev(e)} disabled={pages <= 0}>PREV</button>
        <button onClick={e=>next(e)} disabled={allCountries.length<10}>NEXT</button>

    </Fragment>)
}   