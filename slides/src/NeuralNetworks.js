import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { UL, LI, Div, HR } from './elements';
import { Step, Substep } from './impress';
import { Title, Subheading, Content, SectionName, ContentHeading, Caption } from './style';
import Blockquote from './Blockquote';
import { prop } from './nodash';


const SectionTag = () => (<SectionName light containerPadding={2}>neural networks</SectionName>);

const stepPropGenerator = (props) => (stepNumber) => ({
  x: props.x - (stepNumber - 1),
  y: props.y,
  z: props.z,
  rotateY: props.rotateY,
  rotateZ: props.rotateZ,
  padding: props.padding,
});

export default function NeuralNetworks(props) {
  const getStepProps = stepPropGenerator(props);
  return (
      <React.Fragment>
          <Step {...getStepProps(1)}>
              <Title light>Neural Networks</Title>
              <Subheading light>Getting more powerful.</Subheading>
              <br />
              <Content light>
                  <ContentHeading light>Mimic the human brain</ContentHeading>
                  Each neuron/cell is its own little machine learning model.
              </Content>
              <HR light />
          </Step>
          <Step {...getStepProps(2)}>
              <SectionTag />
              <Title light>Some Examples</Title>
              <Subheading light>The Sandwich Problem</Subheading>
              <br />
              <Content light>
                  <ContentHeading light>Predict Whether a Sandwich is Tasty or Not</ContentHeading>
                  Peanut Butter and Jelly? Yum!
                  <Substep>Ham and cheese? Yum!</Substep>
                  <Substep>Ham and peanut butter? Nope!</Substep>
              </Content>
              <HR light />
              <Substep>
                  <Content>
                      <a href="https://playground.tensorflow.org/#activation=tanh&batchSize=10&dataset=circle&regDataset=reg-plane&learningRate=0.03&regularizationRate=0&noise=0&networkShape=4,2&seed=0.48308&showTestData=false&discretize=false&percTrainData=50&x=true&y=true&xTimesY=false&xSquared=false&ySquared=false&cosX=false&sinX=false&cosY=false&sinY=false&collectStats=false&problem=classification&initZero=false&hideText=false">
                          <ContentHeading light>TensorFlow Neural Network Playground</ContentHeading>
                      </a>
                  </Content>
                  <HR light />
              </Substep>
          </Step>
      </React.Fragment>
  );
}
NeuralNetworks.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  z: PropTypes.number.isRequired,
  rotateY: PropTypes.number.isRequired,
  rotateZ: PropTypes.number.isRequired,
  padding: PropTypes.number.isRequired,
};
