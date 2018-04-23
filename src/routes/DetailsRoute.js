import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MainLayout from './MainLayout'
import './DetailsRoutes.css'
import MovieBox from '../components/MovieBox';
import {connectStore} from 'redux-box'
import  moviesModule from './../models/movies'
import SimpleModalLauncher from './../components/ModalLauncher'
import YouTube from 'react-youtube'


class DetailsRoute extends Component {

  state = {
    showModal: false,
    typeMedia:''
  };

  addFavorites=(e)=>{

   let media={...this.props.mediaModule.detail};
   media.type=this.state.typeMedia
   media.favorite=true
    console.log(media);
   this.props.mediaModule.setMediaFavorite(media)

  }



  handleToggleModal() {
    this.setState({ showModal: !this.state.showModal });
  }
  componentDidMount(){
    console.log(this.props);
    if(this.props.match.path === '/movie/id/:id'){
      console.log('load movie');
      this.setState({
        typeMedia:'movie'
      })
      this.props.mediaModule.requestMovieDetail(this.props.match.params.id)
    }else{
      console.log('load serie');
      this.setState({
        typeMedia:'serie'
      })
      this.props.mediaModule.requestSerieDetail(this.props.match.params.id)
    }

  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  render() {
    const {mediaModule:{detail},mediaModule:{favorites}} = this.props
    console.log(detail.videos)
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
    let isFavorite = favorites.find(item => item.id===detail.id)
    console.log('isFavorite',isFavorite)
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
                             src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${detail.poster_path}`}
                             srcSet={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${detail.poster_path} 1x, https://image.tmdb.org/t/p/w600_and_h900_bestv2/${detail.poster_path} 2x`}
                             alt={`Once upon a time`}/>
                      </div>



                    </div>

                    <div className="col-xs-12 col-md-8">
                      <section className="header poster">
                        <div className="Detail-title" dir="auto">


                          <h2 className="color-white">{this.state.typeMedia==='serie'?detail.name:detail.original_title}</h2>
                          <span className="Detail-release-date">(2011)</span>

                        </div>
                        <ul className="Detail-actions">

                          <li className="chart">

                            <div className="text color-white">User<br/>Score</div>
                          </li>

                          { !isFavorite ?
                            <li>
                              <button className='Btn-add-favorities' onClick={this.addFavorites}>
                                <i className='fa fa-1x fa-heart favorities'></i>
                                <p>
                                  Add to Favorities
                                </p>
                              </button>
                            </li>
                          :
                            null
                          }


                          <li className="video none">
                            <SimpleModalLauncher buttonLabel="Open text modal" onCloseRequest={this.handleToggleModal} visible={this.state.showModal}>
                              <div className='row'>
                                <div className="col-xs-12">
                                  <h2>Trailer - {detail.original_name}</h2>

                                </div>
                                <div className="col-xs-12">
                                  <div className='row center-xs'>
                                    <div className="col-xs-10">
                                      {
                                        detail.videos ?
                                          <YouTube
                                            videoId={detail.videos}
                                            opts={opts}
                                            style={{margin:'0px auto'}}
                                          />
                                          :
                                          <YouTube
                                            videoId={detail.videos}
                                            opts={opts}
                                            style={{margin:'0px auto'}}
                                          />
                                      }

                                    </div>
                                  </div>

                                </div>

                              </div>
                            </SimpleModalLauncher>
                          </li>


                        </ul>

                        <div className="pad">
                          <h3 dir="auto" className='Detail-subtitle'>Overview</h3>
                          <div className="Detail-text-content" dir="auto">

                            <p>
                              {detail.overview}
                            </p>


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

export default connectStore({
  mediaModule:moviesModule
})(DetailsRoute);
