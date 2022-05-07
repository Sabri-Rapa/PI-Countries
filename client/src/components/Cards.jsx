import Card from "./Card"
import {getCountries, sortByName, sortByPopulation} from "../redux/actions"
import { useDispatch, useSelector } from "react-redux"
import { Fragment, useEffect, useState } from "react"
import Pagination from "./Pagination"

export default function Cards(){

    let dispatch = useDispatch()
    
    const allCountries = useSelector(state => state.filteredCountry)

    // ------PAGINADO-----------------------------------------------------
    const [currentPage, setCurrentPage] = useState(1)
    const [countriesPerPage,setCountriesPerPage] = useState(9)
    const numberOfLastCountry = currentPage * countriesPerPage
    const numberOfFirstCountry = numberOfLastCountry - countriesPerPage
    const currentCountries = allCountries.slice(numberOfFirstCountry, numberOfLastCountry)

    const [order, setOrder] = useState('')

    const pagination = (pageNumber) =>{
        setCurrentPage(pageNumber)
        if(pageNumber === 1) setCountriesPerPage(9)
        else if(pageNumber !== 1) setCountriesPerPage(10)
    }


    useEffect(()=>{
        dispatch(getCountries())
    }, [dispatch])

    function handleSortName(e){
        e.preventDefault();
        dispatch(sortByName(e.target.value))
        setCurrentPage(1);
        setOrder(`Ordenado ${e.target.value}`)
    }


    function handleSortPopulation(e){
        e.preventDefault();
        dispatch(sortByPopulation(e.target.value))
        setCurrentPage(1);
        setOrder(`Ordenado ${e.target.value}`)
    }

    
    return (<Fragment>

            <select onChange={handleSortName}>
                <option hidden={true}>Sort alphabetically</option>
                <option value="atoz">A to Z</option>
                <option value="ztoa">Z to A</option>
            </select>


            <select onChange={handleSortPopulation}>
                <option hidden={true} >Sort by population</option>
                <option value="ascendent">Ascendant</option>
                <option value="descendant">Descendant</option>
            </select>


        <Pagination countriesPerPage={countriesPerPage}
                    allCountries={allCountries.length}
                    pagination={pagination}
                    currentPage={currentPage}/>

        {!currentCountries.length ? <h1>LOADING</h1> :
            currentCountries.map( c =>
            <Card key={c.alpha3Code}
                  id={c.alpha3Code}
                  flags={c.flags}
                  name={c.name}
                  region={c.region}/> 
        )}

        
    </Fragment>)
}