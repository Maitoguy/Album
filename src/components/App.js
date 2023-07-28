import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import CreateAlbum from './CreateAlbum';
import AlbumDetail from './AlbumDetail';
import Fetch from './Api';

function App() {
  const [album, setAlbum] = useState([]);

  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home album={album} setAlbum={setAlbum} />} />
        <Route path="/view-images/:albumId" element={<AlbumDetail album={album} />} />
        <Route path="/create-album" element={<CreateAlbum album={album} setAlbum={setAlbum} />} />
        <Route path="/fetch-api" element={<Fetch />} />
      </Routes>
    </div>
  );
}

export default App;
