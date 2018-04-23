import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MainLayout from "./MainLayout";
import MovieBox from '../components/MovieBox';
import moviesModule from './../models/movies'
import {connectStore} from 'redux-box'
import {Link} from 'react-router-dom'
import { Pagination, DatePicker, Select, Button, message } from "antd";
const Option = Select.Option;

class SeriesRoute extends Component {

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
    this.props.mediaModule.requestSeries(this.state.filterData)
    this.props.mediaModule.fetchTvGenres();
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
    this.props.mediaModule.setGenreFilter(value)
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
    },()=>this.props.mediaModule.requestSeries(this.state.filterData))



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
          this.props.mediaModule.setDateFilter(this.state.filterData.date)
          this.props.mediaModule.setGenreFilter(this.state.filterData.genre)
          this.props.mediaModule.requestSeries(this.state.filterData);
        }else{
          this.props.mediaModule.setDateFilter(null)
          this.props.mediaModule.setGenreFilter(null)
          this.props.mediaModule.requestSeries(this.state.filterData);
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
    this.props.mediaModule.setDateFilter(value.format('YYYY'))
    this.setState(prevState => {
      return {
        ...prevState,
        filterData: {
          ...prevState.filterData,
          date:value.format('YYYY')
        }
      }
    },()=>{
      console.log(this.props.mediaModule.getMoviesFiltered(this.state.filterData.date))
    })



  }


  render() {
    const {mediaModule:{series},mediaModule:{tvGenres}} = this.props;
    return (
      <MainLayout>
        <div className='container'>
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
              <Select size='large' style={{ display: 'block' }} onChange={this.handleSelect}>{tvGenres.genres.map((item, index) => <Option key={item.id}>{item.name}</Option>)}</Select>
            </div>
            <div className="col-xs-12 col-md-2">
              <Button icon='filter' type='primary' onClick={this.filter}>{this.state.filterEnabled ? `Clear Filters`:`Filter`}</Button>
            </div>
            <div className="col-xs-12" style={{marginTop:'20px'}}>
              <Pagination total={series.total_results} current={this.state.filterData.page} pageSize={20}  onChange={this.handleChangePage}/>
            </div>
            <p>&nbsp;</p>
          </div>
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
