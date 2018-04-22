import React, {PureComponent} from 'react';
import './MovieBox.css'
import PropTypes from 'prop-types';
import {connectStore} from 'redux-box'
import mediaModule from './../models/movies'

class MovieBox extends PureComponent {
  constructor(props) {
    super(props);
  }



  componentWillMount() {

  }

  componentDidMount() {

  }

  componentWillReceiveProps(nextProps) {

  }

  componentWillUpdate(nextProps, nextState) {

  }

  componentDidUpdate(prevProps, prevState) {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div>
        <div className="Movie box">
          <div className="content">
            <div className="row">
              <div className="col-xs-12 col-sm-4 no-padding">
                <div className="cover" style={{backgroundImage:`url('https://image.tmdb.org/t/p/w370_and_h556_bestv2${this.props.data.poster_path}')`}}></div>
              </div>
              <div className="col-xs-12 col-sm-8 p-4">
                <div className="title">{this.props.isTvShow || this.props.data.type === 'serie' ? this.props.data.original_name  : this.props.data.original_title}</div>
                <div className="sub-text">
                  <p>{this.props.data.overview.substring(0,240)} ...</p>
                </div>

                <hr/>
                <div className="row">
                  <div className="col">
                    <button className='Btn-read-more'>
                      <p>
                        View More
                      </p>
                    </button>
                  </div>

                </div>


              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

MovieBox.propTypes = {};

export default connectStore({
  mediaModule:mediaModule
})(MovieBox);
