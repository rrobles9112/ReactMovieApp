import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MovieBox from '../components/MovieBox';
class MoviesRoute extends Component {
  render() {
    return (
      <div className='container'>
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <MovieBox/>
          </div>
          <div className="col-xs-12 col-md-6">
            <MovieBox/>
          </div>
          <div className="col-xs-12 col-md-6">
            <MovieBox/>
          </div>
          <div className="col-xs-12 col-md-6">
            <MovieBox/>
          </div>
        </div>

      </div>
    );
  }
}

MoviesRoute.propTypes = {};

export default MoviesRoute;
