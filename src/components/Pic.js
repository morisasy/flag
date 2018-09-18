import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Box = styled.div`
  border-radius: ${props => (props.round ? '50%' : '0%')};
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  overflow: hidden;
  margin: 50px;
`;


Box.propTypes = {
  size: PropTypes.number,
  round: PropTypes.bool
};

Box.defaultProps = {
  size: 200,
  round: false
};

const Pic = props => {
  return (
    <Box size={props.size} round={props.round}>
      <img src={props.imgSrc} />
    </Box>
  );
};

Pic.propTypes = {
  imgSrc: PropTypes.string,
  size: PropTypes.number,
  round: PropTypes.bool
};

Pic.defaultProps = {
  imgSrc: 'https://www.rithmschool.com/assets/team/whiskey.jpg'
};

export default Pic;
