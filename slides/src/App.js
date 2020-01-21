import React from 'react';
import { Impress } from './impress';
import GlobalStyle from './GlobalStyle';
import WhatIsIt from './WhatIsIt';
import Intro from './Intro';
import WhyNow from './WhyNow';
import TeachingTheMachine from './TeachingTheMachine';
import OtherTypesOfData from './OtherTypesOfData';
import NeuralNetworks from './NeuralNetworks';
import OtherNeatStuff from './OtherNeatStuff';

class App extends React.Component {
  render() {
    return (
        <React.Fragment>
            <GlobalStyle />
            <Impress transitionDuration={600} >
                <Intro x={0} y={0} z={-10} padding={5} />
                <WhatIsIt x={5} y={0} z={-9} rotateY={0} rotateZ={1} padding={2} />
                <WhyNow x={5} y={1} z={-8} rotateZ={1} rotateY={1} padding={2} />
                <TeachingTheMachine x={5} y={2} z={-7} rotateZ={1} rotateY={0.5} padding={2} />
                <OtherTypesOfData x={6} y={3} z={-6} rotateZ={1} rotateY={0} padding={2} />
                <NeuralNetworks x={6} y={10} z={0} rotateZ={0} rotateY={0} padding={2} />
                <OtherNeatStuff x={6} y={3} z={-4} rotateZ={2} rotateY={0} padding={2} />
            </Impress>
        </React.Fragment>
    );
  }
}

export default App;
