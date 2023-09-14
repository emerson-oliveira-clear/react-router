import React from 'react'


import Home from "../../views/exemples/Home";
import About from "../../views/exemples/About";
import State from '../../views/State';
import Effect from '../../views/Effect';
import NotFound from '../../views/exemples/NotFound';

import { Routes, Route } from "react-router-dom";



const Content = props => {
  return (
    <main className="content">
      <Routes>

        <Route exact path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/state" element={<State />} />

        <Route path="/effect" element={<Effect />} />

        <Route exact path="*" element={<NotFound />} />


      </Routes>
    </main>
  );
};

export default Content

