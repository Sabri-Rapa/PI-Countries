import { Fragment } from "react";
import { useSelector } from "react-redux";

export default function Order(){

    let allCountries = useSelector(state => state.allCountries)

    function onChange(){

    }

    return(
        <Fragment>

            <select >
                <option hidden={true}>Sort alphabetically</option>
                <option name="atoz">A to Z</option>
                <option name="ztoa">Z to A</option>
            </select>

            <select >
                <option hidden={true}>Sort by population</option>
                <option name="ascendent">Ascendant</option>
                <option name="descendant">Descendant</option>
            </select>

            <br/>
        </Fragment>
    )
}