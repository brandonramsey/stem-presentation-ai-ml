import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { UL, LI, Div, HR } from './elements';
import { Step, Substep } from './impress';
import { Title, Subheading, Content, SectionName, ContentHeading } from './style';
import Blockquote from './Blockquote';
import { prop } from './nodash';

const SectionTag = () => (<SectionName light containerPadding={2}>Why now?</SectionName>);

const stepPropGenerator = (props) => (stepNumber) => ({
  x: props.x - (stepNumber - 1),
  y: props.y,
  z: props.z,
  rotateY: props.rotateY,
  rotateZ: props.rotateZ,
  padding: props.padding,
});

export default function WhyNow(props) {
  const getStepProps = stepPropGenerator(props);
  return (
      <React.Fragment>
          <Step {...getStepProps(1)}>
              <Title light>Why now?</Title>
              <Subheading light>Everyone is doing it.</Subheading>
              <br />
              <Content light>
              <ContentHeading light>It isn&apos;t new</ContentHeading>
                Machine Learning has been around since the 1950s
                </Content>
              <HR light />
              <Content light>
                <ContentHeading light>But...</ContentHeading>
                There&apos;s more available data than ever.<br />
                Computers are faster and cheaper than ever.<br />
                There are a ton of great tools available.<br />
              </Content>
              <HR light />
              <Content light>
                <ContentHeading light>And...</ContentHeading>
                Every business wants a piece of it.
              </Content>

          </Step>
      </React.Fragment>
  );
}
WhyNow.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  z: PropTypes.number.isRequired,
  rotateY: PropTypes.number.isRequired,
  rotateZ: PropTypes.number.isRequired,
  padding: PropTypes.number.isRequired,
};
