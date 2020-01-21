import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';
import Step from './impress/Step';
import { Div } from './elements';
import { omit, prop } from './nodash';

const WhiteSlideRoot = styled(Div)`
  height: 100%;
  width: 100%;
  background: #fefefe;
  border-radius: 2px;
  border: 0.15rem rgba(0,0,0,0.26) solid;
  padding: ${prop('padding')}rem;
`;

export default function WhiteSlide(props) {
  const passedProps = omit(Object.keys(WhiteSlide.propTypes))(props);
  return (
      <Step {...passedProps} padding={0} >
          <WhiteSlideRoot style={props.style} padding={props.padding} >
              {props.children}
          </WhiteSlideRoot>
      </Step>
  );
}
WhiteSlide.propTypes = {
  children: PropTypes.node.isRequired,
  style: stylePropType,
  padding: PropTypes.number,
};
WhiteSlide.defaultProps = { style: null, padding: 2 };
