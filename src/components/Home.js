import React from 'react';
import './component.css';
import { Link } from 'react-router-dom';

function Home({ album, setAlbum }) {
  function deleteFunction(createdAt) {
    const updatedAlbum = album.filter((albumItem) => albumItem.createdAt !== createdAt);
    setAlbum(updatedAlbum);
  }

  return (
    <div className="home">
      {album.map((albumItem) => (
        <div key={albumItem.createdAt}>
          <h2>{albumItem.title}</h2>
          <p>{albumItem.subTitle}</p>
          <button onClick={() => deleteFunction(albumItem.createdAt)}>Delete</button>
          <Link to={{ pathname: `/view-images/${albumItem.id}`}}>
            <button>View Images</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Home;
