import React from 'react';
//style
import './style.scss';
const WheaterCard = (props) => {
  return (
        <div className='wheater'>
          <div className='wheater__titles'>
            <div className='wheater__titles__temp'>TEMPERATURE</div>
            <div className='wheater__titles__temp'>MINIMUM</div>
            <div className='wheater__titles__temp'>MAXIMUM</div>
            <div className='wheater__titles__temp'>HUMIDITY</div>
            <div className='wheater__titles__temp'>WINDS</div>
          </div>
          <div className='wheater__titles__info'>
            <div className='wheater__titles__info__one'>
              {props.countrySerching.main && <h1 className='wheater__titles__info__h1'>{props.countrySerching.main.temp}</h1>}
            </div>
            <div className='wheater__titles__info__two'>
              {props.countrySerching.main && <h1 className='wheater__titles__info__h1'> {props.countrySerching.main.temp_min}</h1>}
            </div>
            <div className='wheater__titles__info__thre'>
              {props.countrySerching.main && <h1 className='wheater__titles__info__h1'> {props.countrySerching.main.temp_max}</h1>}
            </div>
            <div className='wheater__titles__info__four'>
              {props.countrySerching.main && <h2 className='wheater__titles__info__h1'>{props.countrySerching.main.humidity}</h2>}
            </div>
            <div className='wheater__titles__info__five'>
              <div className='wheater__titles__info__six'>
                {props.countrySerching.wind && <h2 className='wheater__titles__info__h2'>Speed: {props.countrySerching.wind.speed}</h2>}
              </div>
              <div className='wheater__titles__info__seven'>
                {props.countrySerching.wind && <h2 className='wheater__titles__info__h2'> Deg: {props.countrySerching.wind.deg}</h2>}
              </div>
            </div>
          </div>
          <div className='wheater__titles__bottom'>
            {props.countrySerching && <h1 className='wheater__titles__bottom__name'>{props.countrySerching.name}</h1>}
          </div>
        </div>
  );
}

export default WheaterCard;