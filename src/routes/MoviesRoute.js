import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import MovieBox from "../components/MovieBox";
import MainLayout from "./MainLayout";
import { connectStore } from "redux-box";
import { Link } from "react-router-dom";
import moduleMovie from "./../models/movies";
import { Pagination, DatePicker, Select } from "antd";
const Option = Select.Option;
class MoviesRoute extends PureComponent {
  componentDidMount() {
    this.props.moviesModule.requestMovies();
  }

  handleSelect = (value) => {
    
  }
  handleChange(date,dateString) {
    console.log(date,dateString);
  }

  render() {
    const {
      moviesModule: { movies }
    } = this.props;
    return (
      <MainLayout>
        <div className="container">
          <div className="row">
            <div className="col-xs-6">
              <DatePicker
                onChange={this.handleChange}
                format="YYYY"
                mode='year'
              />
            </div>
            <div className="col-xs-6">
              <Select>
                
              </Select>
            </div>
            <div className="col-xs-12">
              <Pagination />
            </div>
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
