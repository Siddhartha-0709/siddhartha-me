
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { useState } from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import BlogList from './components/BlogList';
import UploadBlog from './components/UploadBlog';
import Header from './components/Header';
import Footer from './components/Footer';
import BlogView from './components/BlogView';
import CommingSoon from './components/CommingSoon';
import ScrollToTop from './components/ScrollToTop';
import Authentication from './components/Authentication';
import Homev2 from './components/Homev2';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homev2 />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<BlogList />} />
        <Route path="/upload" element={<UploadBlog />} />
        <Route path="/blog-view" element={<BlogView />} />
        <Route path="/comming-soon" element={<CommingSoon />} />
        <Route path="/authentication" element={<Authentication />} />
        {/* <Route path="/test" element={<Homev2 />} /> */}

      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
