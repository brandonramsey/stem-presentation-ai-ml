import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import * as style from './style';
import { colors } from './style-variables';
import { prop } from './nodash';

const Root = styled(style.Content).attrs({ as: 'blockquote' })`
  margin: 0px;
  /* margin-left: 1rem; */
`;
const Content = styled(style.Content)`
  border-left: ${1 / 5}rem solid;
  border-left-color: ${props => (props.light ? colors.lightText.secondary : colors.text.secondary)};
  border-left-color: ${prop('color')};
  padding-left: 1rem;
  /* color: ${props => (props.light ? colors.lightBorder : colors.border)}; */
  color: ${prop('color')};
  max-width: 27em;
`;

const Cite = styled(style.Caption).attrs({ as: 'cite' })`
  color: ${prop('color')};
  font-style: italic;
  position: relative;
  left: 1rem;
  top: -1rem;
`;

export default function Blockquote(props) {
  const { children, cite, light, quoteColor, citationColor } = props;
  return (
      <Root cite={cite} light={light} >
          <Content light={light} color={quoteColor}>
              {children}
          </Content>
          {cite && <Cite light={light} color={citationColor}> - {cite}</Cite>}
      </Root>
  );
}
Blockquote.propTypes = {
  children: PropTypes.node.isRequired,
  citationColor: PropTypes.string,
  cite: PropTypes.string,
  light: PropTypes.bool,
  quoteColor: PropTypes.string,
};
Blockquote.defaultProps = {
  citationColor: '',
  cite: null,
  light: false,
  quoteColor: '',
};

