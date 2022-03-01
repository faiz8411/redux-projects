import logo from './logo.svg';
import React from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Home from './components/Home/Home';
import Header from "../src/components/Header/Header"
import MovieDetail from './components/MovieDetail/MovieDetail';
import Footer from "./components/Footer/Footer"
import PageNotFound from './components/PageNotFound/PageNotFound';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <div className='container'>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="movie/:imdbId" element={<MovieDetail />}></Route>
            <Route path="*" element={<PageNotFound />}></Route>
          </Routes>
        </div>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
