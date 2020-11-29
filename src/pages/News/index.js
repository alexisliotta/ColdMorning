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
  const diaActual = `${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()}`;

  useEffect(() => {
    fetch(`https://api.jornalia.net/api/v1/articles?apiKey=137590926c6d448a87357077b840ee19&search=economia%2Caviones%2Cfeministas%2C%2Cclima%2Cargentina%2Cfotball%2Cautos%2Cpeleas&providers=Clarin%2CPagina12%2CLaNacion%2CTelam&startDate=${diaActual}`)
      .then(res => res.json())
      .then((data) => {
        props.saveNews(data)
      });
  }, []);

  return (
    <div className="Dad">
      <Navbar
       valor = {true}
      />
       {props.news.articles && props.news.articles.map((article) => {
            return (
              <div className='card'>
                <div className='card__left' style={{ backgroundImage: `url(${article.imageUrl})` }}></div>
                <div className='card__right'>
                  <div className='card__title'>
                  {article.title.substring(0,62)}
                  </div>
                  <div className='card__name'> Name: 
                  <span className='card__pildora'> {article.provider.name} </span> 
                  </div>
                  <div className='card__author'>Category:  
                  {article.category}
                  <img className='ico-font' src={article.provider.logo}/>
                  </div>
                  <div className='card__description'>
                    {article.description.substring(0,416) }
                    <a className='card__link' target='_blank' href={article.sourceUrl}>See More</a>
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
