import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MainLayout from './MainLayout'
import './DetailsRoutes.css'
import MovieBox from '../components/MovieBox';
class DetailsRoute extends Component {
  render() {
    return (
      <MainLayout>
        <div className='container'>
          <div className="row">
            <div className="col-xs-12">
              <div className="custom_bg">
                <div className="single_column">


                  <section className="row">
                    <div className="col-xs-12 col-md-4">
                      <div className="image_content">


                        <img className="poster"
                             src="https://image.tmdb.org/t/p/w300_and_h450_bestv2/49qD372jeHUTmdNMGJkjCFZdv9y.jpg"
                             srcSet="https://image.tmdb.org/t/p/w300_and_h450_bestv2/49qD372jeHUTmdNMGJkjCFZdv9y.jpg 1x, https://image.tmdb.org/t/p/w600_and_h900_bestv2/49qD372jeHUTmdNMGJkjCFZdv9y.jpg 2x"
                             alt="Once Upon a Time"/>
                      </div>



                    </div>

                    <div className="col-xs-12 col-md-8">
                      <section className="header poster">
                        <div className="Detail-title" dir="auto">


                          <h2 className="16">Once Upon a Time</h2>
                          <span className="Detail-release-date">(2011)</span>

                        </div>
                        <ul className="Detail-actions">

                          <li className="chart">

                            <div className="text color-white">User<br/>Score</div>
                          </li>





                          <li className="video none">
                            <p className='Detail-btn-play'>
                              <span><i className='fa fa-2x fa-play color-white'></i></span>
                              <span className='ml-3'>Play Trailer</span>
                            </p>
                          </li>


                        </ul>

                        <div className="pad">
                          <h3 dir="auto" className='Detail-subtitle'>Overview</h3>
                          <div className="Detail-text-content" dir="auto">

                            <p >There is a town in Maine where every story book character you've ever known is trapped
                              between two worlds, victims of a powerful curse. Only one knows the truth and only one can
                              break the spell.</p>

                            <p >Emma Swan is a 28-year-old bail bonds collector who has been supporting herself since she
                              was abandoned as a baby. Things change for her when her son Henry, whom she abandoned
                              years ago, finds her and asks for her help explaining that she is from a different world
                              where she is Snow White's missing daughter.</p>


                          </div>


                          <h3 dir="auto" className="Detail-subtitle">Featured Crew</h3>
                          <ol className="people no_image">

                            <li className="profile">
                              <p>Edward Kitsis</p>
                              <p className="character">Creator</p>
                            </li>

                            <li className="profile">
                              <p>Adam Horowitz</p>
                              <p className="character">Creator</p>
                            </li>

                          </ol>

                        </div>
                      </section>
                    </div>
                  </section>


                </div>
              </div>
            </div>

          </div>
          <section className='row'>
            <div className="col-xs-12">
              <h2 className='text-left'>Top Billed Cast</h2>
            </div>
            <div className="col-xs-12">
              <div className="row">
                <div className="Detail-card-cast col-xs-12 col-md-3">
                  <div className="img" style={{backgroundImage:`url('http://via.placeholder.com/480x680&text=img')`}}></div>
                  <p className='Detail-card-cast-name'>Robert Carlyle</p>
                  <p className='Detail-card-acting-role'>Mr. Gold / Rumplestiltskin</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </MainLayout>

    );
  }
}

DetailsRoute.propTypes = {};

export default DetailsRoute;
