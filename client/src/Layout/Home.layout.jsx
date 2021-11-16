import React from 'react'

//Components
import Navbar from "../Components/Navbar";
import FoodTab from "../Components/FoodTabs"

function HomeLayout({children}) {
    return (
        <div>
            <Navbar/>
            <FoodTab/>
           <div className="container mx-auto px-4 lg:px-20">{children}</div> 
        </div>
    )
}

export default HomeLayout


