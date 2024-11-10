import React from 'react';
import PropTypes from 'prop-types';
import './CircleItem.css';

const CircleItem = ({
  x,
  y,
  svgIcon,
  text,
  color = 'teal',
  status = 'incomplete',
}) => {
  const statusColor = status === 'completed' ? 'green' : color;

  const containerStyle = {
    position: 'absolute',
    left: x,
    top: y,
  };

  return (
    <div className="circle-container" style={containerStyle}>
      <div className="circle" style={{ backgroundColor: statusColor }}>
        {svgIcon} {/* Render the passed SVG directly */}
      </div>
      <div className="circle-text">{text}</div>
    </div>
  );
};

CircleItem.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  svgIcon: PropTypes.element.isRequired,
  text: PropTypes.string,
  color: PropTypes.string,
  status: PropTypes.oneOf(['completed', 'incomplete']),
};

export default CircleItem;
