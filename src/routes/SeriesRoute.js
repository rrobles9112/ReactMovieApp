import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MainLayout from "./MainLayout";
import MovieBox from '../components/MovieBox';
import moviesModule from './../models/movies'
import {connectStore} from 'redux-box'
import {Link} from 'react-router-dom'


class SeriesRoute extends Component {

  componentDidMount() {
    this.props.mediaModule.requestSeries()
  }

  render() {
    const {mediaModule:{series}} = this.props;
    return (
      <MainLayout>
        <div className='container'>
          <div className="row">
            {
              series.results.map((item, index)=>{
                return(
                  <div className="col-xs-12 col-md-6" key={`Serie_${index}`}>
                    <Link to={`/serie/id/${item.id}`}>
                      <MovieBox data={item} isTvShow={true}/>
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

SeriesRoute.propTypes = {};

export default connectStore({
  mediaModule:moviesModule
})(SeriesRoute);
