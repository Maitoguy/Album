import React, { useState } from 'react';
import './component.css';


function CreateAlbum({ album, setAlbum }) {
  const [title, setTitle] = useState();
  const [subTitle, setSubtitle] = useState();
  const [address, setAddress] = useState();

  let count = 0;
  function handleSubmit(e) {
    e.preventDefault();
    const newAlbum = {
      title: title,
      subTitle: subTitle,
      albumPic: address,
      id: count,
    };
    count++;
    setAlbum([...album, newAlbum]);
  }

  return (
    <div className="create-album">
      <h1>Create Album</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-input">
          <label>Title</label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>

        <div className="form-input">
          <label>Subtitle</label>
          <input value={subTitle} onChange={(e) => setSubtitle(e.target.value)} required/>
        </div>

        <div className="form-input">
          <label>Image URL</label>
          <input value={address} onChange={(e) => setAddress(e.target.value)} required/>
        </div>

        <button className="form-btn">Create Album</button>
      </form>
    </div>
  );
}

export default CreateAlbum;
