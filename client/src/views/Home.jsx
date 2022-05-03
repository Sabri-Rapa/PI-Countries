import SearchBar from "../components/SearchBar";
import Cards from "../components/Cards";
import Filter from "../components/Filter";
import { Fragment } from "react";
import Order from "../components/Order";

export default function Home(){
    return (
    <Fragment>
        <SearchBar />
        <Order />
        <Filter />
        <br/>
        <Cards />
    </Fragment>
)}