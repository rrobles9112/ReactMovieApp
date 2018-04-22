import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MainLayout from "./MainLayout";
import {Link} from 'react-router-dom'
import MovieBox from '../components/MovieBox';
import mediaModule from './../models/movies'
import {connectStore} from 'redux-box'


class FavoritesRoute extends Component {

  render() {

    const {mediaModule:{favorites}} = this.props;

    return (
      <MainLayout>
        <div className='container'>
          <div className="row">

            {
              favorites.map((item, index)=>{
                return(
                  <div className="col-xs-12 col-md-6" key={`Movie_${index}`}>
                    <Link to={`/${item.type}/id/${item.id}`} >
                      <MovieBox data={item}/>
                    </Link>
                  </div>


                )
              })
            }

          </div>

        </div>
      </MainLayout>

    );
  }
}

FavoritesRoute.propTypes = {};



export default connectStore({
  mediaModule:mediaModule
})(FavoritesRoute);

