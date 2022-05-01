import SearchBar from "../components/SearchBar";
import Cards from "../components/Cards";
import { Fragment } from "react";
import { Link } from "react-router-dom";

export default function Home(){
    return (
    <Fragment>
        <Link to='/activity'><button>CREATE ACTIVITY</button></Link>
        <SearchBar />
        <br/>
        <Cards />
    </Fragment>
)}