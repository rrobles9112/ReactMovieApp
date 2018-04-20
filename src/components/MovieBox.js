import React, {PureComponent} from 'react';
import './MovieBox.css'
import PropTypes from 'prop-types';

class MyComponent extends PureComponent {
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
                <div className="cover" style={{backgroundImage:`url('http://via.placeholder.com/640x480')`}}></div>
              </div>
              <div className="col-xs-12 col-sm-8 p-4">
                <div className="title">Rampage</div>
                <div className="sub-text">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis deserunt est, itaque maiores quisquam temporibus veritatis! Autem dolore laudantium molestiae reiciendis reprehenderit, temporibus. Autem error excepturi ipsa magnam provident, velit.</p>
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
                  <div className="col">
                    <button className='Btn-add-favorities'>
                      <i className='fa fa-1x fa-heart favorities'></i>
                      <p>
                        Add to Favorities
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

MyComponent.propTypes = {};

export default MyComponent;
