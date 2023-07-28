import React, { useEffect, useState } from 'react';
import './Api.css';
import axios from 'axios';

function App() {
  const [albums, setAlbums] = useState([]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    const fetchAlbumsData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/albums');
        setAlbums(response.data.slice(0, 10));
      } catch (error) {
        console.error('Error fetching albums:', error);
      }
    };
    fetchAlbumsData();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    const newAlbum = {
      title: title,
      id: albums.length + 1,
      userId: body
    };

    axios.post('https://jsonplaceholder.typicode.com/albums', newAlbum)
      .then((response) => {
        setAlbums([...albums, response.data]);
        console.log(albums , response.data);
      })
      .catch((error) => {
        console.error('Error adding album:', error);
      });

    setTitle('');
    setBody('');
    alert("Album Created Successfully!!!");
  }

  function deleteAlbum(id) {
    const updatedAlbums = albums.filter((album) => album.id !== id);
    setAlbums(updatedAlbums);

    axios.delete(`https://jsonplaceholder.typicode.com/albums`)
    .then(() => {
      const updatedAlbums = albums.filter((album) => album.id !== id);
      setAlbums(updatedAlbums);
    })
    .catch((error) => {
      console.error('Error deleting album:', error);
    });

    alert("Album Deleted Successfully!!!")
  }

  function updateAlbum(id) {
    let album;
    for ( let i = 0 ; i < albums.length ; i++){
      if(id === albums[i].id){
        album = albums[i];
        break;
      }
    }
    axios.put(`https://jsonplaceholder.typicode.com/albums/${id}`, album)
      .then(() => {
        const updatedAlbums = albums.map((album) =>
          album.id === id ? { ...album, title: title } : album
        );
        setAlbums(updatedAlbums);
      })
      .catch((error) => {
        console.error('Error updating album:', error);
      });
      alert("Album Updated successfully!!!");
  }

  return (
    <div className="container">
      <div className='album-list'>
        {albums.map((albumItem) => (
          <div className='album-item' key={albumItem.id}>
            <h2>{albumItem.title}</h2>
            <p>{albumItem.id}</p>
            <p>{albumItem.userId}</p>
            <button onClick={() => updateAlbum(albumItem.id)}>Update</button>
            <button onClick={() => deleteAlbum(albumItem.id)}>Delete</button>
          </div>
        ))}
      </div>
      <form className='form-api' onSubmit={handleSubmit}>

        <div className="form-input">
          <label>Title</label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>

        <div className="form-input">
          <label>Body</label>
          <input value={body} onChange={(e) => setBody(e.target.value)} />
        </div>

        <button>Create Album</button>

      </form>
    </div>
  );
}

export default App;
