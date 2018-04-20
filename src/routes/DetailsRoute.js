import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MovieBox from '../components/MovieBox';
class DetailsRoute extends Component {
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

DetailsRoute.propTypes = {};

export default DetailsRoute;
