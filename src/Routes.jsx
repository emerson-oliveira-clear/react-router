import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';


import Home from './views/exemples/Home'
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
          path="/about"
          element={<About></About>}
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