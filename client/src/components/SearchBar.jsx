import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { countryByName } from "../redux/actions";

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
       

    return <Fragment>
        <form onSubmit={onSubmit}>
            <input type="text" onChange={onInputChange} value={input}/>
            <input type="submit" value="Search country"/>
        </form>
    </Fragment>
}