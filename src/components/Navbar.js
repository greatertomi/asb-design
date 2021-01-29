import React from 'react';
import {ImHome} from 'react-icons/im';
import {FaArchive, FaSuitcase} from 'react-icons/fa';
import {GoSearch} from 'react-icons/go'
import {IoNotificationsSharp} from 'react-icons/io5'
import {RiArrowDownSLine} from 'react-icons/ri'
import avatar from '../image/avatar.png'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="navbar-brand">FE Engineer Test 1</div>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse ml-3" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <ImHome size={20} />
            <div className="nav-link">Home</div>
          </li>
          <li className="nav-item">
            <FaArchive size={20} />
            <div className="nav-link">Entries</div>
          </li>
          <li className="nav-item active">
            <FaSuitcase size={20} />
            <div className="nav-link">Divisions</div>
          </li>
        </ul>
        <ul className="navbar-nav right-nav">
          <div className="searchBoxDiv mr-4">
            <GoSearch className="mr-1" />
            <input type="text"/>
          </div>
          <div className="mr-4 pt-1">
            <IoNotificationsSharp size={20} color="#898794" />
          </div>
          <div className="d-flex align-items-center">
            <img src={avatar} alt="user avatar" className="userAvatar" />
            <RiArrowDownSLine size={20} color="#898794" />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
