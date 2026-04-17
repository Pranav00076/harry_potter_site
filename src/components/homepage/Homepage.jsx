import React from "react";
import "./Homepage.css"
import Navbar from "../reusable_comps/Navbar/Navbar";
import MainSection from "../reusable_comps/MainSection/MainSection";
import LiveQuiz from "../reusable_comps/LiveQuiz/LiveQuiz";
import HouseQuiz from "../reusable_comps/HouseQuiz/HouseQuiz";

function Homepage(){
    return(
        <>
        <Navbar />
        <MainSection />
        <LiveQuiz />
        <HouseQuiz />
        </>
        
    )

}

export default Homepage