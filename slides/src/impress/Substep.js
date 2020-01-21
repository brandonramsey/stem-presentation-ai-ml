import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import styled from 'styled-components';

import ImpressContext from './ImpressContext';
import { prop, isNull, omit, isNumber } from '../nodash';

const Root = styled.div`
  box-sizing: border-box;
  transition: ${prop('transition')};
  opacity: 0;
  ${prop('baseStyle')}
  &.substep-visible {
    opacity: 1;
    ${prop('visibleStyle')}
  }
  &.substep-active {
    ${prop('activeStyle')}
  }
`;

function getTransition(props, context) {
  if (!isNull(props.transition)) return props.transition; // If we specified a transition in props, use that.
  // If a transitionDuration was specified in props, use that. Otherwise, use half of the transitionDuration from the Impress context.
  const transitionDuration = isNumber(props.transitionDuration) ? props.transitionDuration : context.transitionDuration / 1.5;
  return `opacity ${transitionDuration}ms;`;
}

export default function Substep(props) {
  const context = useContext(ImpressContext);
  const passedProps = omit(...Object.keys(Substep.propTypes))(props);
  return (
      <Root {...passedProps}
          baseStyle={props.baseStyle}
          className="substep substep-root"
          visibleStyle={props.visibleStyle}
          transition={getTransition(props, context)}
      >
          {props.children}
      </Root>
  );
}
Substep.propTypes = {
  activeStyle: PropTypes.string,
  baseStyle: PropTypes.string,
  children: PropTypes.node,
  transitionDuration: PropTypes.number,
  transition: PropTypes.string,
  visibleStyle: PropTypes.string,
};
Substep.defaultProps = {
  activeStyle: '',
  baseStyle: '',
  children: PropTypes.node,
  transition: null,
  transitionDuration: null,
  visibleStyle: null,
};
