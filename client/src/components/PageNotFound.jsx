import React from 'react';
import {Link} from 'react-router-dom'
import styles from '../styles/PageNotFound.module.css'

export default function PageNotFound(){

    const { activity, link, mainContent, mainTitle } = styles

    return(
        <main className={mainContent} >
        

        <h1 className={mainTitle} >
           THERE ARE NO MATCHES
            <br/>
            <span >WITH YOUR SEARCH</span>
        </h1>

        <div className={activity}>
          <div className={link}>
            <Link to="/home">BACK TO HOME</Link>
          </div>
        </div>


        </main>

)}