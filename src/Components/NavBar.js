import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TopBar from './TopBar';

export class NavBar extends Component {
  render() {
    return (
      <>
        <div className='bar' style={{ textAlign: 'center', padding: '0' }}>
          <TopBar />
        </div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ padding: '10px 30px' }}>
          <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="navbar-brand" to="/">Dewakoo News</Link>
            </li>
          </ul>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100">
                <li className="nav-item">
                  <Link className="nav-link" to="/headlines">Headlines</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/health">Health</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/entertainment">Entertainment</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/business">Business</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sports">Sports</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/science">Science</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/technology">Technology</Link>
                </li>
              </ul>
              <form className="d-flex w-100 mt-2 mt-lg-0" style={{ maxWidth: '300px' }}>
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default NavBar;
