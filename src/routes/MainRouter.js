
import React from 'react'
import { Switch,Route } from "react-router-dom";




import {HomePage } from '../pages';




export const MainRouter = () => {

    
    return (
       <Switch>
         
          
           <Route path="/" component={HomePage}/>
          

       </Switch>
    )
}