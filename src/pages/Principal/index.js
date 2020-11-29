//Packages
import React, { useState, useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { saveCountryAction } from '../../action/WheaterAction';
import { saveUserStart } from '../../action/userStartAction';
import Navbar from '../../components/Navbar';
import WheaterCard from '../../components/wheater';

//Styles
import './styles.css';
import '../../components/wheater/style.scss';

function App(props) {
  const [switchWheater, setSwitchWheater] = useState(false)

  // INFORMACION DEL INPUT 
  const inputSerchfunction = (e) => {
    e.preventDefault();
    const inputSerchTarget = e.target.inputSerching.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputSerchTarget}&appid=920da1c9bfa1dbff0b3739a6b82ef80d`)
      .then((res) => res.json())
      .then((data) => {
        props.SaveCountry(data);
        setSwitchWheater(false)
      })
  }
  //INFORMACION DEL USUARIO:
  useEffect(() => {
    fetch(`https://ipapi.co/city`)
      .then(resIp => resIp.text())
      .then((dataIP) => {
        props.saveUserInf(dataIP);

        return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${dataIP}&appid=920da1c9bfa1dbff0b3739a6b82ef80d`);
      })
      .then(resWeather => resWeather.json())
      .then((dataWeather) => {
        props.SaveCountry(dataWeather);
      });
  }, [])

  return (
    <div className="Dad">
      <Navbar onSubmit={inputSerchfunction} />
      {props.countrySerching
        ? <Fragment>
          <h3 className='principal__title'>Weather in your locality</h3>
           <WheaterCard countrySerching={props.countrySerching} />
           </Fragment>
        : <img className='loading' src='https://media1.giphy.com/media/VJScpfdeSNwuPdCL0W/source.gif'/>
      }
      <div className='Background'>

        <div className='container-top'>

        </div>
        <div className='container-mid'></div>
        <div className='container-bottom'></div>
      </div>
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    countrySerching: state.wheaterReducer.countrySerch,
    infoUser: state.userStart.infouser,
  };
};

const mapStateToDispatch = (Dispatch) => {
  return {
    SaveCountry: (date) => Dispatch(saveCountryAction(date)),
    saveUserInf: (data) => Dispatch(saveUserStart(data)),
  }
}

export default connect(mapStateToProps, mapStateToDispatch)(App);
