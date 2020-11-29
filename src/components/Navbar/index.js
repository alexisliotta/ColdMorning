import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './style.scss';
const Navbar = (props) => {
  return (
    <div className='nav'>
      <div className='nav__div'>
        <img className='nav__div__logo' src={logo} />
      </div>
      <div className='nav__div__inf'>
        <Link to={'/'}><h4  className='nav__div__h4'>Wheater </h4></Link>
        <Link to={'/news'}><h4 className='nav__div__h4'>New´s </h4></Link>
        <Link to={'/AboutUs'}><h4 className='nav__div__h4'>About us </h4></Link>  
        <form onSubmit={props.onSubmit}>
          <input disabled={props.valor} className='nav__div__input' id='inputSerching' placeholder='Serch Country..' />
        </form>
      </div>
    </div>
  );
}

export default Navbar;