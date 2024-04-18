import React from 'react'
import PropTypes from 'prop-types';




export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar bg-${props.mode} bg-body-tertiary` }>
    <div className="container-fluid" >
      <a className="navbar-brand" href="#">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
        </ul>
        <div className={`form-check form-switch text- ${props.mode==="light" ? "dark" : "light"}`}>
         <input className="form-check-input mx-2" type="checkbox" onClick={props.toggleMode} id="flexSwitchCheckDefault"/>
          <label className="form-check-label mx-1 " htmlFor="flexSwitchCheckDefault">Enable Darkmode</label>
        </div>
      </div>
    </div>
  </nav>
  );
}


Navbar.propTypes = {title : PropTypes.string  }   
                     