import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import Detail from "./Detail"
import { countryById, deleteActivity } from "../redux/actions"
import Activities from "./Activities"
import styles from '../styles/Detail.module.css'



export default function CountryDetail(){

    const { link, contentActivity, allContent, info, activity, h3, buttonTwo, loading } = styles

    const countryId = useSelector(state => state.filteredCountry)
    const deleted = useSelector(state => state.activities)
   
    const dispatch = useDispatch()
    const params = useParams()

    useEffect(()=> {
        dispatch(countryById(params.id))
    }, [dispatch, params.id, deleted ])

    let activities = countryId.map(a => a.activities)
    activities = activities.flat()

    function handleDelete(id){
      dispatch(deleteActivity(id))
    }


    return (
      <div>
      <div className={allContent}>
        <div className={info}>
          <div>
            {!countryId.length ? (
              <img className={loading} src="https://i.pinimg.com/originals/0e/ff/13/0eff1323b4e6f7ba2678cffe6039a6c9.gif"/>
            ) : (
              countryId.map((c) => (
                <Detail
                  key={c.alpha3Code}
                  flags={c.flags}
                  name={c.name}
                  region={c.region}
                  capital={c.capital}
                  subregion={c.subregion}
                  area={c.area}
                  population={c.population}
                  code={c.alpha3Code}
                />
              ))
            )}
          </div>

          <div className={contentActivity}>
            <h3 className={h3}>ACTIVITIES</h3>
            <div className={activity}>
              {activities.length ? (
                activities.map((ac, index) => (
                  <Activities
                    key={index}
                    name={ac.name}
                    difficulty={ac.difficulty}
                    duration={ac.duration}
                    season={ac.season}
                    onClose={() => handleDelete(ac.id)}
                  />
                ))
              ) : (
                <div>
                <p style={{ fontSize: "20px" }}>No activities added</p>
                <Link to='/activity'><button className={buttonTwo}>CREATE ACTIVITY</button></Link>
                </div>
              )}
            </div>
          </div>
        </div>



      </div>


        <div className={activity}>
          <div className={link}>
            <Link to="/home">BACK TO HOME</Link>
          </div>
        </div>


      </div>
    );
}