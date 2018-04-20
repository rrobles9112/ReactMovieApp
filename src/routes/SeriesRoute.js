import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MainLayout from "./MainLayout";
import MovieBox from '../components/MovieBox';
class SeriesRoute extends Component {
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

SeriesRoute.propTypes = {};

export default SeriesRoute;
