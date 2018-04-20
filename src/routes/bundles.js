import NProgress from "nprogress";
import Loadable from "react-loadable";
import React, {Component} from 'react';

class NProgressTag extends Component {
  componentWillMount () {
    NProgress.start()
  }

  componentWillUnmount () {
    NProgress.done()
  }

  render () {
    return <div />
  }
}

function Loading(props) {
  if (props.error) {
    return <div>Error!</div>;
  } else {
    return <NProgressTag/>;
  }
}

export default {
  movies:Loadable({
    loader: () => import('./MoviesRoute'),
    loading: Loading,
  }),
  series:Loadable({
    loader: () => import('./SeriesRoute'),
    loading: Loading,
  }),
  favorites:Loadable({
    loader: () => import('./FavoritesRoute'),
    loading: Loading
  }),
  details:Loadable({
    loader: () => import('./DetailsRoute'),
    loading: Loading
  })
}