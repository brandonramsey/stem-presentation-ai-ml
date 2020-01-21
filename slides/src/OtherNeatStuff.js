import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { UL, LI, Div, HR } from './elements';
import { Step, Substep } from './impress';
import { Title, Subheading, Content, SectionName, ContentHeading, Caption } from './style';
import Blockquote from './Blockquote';
import { prop } from './nodash';


const SectionTag = () => (<SectionName light containerPadding={2}>other stuff</SectionName>);

const stepPropGenerator = (props) => (stepNumber) => ({
  x: props.x - (stepNumber - 1),
  y: props.y,
  z: props.z,
  rotateY: props.rotateY,
  rotateZ: props.rotateZ,
  padding: props.padding,
});

export default function OtherNeatStuff(props) {
  const getStepProps = stepPropGenerator(props);
  return (
      <React.Fragment>
          <Step {...getStepProps(1)}>
              <Title light>Other Stuff</Title>
              <Subheading light>An assortment of other cool AI/ML things.</Subheading>
          </Step>
          <Step {...getStepProps(2)} padding={0}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)),center / 150% url(ai-faces.jpg)', padding: '2rem' }}>
                  <SectionTag />
                  <Title light>They do not exist</Title>
                  <Subheading light>And they never will</Subheading>
                  <HR />
                  <Content light>
                      <a href="https://www.thispersondoesnotexist.com/"><ContentHeading light>thispersondoesnotexist.com</ContentHeading></a>
                  </Content>
                  <HR />
              </div>
          </Step>
          <Step {...getStepProps(3)}>
              <SectionTag />
              <Title light>SubredditSimulator</Title>
              <Subheading light>By bots, for bots.</Subheading>
              <Content light>reddit.com/r/SubredditSimulator</Content>
          </Step>
          <Step {...getStepProps(4)}>
            <SectionTag />
            <Title light>AlphaGo</Title>
            <Subheading light>Deep Neural Network</Subheading>
          </Step>
          <Step {...getStepProps(5)}>
            <SectionTag />
            <Title light>Facebook AI Research</Title>
            <Subheading light>Chatbots develop "new language"</Subheading>
          </Step>
      </React.Fragment>
  );
}
OtherNeatStuff.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  z: PropTypes.number.isRequired,
  rotateY: PropTypes.number.isRequired,
  rotateZ: PropTypes.number.isRequired,
  padding: PropTypes.number.isRequired,
};
