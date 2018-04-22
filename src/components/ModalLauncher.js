import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import SimpleModal from './Modal';


class SimpleModalLauncher extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  handleToggleModal() {
    this.setState({ showModal: !this.state.showModal });
  }


  render() {
    const {children} = this.props;
    const { showModal } = this.state;

    return (
      <div>
        <p className='Detail-btn-play' onClick={()=>this.handleToggleModal()}>
          <span><i className='fa fa-2x fa-play color-white'></i></span>
          <span className='ml-3'>Play Trailer</span>
        </p>
        {showModal &&
        <SimpleModal onCloseRequest={() => this.handleToggleModal()}>
          {children}
        </SimpleModal>}
      </div>
    );
  }
}

SimpleModalLauncher.propTypes = {

  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),

};

export default SimpleModalLauncher;
