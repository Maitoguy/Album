import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './component.css'

function AlbumDetail({ album }) {
  const { albumId } = useParams();
  const [url, setUrl] = useState(null);
  const [showImage, setShowImage] = useState(false);

  function checking() {
    console.log(album);
    const albumIdNum = parseInt(albumId, 10);
    const result = album.find((albumEle) => albumEle.id === albumIdNum);
    setUrl(result.albumPic);
    setShowImage(true); 
  }

  return (
    <div className="album-detail">
      <button onClick={checking}>Show Album</button>
      {showImage && <img src={url} alt="Album Image" />}
    </div>
  );
}

export default AlbumDetail;
