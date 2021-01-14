import React, { Component } from 'react'
import '../css/topMenuBar.css'
import Image from 'react-bootstrap/Image'

class TopMenuBar extends Component {
  state = {}
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
        {/* <li className="nav-item"> */}
        <a href="#">
          <Image
            src={'./logo/omglogo.jpg'}
            className="img-responsive pl-1"
            alt="LOGO"
          ></Image>
        </a>
        {/* </li> */}
        <ul className="nav navbar-nav w-50">
          <li className="nav-item p-3">
            <a className="nav-link " href="#">
              <dt>MEN</dt>
            </a>
          </li>
          <li className="nav-item p-3">
            <a className="nav-link " href="#">
              <dt>WOMEN</dt>
            </a>
          </li>
          <li className="nav-item p-3">
            <a className="nav-link " href="#">
              <dt>KIDS</dt>
            </a>
          </li>
        </ul>

        <ul className="nav navbar-nav ml-auto">
          <li className="nav-item pt-2 ">
            <form className="navbar-form" role="search">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  name="srch-term"
                  id="srch-term"
                />
                <div className="input-group-btn">
                  <button className="btn btn-default" type="submit">
                    <Image
                      src="../logo/search.png"
                      style={{ width: '25px', height: '25px' }}
                    ></Image>
                  </button>
                </div>
              </div>
            </form>
          </li>
          <li className="nav-item pt-2">
            <a className="nav-link" href="#">
              <Image
                src="../logo/profile_icon.jpg"
                style={{ width: '25px', height: '25px' }}
              ></Image>
              Profile
            </a>
          </li>
          <li className="nav-item pt-2">
            <a className="nav-link" href="#">
              <Image
                src="../logo/bag_icon_2.png"
                style={{ width: '25px', height: '25px', float: 'left' }}
              ></Image>
              Bag
            </a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default TopMenuBar