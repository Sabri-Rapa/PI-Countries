import Card from "./Card"
import {getCountries, sortByName, sortByPopulation, filterByActivity, filterByRegion, getActivities} from "../redux/actions"
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
        dispatch(getActivities())
    }, [dispatch])





// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||



    const activities = useSelector(state => state.activities)
    

    // useEffect(()=>{
    //     dispatch(getActivities())
    //     return console.log('desmonte')
    // }, [dispatch])

    let region;
    region = Array.from( region = new Set(allCountries.map(c => c.region)))

    console.log(allCountries)
    console.log('activities en filter', activities[0])

     function handleSelectRegion(e){
         e.preventDefault()
         dispatch(filterByRegion(e.target.value))
     }

     function handleSelectActivity(e){
        e.preventDefault()
        dispatch(filterByActivity(e.target.value))
    }


// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||













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


 
    // const [pages, setPages] = useState(0)
    // const [order, setOrder] = useState('ASC')
    // const [filter, setFiltro] = useState('')

    // useEffect(()=>{
    //     dispatch(getCountries(pages,order, filter))
    // }, [dispatch, pages, order, filter])

    
    // const next = e =>{
    //     e.preventDefault();
    //     if(allCountries.length < 10) return;
    //     else setPages(pages + 10);
    // };

    // const prev = e => {
    //     e.preventDefault();
    //     if(pages <= 0) setPages(0);
    //     else setPages(pages - 10)
    // };

    
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



            <div>
            <select name='region' onChange={handleSelectRegion}>
                <option hidden={true}>Select REGION</option>
                <option value='all'>ALL REGIONS</option>
                {region.map(r =>{
                return <option key={r} value={r}>{r}</option>})}
            </select>

            <select name='activities' onChange={handleSelectActivity}>
                <option hidden={true}>Select ACTIVITY</option>
                {activities.length?
                activities.map( a => {return <option key={a.id}>{a.name}</option>} ) : 
                                             <option>No activities created</option>}        
            </select>
            </div>






        <Pagination countriesPerPage={countriesPerPage}
                    allCountries={allCountries.length}
                    pagination={pagination}
                    currentPage={currentPage}/>

        {/* <button onClick={prev} disabled={pages <= 0}>PREV</button>
        <button onClick={next} >NEXT</button>
                    <br/> */}
        {
            currentCountries.map( c =>
            <Card key={c.alpha3Code} id={c.alpha3Code} flags={c.flags} name={c.name} region={c.region}/>
        )}

        
    </Fragment>)
}