import {Link} from 'react-router-dom';
import './component.css';

function Navbar() {
  return (
    <div className="navbar">
        <h1><Link to='/'>My Album</Link></h1>
        <button><Link to='/create-album'>Create Album</Link></button>
        <button><Link to='/fetch-api'>Fetch Album </Link></button>
    </div>
  );
}

export default Navbar;
