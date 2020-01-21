import React from 'react';
import PropTypes from 'prop-types';
import WhiteSlide from './WhiteSlide';
import { Title, Subheading, Content, SectionName, ContentHeading, Caption } from './style';
import { UL, LI, HR } from './elements';
import { Substep } from './impress';
import Blockquote from './Blockquote';

const SectionTitle = () => <SectionName containerPadding={0}>Introduction</SectionName>;
const slidePropsGenerator = props => slideNumber => ({
  x: props.x + (slideNumber - 1),
  y: props.y,
  z: props.z,
});
export default function Intro(props) {
  const slideProps = slidePropsGenerator(props);
  return (
      <React.Fragment>
          <WhiteSlide {...slideProps(1)} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Title>Machine Learning & Artificial Intelligence</Title>
              <Subheading>A really, really, really high-level overview.</Subheading>
          </WhiteSlide>
          <WhiteSlide {...slideProps(2)} >
              <SectionTitle />
              <Title>About Me</Title>
              <HR />
              <Content>
                  <ContentHeading>My family</ContentHeading>
                  <UL>
                      <LI>Three kids: Jacoby, Lorelei, and Cate</LI>
                      <LI>Three cats: Millie, Scooter, and Bellatrix</LI>
                      <LI>Two dogs: Lando and Newton</LI>
                      <LI>One wife: Jennifer</LI>
                      <Substep><LI>Still lives with mom.</LI></Substep>
                  </UL>
              </Content>
              <HR />
              <Content>
                https://github.com/brandonramsey/<br />
                <Caption>Disclaimer: I&apos;m not very good at this.</Caption>
              </Content>
          </WhiteSlide>
          <WhiteSlide {...slideProps(3)} >
              <SectionTitle />
              <Title>About Me: Work</Title>
              <Subheading>Fishtech: Cybersecurity Consulting</Subheading>
              <HR />
              <div style={{ display: 'flex' }}>
                  <Blockquote cite="Gary Fish, CEO">
                      “Born in the cloud, Fishtech is a digital-era cybersecurity company leading our clients through next-generation cloud, IT, and security transformation challenges.”
                  </Blockquote>
                  <img src="fishtech-building.jpg" style={{ width: 'auto', height: 'auto', maxHeight: '35vh', alignSelf: 'center' }} />
              </div>
              <HR />
          </WhiteSlide>
      </React.Fragment>
  );
}
Intro.propTypes = { x: PropTypes.number.isRequired, y: PropTypes.number.isRequired, z: PropTypes.number.isRequired };

