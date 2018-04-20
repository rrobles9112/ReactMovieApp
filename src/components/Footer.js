import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom'
import PropTypes from 'prop-types';
import './Footer.css'

class Footer extends Component {

  setActiveLink =(currentPathname,pathname)=>{

    switch (currentPathname){
      case pathname:
        return `active`;
        break;

      default:
        return ``
        break;
    }
  }
  render() {
    return (
      <footer className='App-footer menu'>
        <div className="row">
          <Link to={`/`} className={`col-xs-4 menu-item ${this.setActiveLink(this.props.location.pathname,'/')}`}>
            <div>
              <i className='fa fa-2x fa-video'></i>
              <p>Movies</p>
            </div>
          </Link>
          <Link to={`/series`} className={`col-xs-4 menu-item ${this.setActiveLink(this.props.location.pathname,'/series')}`}>
            <div>
              <i className='fa fa-2x fa-video'></i>
              <p>Series</p>
            </div>
          </Link>
          <Link to={`/favorites`} className={`col-xs-4 menu-item ${this.setActiveLink(this.props.location.pathname,'/favorites')}`}>
            <div>
              <i className='fa fa-2x fa-video'></i>
              <p>Favorites</p>
            </div>
          </Link>

        </div>
      </footer>
    );
  }
}

Footer.propTypes = {};
const FooterWithRouter = withRouter(Footer);
export default FooterWithRouter;
