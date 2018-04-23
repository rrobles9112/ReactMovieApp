import React, {Component} from "react";
import {withRouter} from 'react-router-dom'
import "./Header.css";
import {connectStore} from 'redux-box'
import moviesModule from './../models/movies'

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

  state={
    query:''
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
              <form action="" autoComplete="on" onSubmit={(event)=>{
                event.preventDefault()
                console.log(this.state.query)
                if(this.state.query !== ''){
                  this.props.ui.setQueryFilter(this.state.query)
                  this.props.ui.requestMovies({page:1,search:this.state.query})
                }else{
                  this.props.ui.setQueryFilter(this.state.query)
                  this.props.ui.requestMovies({page:1})
                }

              }}>
                <input id="search" name="search" type="text" onKeyUp={(e)=>this.setState({query:e.target.value})} placeholder="Search TV/Movies Titles"/>
                <input id="search_submit" value="Rechercher" type="submit"/>
              </form>
            </div>
          </div>
        </div>

      </header>
    );
  }
}

const HeaderConnected = connectStore({
  ui:moviesModule
})(Header)

const HeaderWithRouter=withRouter(HeaderConnected)

export default HeaderWithRouter;
