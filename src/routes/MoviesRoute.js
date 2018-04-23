import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import MovieBox from "../components/MovieBox";
import MainLayout from "./MainLayout";
import { connectStore } from "redux-box";
import { Link } from "react-router-dom";
import moduleMovie from "./../models/movies";
import { Pagination, DatePicker, Select, Button, message } from "antd";
const Option = Select.Option;
class MoviesRoute extends PureComponent {
  state = {
    mode: 'year',
    date: null,
    open: false,
    filterEnabled:false,
    filterData: {
      page: 1,
      date: null,
      genre: null,
    }
  }
  componentDidMount() {

    this.props.moviesModule.requestMovies(this.state.filterData);
    this.props.moviesModule.fetchMoviesGenres();

  }

  handleSelect = value => {
    console.log(value);
    this.setState(prevState => {
      return {
        ...prevState,
        filterData: {
          ...prevState.filterData,
          genre:value
        }
      }
    })
    this.props.moviesModule.setGenreFilter(value)
  };

  handleChangePage = (page) => {
    console.log(page)
    this.setState(prevState => {
      return {
        ...prevState,
        filterData: {
          ...prevState.filterData,
          page:page 
        }
      }
    },()=>this.props.moviesModule.requestMovies(this.state.filterData))

    this.props.moviesModule.requestMovies(this.state.filterData)

  }

  handleChange=(date, dateString)=>{
    console.log('datepicker',date, dateString);
    this.setState({
      date:date
    })

  }

  filter = () =>{
    if(this.state.filterData.date!== null && this.state.filterData.genre!==null){
      this.setState({ filterEnabled: !this.state.filterEnabled },()=>{
        if(this.state.filterEnabled){
          this.props.moviesModule.setDateFilter(this.state.filterData.date)
          this.props.moviesModule.setGenreFilter(this.state.filterData.genre)
          this.props.moviesModule.requestMovies(this.state.filterData);
        }else{
          this.props.moviesModule.setDateFilter(null)
          this.props.moviesModule.setGenreFilter(null)
          this.props.moviesModule.requestMovies(this.state.filterData);
        }
      });

    }else{
      message.error('You most pick a date and genre')
    }


  }

  handleOpenChange = (open) => {
    console.log(open)
    if (open) {
      this.setState({ mode: 'year' });

      this.setState({
        open:true
      });
    }
  }

  handlePanelChange = (value, mode) => {
    console.log(value.format('YYYY'));
    this.setState({
      mode: 'year',
      date: value,
      open:false
    });
    this.props.moviesModule.setDateFilter(value.format('YYYY'))
    this.setState(prevState => {
      return {
        ...prevState,
        filterData: {
          ...prevState.filterData,
          date:value.format('YYYY')
        }
      }
    },()=>{
      console.log(this.props.moviesModule.getMoviesFiltered(this.state.filterData.date))
    })



  }

  render() {

    const {
      moviesModule: { movies },
      moviesModule: { moviesGenres }
    } = this.props;
    
    return (
      <MainLayout>
        <div className="container">
          <div className="row center-xs center-md center-lg center-sm">
            <div className="col-xs-12 col-md-5">
              <p style={{marginBottom:'0'}}>Pick a year</p>  
              <DatePicker
                onChange={this.handleChange}
                ref={(node)=>this.datepicker=node}
                format="YYYY"
                value={this.state.date}
                open={this.state.open}
                mode={this.state.mode}
                onOpenChange={this.handleOpenChange}
                onPanelChange={this.handlePanelChange}
              />
            </div>
            <div className="col-xs-12 col-md-5">
              <p style={{marginBottom:0}}>Select a genre</p>  
              <Select size='large' style={{ display: 'block' }} onChange={this.handleSelect}>{moviesGenres.genres.map((item, index) => <Option key={item.id}>{item.name}</Option>)}</Select>
            </div>
            <div className="col-xs-12 col-md-2">
              <Button icon='filter' type='primary' onClick={this.filter}>{this.state.filterEnabled ? `Clear Filters`:`Filter`}</Button>
            </div>
            <div className="col-xs-12" style={{marginTop:'20px'}}>
              <Pagination total={movies.total_results} current={this.state.filterData.page} pageSize={20}  onChange={this.handleChangePage}/>
            </div>
            <p>&nbsp;</p>
          </div>
          <div className="row">
            {movies.results.map((item, index) => {
              return (
                <div className="col-xs-12 col-md-6" key={`Movie_${index}`}>
                  <Link to={`/movie/id/${item.id}`}>
                    <MovieBox data={item} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </MainLayout>
    );
  }
}

MoviesRoute.propTypes = {};

export default connectStore({
  moviesModule: moduleMovie
})(MoviesRoute);
