import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { countryByName, getCountries } from "../redux/actions";
import { Link } from "react-router-dom";

export default function SearchBar(){
    const [input, setInput] = useState('')

    let dispatch = useDispatch()

    function onSubmit(e){
      e.preventDefault();
      dispatch(countryByName(input))
    }


    function onInputChange(e){
        e.preventDefault();
        setInput(e.target.value)
    }

    function handleClick(e){
        e.preventDefault();
        dispatch(getCountries())
    }
       

    return <Fragment>
        <Link to='/activity'><button>CREATE ACTIVITY</button></Link>
        <button onClick={handleClick}>Remove filters</button>
        <form onSubmit={onSubmit}>
            <input type="text" onChange={onInputChange} value={input}/>
            <input type="submit" value="Search country"/>
        </form>
    </Fragment>
}