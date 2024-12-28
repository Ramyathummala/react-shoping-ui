
import React , {useState} from "react";
import Myheader from "../components/Header";
import Banner from '../components/Banner';
import Collection from '../components/Collection';
import Footer from '../components/Footer';
import {Gents,Ladies} from '../data';
import WomenCollection from '../components/WomenCollection';
// import { useState } from "react";

const Mainpage=()=>{
   const [gentsFashion, setGentsFashion ]=useState(Gents)
   const [ladiesFashion,setLadiesFashion]=useState(Ladies)
    return(
        <div>
            <Myheader/>
            <Banner/>
            <Collection gentsFashion={gentsFashion}/>
            <WomenCollection ladiesFashion={ladiesFashion}/>
            <Footer/>
        </div>
    )
}
export default Mainpage;


