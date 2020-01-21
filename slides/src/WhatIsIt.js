import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { UL, LI, Div, HR } from './elements';
import { Step, Substep } from './impress';
import { Title, Subheading, Content, SectionName, ContentHeading } from './style';
import Blockquote from './Blockquote';
import { colors } from './style-variables';
import { prop } from './nodash';

const WhatIsItRoot = styled(Div)`
  background-image: linear-gradient(to bottom, ${colors.cyan}, ${colors.yellow}, ${colors.pink}, ${colors.violet}) !important;
`;
const SectionTag = (props) => (<SectionName light containerPadding={props.containerPadding}>What is it?</SectionName>);
SectionTag.propTypes = { containerPadding: PropTypes.number.isRequired };

const stepPropGenerator = (props) => (stepNumber) => ({
  x: props.x - (stepNumber - 1),
  y: props.y,
  z: props.z,
  rotateY: props.rotateY,
  rotateZ: props.rotateZ,
  padding: props.padding,
});

const ChangingBackground = styled(Div)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  /* height: 100%; */
  /* width: 100%; */
  padding: ${prop('padding')}rem;
  background: ${prop('background')};
  opacity: 0;
  transition: opacity 1500ms linear;
  &.active {
    opacity: 1;
  }
`;

const darkenBackground = (level, background) => `linear-gradient(to bottom, rgba(0,0,0,${level}),rgba(0,0,0,${level})), ${background}`;
const backgrounds = [
  darkenBackground(0.7, 'center / 100% url("hal.gif")'),
  darkenBackground(0.8, 'center / 150% auto url("matrix.gif")'),
  darkenBackground(0.7, 'top -70px left -80px/ 158% url("terminator.gif")'),
];
function LessLikeThis(props) {
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex((currentValue) => {
        const targetIndex = currentValue + 1;
        return targetIndex < backgrounds.length ? targetIndex : 0;
      });
    }, props.interval);
    return () => clearInterval(interval);
  });

  return (
      <React.Fragment>
          <SectionTag containerPadding={0} />
          <ChangingBackground background={backgrounds[0]} className={backgroundIndex === 0 ? 'active' : 'inactive'} />
          <ChangingBackground background={backgrounds[1]} className={backgroundIndex === 1 ? 'active' : 'inactive'} />
          <ChangingBackground background={backgrounds[2]} className={backgroundIndex === 2 ? 'active' : 'inactive'} />
          <div style={{ padding: `${props.padding}rem` }}>
              <Title light>So, less like this...</Title>
              <Subheading light>(For now, anyway.)</Subheading>
              <Content light>
                  <ContentHeading light>Artificial Generative Intelligence <strong>(AGI)</strong></ContentHeading>
                  Broad, human-like intelligence, capable of playing chess *or* driving a car.<br />
                  Generally, the famous robots in science fiction demonstrate AGI.<br />
                  If it&apos;s even possible, it&apos;s still quite a ways off.
              </Content>
          </div>
      </React.Fragment>
  );
}
LessLikeThis.propTypes = {
  padding: PropTypes.number.isRequired,
  interval: PropTypes.number.isRequired,
};


export default function WhatIsIt(props) {
  const { padding } = props;
  const getStepProps = stepPropGenerator(props);
  return (
      <WhatIsItRoot>
          <Step {...getStepProps(1)}>
              <Title light>What is it?</Title>
              <Blockquote light cite="Tom Mitchell, Machine Learning, 1997">
                A computer program is said to learn from experience <i>E</i> with respect to some task <i>T</i> and some performance measure <i>P</i> if its performance on <i>T</i>, as measured by <i>P</i>, improves with experience <i>E</i>.
              </Blockquote>
              <Substep>
                  <HR light />
                  <Content light>
                      <ContentHeading light>In other words...</ContentHeading>
                      <UL light>
                          <LI><strong>[E]</strong>xperience: The stuff you give it to learn from.</LI>
                          <LI><strong>[T]</strong>ask: What you use it for.</LI>
                          <LI><strong>[P]</strong>erformance: How good it is at its job.</LI>
                      </UL>
                  </Content>
              </Substep>
          </Step>
          <Step {...getStepProps(2)} padding={0}>
              <LessLikeThis interval={10000} padding={padding} />
          </Step>
          <Step {...getStepProps(3)} style={{ display: 'flex', flexDirection: 'column' }}>
              <SectionTag containerPadding={padding} />
              <Title light>And more like this...</Title>
              <Subheading light>Dust off the TI-82</Subheading>
              <HR light />
              <Content light style={{ display: 'flex', flexDirection: 'column' }}>
                  <img src="quadratic-equation.jpg" style={{ width: '50%', marginLeft: '25%', marginRight: '25%' }} />
              </Content>
              <HR light />
              <Content light>
                  <ContentHeading light>Artificial Narrow Intelligence <strong>(ANI)</strong></ContentHeading>
                  Performs a single task very well.<br />The more narrow the task, the better the results.
                  <UL light>
                      <LI>Great at chess, but can&apos;t identify a cat.</LI>
                      <LI>Can Identify a cat from space, but can&apos;t park your car.</LI>
                  </UL>
              </Content>
          </Step>
          <Step {...getStepProps(4)}>
              <SectionTag containerPadding={padding} />
              <Title light>Model Example</Title>
              <Content light>
                  <HR light />
                  <img src="linear-regression.jpeg" style={{ width: '80%', margin: '0px 10%' }} />
                  <HR light />
                  <ContentHeading light>The Same, Yet Different</ContentHeading>
                  <UL light>
                      <LI>Many more dimensions than X and Y</LI>
                      <LI>Really, dimensions limited only by compute power.</LI>
                      <LI>Humans aren&apos;t great at thinking in multiple dimensions.</LI>
                  </UL>
                  <HR light />
              </Content>
          </Step>
      </WhatIsItRoot>
  );
}
WhatIsIt.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  z: PropTypes.number.isRequired,
  rotateY: PropTypes.number.isRequired,
  rotateZ: PropTypes.number.isRequired,
  padding: PropTypes.number.isRequired,
};
