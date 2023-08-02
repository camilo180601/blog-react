import React from "react";
import {Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Index from "../components/pages/Index";
import Articles from "../components/pages/Articles";
import Article from "../components/pages/Article";
import Create from "../components/pages/Create";
import Edit from "../components/pages/Edit";
import Header from "../components/layout/Header";
import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";
import Sidebar from "../components/layout/Sidebar";
import Search from "../components/pages/Search";

const Routing = () => {
  return (
    <BrowserRouter>
        <Header/>
        <Nav/>
        <section id="content" className="content">
            <Routes>
                <Route path="/" element={<Index/>} />
                <Route path="/index" element={<Index/>} />
                <Route path="/articles" element={<Articles/>} />
                <Route path="/create-article" element={<Create/>} />
                <Route path="/search/:search" element={<Search/>} />
                <Route path="/article/:id" element={<Article/>} />
                <Route path="/edit/:id" element={<Edit />} />

                <Route path="*" element={
                  <div className="jumbo">
                    <h1>Error 404</h1>
                  </div>
                } 
                />
            </Routes>
        </section>
        <Sidebar/>
        <Footer/>
    </BrowserRouter>
  )
}

export default Routing