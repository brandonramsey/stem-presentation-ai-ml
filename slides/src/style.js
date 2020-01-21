import styled from 'styled-components';
import { H1, H2, H3, H4, H5, H6, P } from './elements';
import { colors, fontWeight } from './style-variables';
import { prop } from './nodash';

export const Title = styled(H2)`
  color: ${props => (props.light ? colors.lightText.secondary : colors.text.secondary)} !important;
`;

export const Subheading = styled(H5).attrs({ as: 'h3' })`
  color: ${props => (props.light ? colors.lightText.tertiary : colors.text.tertiary)};
  margin-top: -0.3rem;
`;

export const Content = styled(P)``;

export const ContentHeading = styled(H6).attrs({ as: 'h4' })``;

export const Caption = styled(Content)`
  font-size: 0.75rem;
  letter-spacing: 0.4px;
  font-style: italic;
  color: ${props => (props.light ? colors.lightText.tertiary : colors.text.tertiary)};
`;

export const SectionName = styled(Caption).attrs({ as: 'h1' })`
  margin: 0;
  position: absolute;
  top: -${props => props.containerPadding}rem;
  left: ${props => (props.containerPadding ? `calc(-${props.containerPadding}rem + 2rem)` : '2rem')};
  /* left: -1.5rem; */
  font-weight: 800 !important;
  font-style: normal !important;
  text-transform: uppercase;
  opacity: 0.25 !important;
  &:before {
    content: '[';
  }
  &:after {
    content: ']';
  }
`;
