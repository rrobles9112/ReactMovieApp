import React, {Component} from "react";
import {withRouter} from 'react-router-dom'
import "./Header.css";

class Header extends Component {

  loadTitle =(location)=>{

    if(location === '/'){
      return `Movie Titles`;
    }else if(location === '/series'){
      return `TV Shows`
    }else if(location === '/favorites'){
      return `Favorites`
    }else if(location.includes('/movies/id') || location.includes('/series/id')){
      return `Details Title`
    }
  }

  render() {

    return (
      <header className="App-header">
        <div className="row middle-xs">
          <div className="col-xs-6">
            <h1 className="App-title">
              {this.loadTitle(this.props.location.pathname)}
            </h1>
          </div>
          <div className="col-xs-6">
            <div id="wrap">
              <form action="" autoComplete="on">
                <input id="search" name="search" type="text" placeholder="Search TV/Movies Titles"/>
                <input id="search_submit" value="Rechercher" type="submit"/>
              </form>
            </div>
          </div>
        </div>

      </header>
    );
  }
}
const HeaderWithRouter=withRouter(Header)
export default HeaderWithRouter;
