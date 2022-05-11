import Card from "./Card"
import {getCountries, sortByName, sortByPopulation, filterByRegion, filterByActivity, getActivities, countryByName} from "../redux/actions"
import { useDispatch, useSelector } from "react-redux"
import { Fragment, useEffect, useState } from "react"
import Pagination from "./Pagination"
import { Link } from "react-router-dom"
import styles from '../styles/Cards.module.css'

export default function Cards(){
    const { container, h1, button, buttonTwo, contentSelect, loading } = styles

    let dispatch = useDispatch()
    
    const allCountries = useSelector(state => state.filteredCountry)
    const activities = useSelector(state => state.activities)


    // ------PAGINADO-----------------------------------------------------
    const [currentPage, setCurrentPage] = useState(1)
    const [countriesPerPage,setCountriesPerPage] = useState(9)
    const numberOfLastCountry = currentPage * countriesPerPage
    const numberOfFirstCountry = numberOfLastCountry - countriesPerPage
    const currentCountries = allCountries.slice(numberOfFirstCountry, numberOfLastCountry)

    const [order, setOrder] = useState('')
    const [inputSearchBar, setInputSearchBar] = useState('')


    const pagination = (pageNumber) =>{
        setCurrentPage(pageNumber)
        if(pageNumber === 1) setCountriesPerPage(9)
        else if(pageNumber !== 1) setCountriesPerPage(10)
    }
 
    // -----------------------------------------------------------------------------------



    useEffect(()=>{
        dispatch(getCountries())
        dispatch(getActivities())
    }, [dispatch])



    function onSubmitSearchbar(e){
        e.preventDefault();
        setCurrentPage(1);
        dispatch(countryByName(inputSearchBar))
        setInputSearchBar('')
      }
  
  
      function onInputChangeSearchbar(e){
          e.preventDefault();
          setInputSearchBar(e.target.value)
      }
  

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


     function handleSelectActivity(e){
        setCurrentPage(1)
        dispatch(filterByActivity(e.target.value))
    }

    let oneActivity = activities.map(item=>{
        return [item.name,item]});
    let activitiesMapArr = new Map(oneActivity); // Pares de clave y valor
    let oneActivityPerName = [...activitiesMapArr.values()]; // Conversión a un array



    let region;
    region = Array.from( region = new Set(allCountries.map(c => c.region)))

     function handleSelectRegion(e){
         e.preventDefault()
         setCurrentPage(1)
         dispatch(filterByRegion(e.target.value))
     }




    function handleRemove(e){
        e.preventDefault();
        setCurrentPage(1)
        dispatch(getCountries())
    }

    return (<Fragment>

        <h1 className={h1}>DISCOVER THE WORLD</h1>


        <br/>
            
        <form onSubmit={onSubmitSearchbar}>
            <input type="text" onChange={onInputChangeSearchbar} value={inputSearchBar}/>
            <input className={button} type="submit" value="Search country"/>
        </form>

        <br/>

        <div className={contentSelect}>
        <select name='region' onChange={handleSelectRegion}>
            <option hidden={true}>Select REGION</option>
            <option value='all'>ALL REGIONS</option>
            {region.map(r =>{
            return <option key={r} value={r}>{r}</option>})}
        </select>
        </div>


        <div className={contentSelect}>
        <select name='activities' onChange={handleSelectActivity}>
            <option hidden={true}>Select ACTIVITY</option>
            {oneActivityPerName.length?
            oneActivityPerName.map( a => {return <option key={a.id}>{a.name}</option>} ) : 
                                         <option >No activities created</option>}        
        </select>
        </div>

        <br/>
        <br/>


        <div className={contentSelect}>
        <select onChange={handleSortName}>
            <option hidden={true}>Sort alphabetically</option>
            <option value="atoz">A to Z</option>
            <option value="ztoa">Z to A</option>
        </select>
        </div>


        <div className={contentSelect}>
        <select onChange={handleSortPopulation}>
            <option hidden={true} >Sort by population</option>
            <option value="ascendent">Ascendant</option>
            <option value="descendant">Descendant</option>
        </select>
        </div>

            <br/>        <br/>


        <button className={button} onClick={handleRemove}>Remove filters</button>

        <br/>
        <br/>



        <Link to='/activity'><button className={buttonTwo}>CREATE ACTIVITY</button></Link>


        <Pagination countriesPerPage={countriesPerPage}
                    allCountries={allCountries.length}
                    pagination={pagination}
                    currentPage={currentPage}/>
        
        <div className={container}>

        {!currentCountries.length ? <img className={loading} src="https://i.pinimg.com/originals/0e/ff/13/0eff1323b4e6f7ba2678cffe6039a6c9.gif"/> :
            currentCountries.map( c =>
            <Link to={`/countries/${c.alpha3Code}`}>
            <Card key={c.alpha3Code}
                  id={c.alpha3Code}
                  flags={c.flags}
                  name={c.name}
                  region={c.region}/>
            </Link>
        )}

        </div>

        
    </Fragment>)
}