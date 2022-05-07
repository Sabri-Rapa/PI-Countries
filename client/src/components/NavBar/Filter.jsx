import { Fragment, useEffect } from "react";
import { getActivities, filterByRegion, filterByActivity } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";


export default function Filter(){

    const activities = useSelector(state => state.activities)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getActivities())
    }, [dispatch])

    let allCountries = useSelector(state => state.allCountries)
    let region;
    region = Array.from( region = new Set(allCountries.map(c => c.region)))

     function handleSelectRegion(e){
         e.preventDefault()
         dispatch(filterByRegion(e.target.value))
     }

     function handleSelectActivity(e){
        dispatch(filterByActivity(e.target.value))
    }

    let oneActivity = activities.map(item=>{
        return [item.name,item]
    });
    let activitiesMapArr = new Map(oneActivity); // Pares de clave y valor
    
    let oneActivityPerName = [...activitiesMapArr.values()]; // Conversión a un array
    
    console.log(oneActivityPerName)
   


    return (
        <Fragment>
            <select name='region' onChange={handleSelectRegion}>
                <option hidden={true}>Select REGION</option>
                <option value='all'>ALL REGIONS</option>
                {region.map(r =>{
                return <option key={r} value={r}>{r}</option>})}
            </select>

            <select name='activities' onChange={handleSelectActivity}>
                <option hidden={true}>Select ACTIVITY</option>
                {oneActivityPerName.length?
                oneActivityPerName.map( a => {return <option key={a.id}>{a.name}</option>} ) : 
                                             <option>No activities created</option>}        
            </select>

        </Fragment>
    )
}