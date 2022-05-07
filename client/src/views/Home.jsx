import SearchBar from "../components/NavBar/SearchBar";
import Cards from "../components/Cards";
import Filter from "../components/NavBar/Filter";
import { Fragment } from "react";

export default function Home(){
    return (
    <Fragment>
        <SearchBar />
        <Filter />
        <br/>
        <Cards />
    </Fragment>
)}