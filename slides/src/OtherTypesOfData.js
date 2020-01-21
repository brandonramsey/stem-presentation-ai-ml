import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { UL, LI, Div, HR } from './elements';
import { Step, Substep } from './impress';
import { Title, Subheading, Content, SectionName, ContentHeading, Caption } from './style';
import Blockquote from './Blockquote';
import { prop } from './nodash';


const SectionTag = () => (<SectionName light containerPadding={2}>other types of data</SectionName>);

const stepPropGenerator = (props) => (stepNumber) => ({
  x: props.x - (stepNumber - 1),
  y: props.y,
  z: props.z,
  rotateY: props.rotateY,
  rotateZ: props.rotateZ,
  padding: props.padding,
});

export default function OtherTypesOfData(props) {
  const getStepProps = stepPropGenerator(props);
  return (
      <React.Fragment>
          <Step {...getStepProps(1)}>
              <Title light>Other Types of Data</Title>
              <Subheading light>That&apos;s Great, but What about cool stuff?</Subheading>
              <br />
              <Content light>
                  <ContentHeading light>The trick:</ContentHeading>
                  Figure out how to make other data look like the data from our vehicle speed machine.<br />
                  i.e. Convert it into a set of features.
              </Content>
              <HR light />
          </Step>
          <Step {...getStepProps(2)}>
              <SectionTag />
              <Title light>Words and Sentences</Title>
              <br />
              <Content light>
                  <ContentHeading light>Chat Bots:</ContentHeading>
                    Chat #1: Send me to the finance department.<br />
                  <Substep>Chat #2: Please don&apos;t send me to the finance department.</Substep>
                  <Substep>Chat #3: This stupid thing will only send me to the finance department.</Substep>
              </Content>
              <HR light />
              <Substep>
                  <Content>
                      <ContentHeading light>Bag of words and n-gram models</ContentHeading>
                  </Content>
                  <HR light />
              </Substep>
          </Step>
          <Step {...getStepProps(3)}>
              <SectionTag />
              <Title light>Images</Title>
              <Subheading>Getting more difficult...</Subheading>
              <br />
              <Content light>
                  <ContentHeading light>Convert to an grid of pixels</ContentHeading>
                    Convert every image into a same-sized grid of pixels<br />
                    e.g., slice every image into an 8x8 grid of pixels and you have 64 features.<br />
                    You could use the color of the pixel as a feature?
              </Content>
              <HR light />
          </Step>
      </React.Fragment>
  );
}
OtherTypesOfData.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  z: PropTypes.number.isRequired,
  rotateY: PropTypes.number.isRequired,
  rotateZ: PropTypes.number.isRequired,
  padding: PropTypes.number.isRequired,
};
