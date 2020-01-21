import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Step from './impress/Step';
import { Div } from './elements';
import { prop, omit } from './nodash';

const calculateBrightnessGradient = (darken) => {
  if (!darken) return '';
  const colorValue = darken > 0 ? 0 : 255; // Blend image with black if darkening or white if lightening (negative darken value)
  const opacity = darken > 0 ? Math.min(1, darken) : Math.max(-1, darken);
  const result = [
    'linear-gradient(to bottom, ',
    `rgba(${colorValue},${colorValue},${colorValue},${opacity}), `,
    `rgba(${colorValue},${colorValue},${colorValue},${opacity})`,
    '), ',
  ].join('');
  return result;
};
const Root = styled(Div)`
  height: 100%;
  width: 100%;
  background-color: white;
  background-image: ${props => {
    const brightnessGradient = calculateBrightnessGradient(props.darken);
    return `${brightnessGradient} ${props.image}`;
  }};
  background-size: ${prop('size')};
  background-position: ${prop('position')};
  background-blend-mode: ${prop('blendMode')};
  padding: ${prop('padding')}rem;
`;

export default function ImageBackground(props) {
  const passedProps = omit(Object.keys(ImageBackground.propTypes))(props);
  return (
      <Step {...passedProps} padding={0} >
          <Root image={props.image} size={props.size} position={props.position} darken={props.darken} padding={props.padding} >
              {props.children}
          </Root>
      </Step>
  );
}
ImageBackground.propTypes = {
  children: PropTypes.node,
  darken: PropTypes.number,
  image: PropTypes.string,
  light: PropTypes.bool,
  padding: PropTypes.number,
  position: PropTypes.string,
  size: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.string,
};
ImageBackground.defaultProps = {
  padding: 2,
  darken: 0,
  children: null,
  image: 'none',
  light: false,
  position: 'top left',
  size: 'auto',
  subtitle: '',
  title: '',
};

