//Packages
import React, { useEffect } from 'react';
import { saveNews } from '../../action/newsAction';
import { connect } from 'react-redux';
//Components
import Navbar from '../../components/Navbar';
//Styles
import '../Principal/styles.css';
import './styles.scss';



const News = (props) => {
  const fecha = new Date();
  const diaActual = `${fecha.getFullYear()}/${fecha.getMonth() + 1}/${fecha.getDate()}`;

  useEffect(() => {
    fetch(`http://newsapi.org/v2/everything?q=bitcoin&from=${diaActual}&sortBy=publishedAt&apiKey=5411b819dfc74d898e3f8e65d7654f05
    `)
      .then(res => res.json())
      .then((data) => {
        props.saveNews(data)
      });
  }, []);

  return (
    <div className="Dad">
       <Navbar />
       {props.news.articles && props.news.articles.map((article) => {
            return (
              <div className='card'>
                <div className='card__left' style={{ backgroundImage: `url(${article.urlToImage})` }}></div>
                <div className='card__right'>
                  <div className='card__title'>
                  {article.title.substring(0,62)}
                  </div>
                  <div className='card__name'> Name: 
                  <span className='card__pildora'> {article.source.name} </span> 
                  </div>
                  <div className='card__author'>Author: 
                  {article.author}
                  </div>
                  <div className='card__description'>
                    {article.description}
                    <a className='card__link' target='_blank' href={article.url}>See More</a>
                  </div>
                </div>
              </div>
            )
          })}
      <div className='Background'>
        <div className='container-top'></div>          
        <div className='container-mid'></div>
        <div className='container-bottom'></div>
      </div>
    </div>
  )
}
const mapToStateToProps = (state) => {
  return {
    news: state.newsReducer.news
  }
}

const mapToStateToDispatch = (Dispatch) => {
  return {
    saveNews: (data) => Dispatch(saveNews(data))
  }
}
export default connect(mapToStateToProps, mapToStateToDispatch)(News);
