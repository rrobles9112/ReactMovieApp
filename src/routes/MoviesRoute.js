import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MovieBox from '../components/MovieBox';
import MainLayout from "./MainLayout";

class MoviesRoute extends Component {
  render() {
    return (
        <MainLayout>
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

        </MainLayout>
    );
  }
}

MoviesRoute.propTypes = {};

export default MoviesRoute;
