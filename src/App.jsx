import { useState } from 'react'
import './App.css'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Feed from './Components/Feed'
import ChannelDetails from './Components/ChannelDetails'
import VideoDetails from './Components/VideoDetails'
import Search from './Components/Search'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetails />} />
          <Route path="/channel/:id" element={<ChannelDetails />} />
          <Route path="/search/:searchTerm" element={<Search />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
