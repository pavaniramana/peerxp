import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to = '/home' className="navbar-brand" href="#">Navbar</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link to = '/Author' className="nav-link">Author <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link to ='/Post' className="nav-link" >Post</Link>
                </li>
                <li className="nav-item">
                    <Link to ='/Pages' className="nav-link" >Pages</Link>
                </li>
                <li className="nav-item">
                    <Link to = 'Tags' className="nav-link" >Tags</Link>
                </li>
                <li className="nav-item">
                   
                </li>
                </ul>
            </div>
</nav>
    </div>
  )
}

export default Header;