import React, {PureComponent} from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import PropTypes from 'prop-types';

class MainLayout extends PureComponent {
  render() {
    return (
      <div className="App container-fluid no-gutters no-padding">
        <Header/>
        <div className='App-intro'>

          {this.props.children}

        </div>

        <Footer/>

      </div>
    );
  }
}

MainLayout.propTypes = {};

export default MainLayout;
