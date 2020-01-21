import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import styled from 'styled-components';

import ImpressContext from './ImpressContext';
import { prop, omit, isNull } from '../nodash';

const Root = styled.div`
  opacity: 0.05; /* opacity of an inactive step */
  transition: opacity ${props => `${1.5 * props['data-transition-duration']}ms`};
  ${prop('baseStyle')}
  &.active { /* active class is added to current slide */
    opacity: 1;
    ${prop('activeStyle')}
  }
`;

const Container = styled.div`
  height: calc(100vh - ${props => props.padding * 2}rem);
  width: calc(100vw - ${props => props.padding * 2}rem);
`;

export default function Step(props) {
  const context = useContext(ImpressContext);
  const stepProps = {
    'data-rotate': props.rotate * 90,
    'data-rotate-x': props.rotateX * 90,
    'data-rotate-y': props.rotateY * 90,
    'data-rotate-z': props.rotateZ * 90,
    'data-scale': props.scale,
    'data-x': props.x * context.width,
    'data-y': props.y * context.height,
    'data-z': props.z * context.height,
    'data-transition-duration': isNull(props.transitionDuration) ? context.transitionDuration : props.transitionDuration,
  };
  const passedProps = omit(props, Object.keys(Step.propTypes));
  return (
      <Root {...stepProps} {...passedProps}
          className={`step step-root ${props.className}`}
          activeStyle={props.activeStyle}
          baseStyle={props.baseStyle}
      >
          <Container padding={props.padding} className="step-container">
              {props.children}
          </Container>
      </Root>
  );
}
Step.propTypes = {
  activeStyle: PropTypes.string,
  baseStyle: PropTypes.string,
  children: PropTypes.node,
  rotate: PropTypes.number,
  rotateX: PropTypes.number,
  rotateY: PropTypes.number,
  rotateZ: PropTypes.number,
  scale: PropTypes.number,
  transitionDuration: PropTypes.number,
  x: PropTypes.number,
  y: PropTypes.number,
  z: PropTypes.number,
  padding: PropTypes.number,
  className: PropTypes.string,
};
Step.defaultProps = {
  activeStyle: '',
  baseStyle: '',
  children: null,
  className: '',
  padding: 2,
  rotate: 0,
  rotateX: 0,
  rotateY: 0,
  rotateZ: 0,
  scale: 1,
  transitionDuration: null,
  x: 0,
  y: 0,
  z: 0,
};
