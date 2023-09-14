import React from "react"; 
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';


import Home from './views/Home/index'
import State from './views/State/index'
import Effect from './views/Effect/index'
const Router = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home></Home>}
          />
           <Route
            path="/state"
            element={<State></State>}
          />
           <Route
            path="/effect"
            element={<Effect></Effect>}
          />
        </Routes>
      </BrowserRouter>
  )
}
export default Router;