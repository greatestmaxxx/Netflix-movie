import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from "./pages/Home/index.jsx";
import Movies from "./pages/Movies/index.jsx";
import MoviesBanner from "./pages/MoviesBanner/index.jsx";
import {BrowserRouter as Router} from 'react-router-dom'
import Header from "./components/Header/index.jsx";
import Footer from "./components/Footer/index.jsx";
import {Route, Routes} from "react-router";
import Movie from "./pages/Movie/index.jsx";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    <Router>
        <Header/>
        <Routes>
            <Route exact path="/" element={<Home/>}>
            </Route>
            <Route exact path="/movies" element={<Movies />}>
            </Route>
            <Route exact path="/movies2" element={<MoviesBanner />}>
            </Route>
            <Route exact path="/movieDetails/:id/:type" element={ <Movie />}>
            </Route>
        </Routes>
        <Footer />
    </Router>
    </React.StrictMode>
);

