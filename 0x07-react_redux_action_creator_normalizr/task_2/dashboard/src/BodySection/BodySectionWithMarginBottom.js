import React from 'react';
import PropTypes from 'prop-types';
import BodySection from './BodySection';
import './BodySection';

const BodySectionWithMarginBottom = (props) => {
  return (
    <div className="bodySectionWithMargin">
      <BodySection {...props} />
    </div>
  );
};

BodySectionWithMarginBottom.propTypes = {
  ...BodySection.propTypes,
};

export default BodySectionWithMarginBottom;
