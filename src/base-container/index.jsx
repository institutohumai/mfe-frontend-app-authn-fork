import React from 'react';

import classNames from 'classnames';
import PropTypes from 'prop-types';

import '../sass/background.css';

const BaseContainer = ({ children, showWelcomeBanner }) => {
  return (
    <>
    <div className="backgroundAnimated "></div>
      <div className="backgroundBlack "></div>
      <div className="layout justify-content-center align-items-center ">
        <div className={classNames('content', { 'align-items-center mt-0': showWelcomeBanner })}>
          {children}
        </div>
      </div>
    </>
  );
};

BaseContainer.defaultProps = {
  showWelcomeBanner: false,
};

BaseContainer.propTypes = {
  children: PropTypes.node.isRequired,
  showWelcomeBanner: PropTypes.bool,
};

export default BaseContainer;
