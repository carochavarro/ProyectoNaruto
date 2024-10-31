import React from "react";
import Header from "./Components/Header/Header";
import HomePage from "./assets/Pages/HomePage/HomePage";
import CharacterDetailPage from "./assets/Pages/CharacterDetailsPage/CharacterDetailPage";
import Favoritos from "./Components/Favoritos/Favoritos";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

const App = () => {
  return (
    <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/character/:id" element={<CharacterDetailPage/>} />
      <Route path="/favoritos" element={<Favoritos />} />
    </Routes>
  </Router>
  );
};

export default App;
