import React from "react";
import {BrowserRouter as Router, Redirect, Route} from "react-router-dom";
import MainContainer from "./MainContainer";


function RouteConfigExample() {






  return (


        <Router>

          <Route exact
                 path='/'

                 render={(props) =>


                     <MainContainer/>




                 }
          />



        </Router>


  );


}

export default RouteConfigExample;
