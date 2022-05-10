import React, { Fragment } from 'react';
import {Link} from 'react-router-dom'
import styles from '../styles/LandingPage.module.css'

export default function LandingPage(){

    const { landing, button, mainContent, mainTitle, text2 } = styles

    return(
        <div className={landing}>        
        <main className={mainContent} >
        

        <h1 className={mainTitle} >
            "I HAVEN'T BEEN,
            <br/>
            <span className={text2}>everywhere,</span>
            <br/>
            <span >BUT IT'S ON,</span>
            <br/>
            <span className={text2}>my list."</span>
        </h1>

        <Link to="/home">
            <button className={button}>Let's travel!</button>
        </Link>


        </main>

        

        </div>
        
        
        


)}