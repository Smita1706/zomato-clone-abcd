import React from 'react'
import { Route } from 'react-router'

//Layout
import HomeLayout  from '../Layout/Home.layout'
function HomeLayoutHOC({Component:Component,...rest}) {
    return (
        <div>
            <Route {...rest} component={(props)=>(
                <HomeLayout>
                    <Component{...props}></Component>
                </HomeLayout>
            )}/>
        </div>
    )
}

export default HomeLayoutHOC








