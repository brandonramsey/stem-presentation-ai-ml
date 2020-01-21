import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { UL, LI, Div, HR } from './elements';
import { Step, Substep } from './impress';
import { Title, Subheading, Content, SectionName, ContentHeading, Caption } from './style';
import Blockquote from './Blockquote';
import { prop } from './nodash';


const SectionTag = () => (<SectionName light containerPadding={2}>teaching the machine</SectionName>);

const stepPropGenerator = (props) => (stepNumber) => ({
  x: props.x - (stepNumber - 1),
  y: props.y,
  z: props.z,
  rotateY: props.rotateY,
  rotateZ: props.rotateZ,
  padding: props.padding,
});

const ScaledImage = (props) => <img src={props.src} style={{ width: 'auto', height: 'auto', maxWidth: '80vw', maxHeight: '80vh' }} />;
export default function TeachingTheMachine(props) {
  const getStepProps = stepPropGenerator(props);
  return (
      <React.Fragment>
          <Step {...getStepProps(1)}>
              <Title light>Teaching the Machine</Title>
              <Subheading light>E is for Experience.</Subheading>
              <br />
              <Content light>
                  <ContentHeading light>Our Machine&apos;s [T]ask:</ContentHeading>
                  Given some information about a vehicle of some sort, predict how fast it is.
              </Content>
              <HR light />
          </Step>
          <Step {...getStepProps(2)}>
              <SectionTag />
              <Title light>Data Sets</Title>
              <br />
              <Content light>
                  <ContentHeading light>The stuff we give the machine</ContentHeading>
                  We <strong>should</strong> use uniform information -- same properties for each record<br />
                  The information we give the machine already has solutions.<br />
                  After training, we can ask the machine to predict for vehicles it has never seen.<br />
              </Content>
              <HR light />
          </Step>
          <Step {...getStepProps(3)}>
              <SectionTag />
              <Title light>Some terminology</Title>
              <br />
              <Content light>
                  <ContentHeading light>Supervised Learning</ContentHeading>
                  The training data you feed to the algorithm includes the desired solutions.
              </Content>
              <Content light>
                  <ContentHeading light>Regression</ContentHeading>
                  The example machine will try to come up with a specific value, given a set of features.
                  <Caption light>Another type is classification, in which the machine tries to organize records into one or more &quot;classes&quot; -- good/bad, spam/not spam</Caption>
              </Content>
          </Step>
          <Step {...getStepProps(4)}>
              <SectionTag />
              <Title light>Vehicle #1</Title>
              <Content>
                  <ScaledImage src="red-lambo.jpg" />
              </Content>
          </Step>
          <Step {...getStepProps(5)}>
              <SectionTag />
              <Title light>Vehicle #2</Title>
              <Content>
                  <ScaledImage src="red-semi.jpg" />
              </Content>
          </Step>
          <Step {...getStepProps(6)}>
              <SectionTag />
              <Title light>Vehicle #3</Title>
              <Content>
                  <ScaledImage src="gray-f22.jpg" />
              </Content>
          </Step>
          <Step {...getStepProps(8)}>
              <SectionTag />
              <Title light>Running the model</Title>
              <Subheading light>What will our new machine tell us about this vehicle?</Subheading>
              <Content>
                  <ScaledImage src="gray-trike.jpg" />
              </Content>
          </Step>
          <Step {...getStepProps(9)}>
            <SectionTag />
            <Title light>Testing the machine</Title>
            <Content light>
              <ContentHeading light>Hold back some labeled data for later!</ContentHeading>
              We can use it to find out how accurate our machine is.
            </Content>
            <HR />
            <Content light>
              <ContentHeading>Beware of overfitting!</ContentHeading>
              We dont want our machine to get too good at predicting our data set, but terrible at predicting with new data.
            </Content>
          </Step>
      </React.Fragment>
  );
}
TeachingTheMachine.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  z: PropTypes.number.isRequired,
  rotateY: PropTypes.number.isRequired,
  rotateZ: PropTypes.number.isRequired,
  padding: PropTypes.number.isRequired,
};
