import styled from 'styled-components';
import { prop } from './nodash';
import { colors, fontWeight } from './style-variables';

const { lightText, text, lightBorder, border } = colors;

export const H1 = styled.h1`
  box-sizing: border-box;
  color: ${props => (props.light ? lightText.tertiary : text.tertiary)};
  font-size: 6rem;
  font-weight: ${fontWeight.light};
  letter-spacing: -${1 / 25}em;
  line-height: 1.05;
  margin: 0;
`;

export const H2 = styled.h2`
  box-sizing: border-box;
  color: ${props => (props.light ? lightText.secondary : text.secondary)};
  font-size: 3.75rem;
  font-weight: ${fontWeight.light};
  letter-spacing: -${1 / 50}em;
  line-height: 1;
  margin: 0;
`;

export const H3 = styled.h3`
  box-sizing: border-box;
  color: ${props => (props.light ? lightText.secondary : text.secondary)};
  font-size: 3rem;
  font-weight: ${fontWeight.normal};
  letter-spacing: normal;
  line-height: 1;
  margin: 0;
`;

export const H4 = styled.h4`
  box-sizing: border-box;
  color: ${props => (props.light ? lightText.secondary : text.secondary)};
  font-size: 2.125rem;
  font-weight: ${fontWeight.normal};
  letter-spacing: ${1 / 75}em;
  line-height: 1;
  margin: 0;
`;
export const H5 = styled.h5`
  box-sizing: border-box;
  color: ${props => (props.light ? lightText.secondary : text.secondary)};
  font-size: 1.5rem;
  font-weight: ${fontWeight.normal};
  letter-spacing: normal;
  line-height: 1;
  margin: 0;
`;
export const H6 = styled.h6`
  box-sizing: border-box;
  color: ${props => (props.light ? lightText.tertiary : text.tertiary)};
  font-size: 1.25rem;
  font-weight: ${fontWeight.heavy};
  letter-spacing: ${1 / 100}em;
  line-height: 1;
  margin: 0;
`;

export const P = styled.p`
  font-size: 1rem;
  margin: 1rem 2rem;
  color: ${props => (props.light ? lightText.primary : text.primary)};
  line-height: 1.54;
`;

export const Div = styled.div`
  box-sizing: border-box;
  display: block;
  margin: 0;
  padding: 0;
`;

export const LI = styled.li`
`;

export const UL = styled.ul`
  color: ${props => (props.light ? lightText.primary : text.primary)};
  list-style: none;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  & ${LI} {
    color: ${props => (props.light ? lightText.primary : text.primary)};
    color: ${prop('color')};
    line-height: 1.25;
    &:before {
      content: "\\2022";
      color: ${colors.yellow};
      margin-left: -1em;
      width: 0.8em;
      display: inline-block;
    }
  }
`;


export const HR = styled.hr`
  border: none;
  border-bottom: ${1 / 20}rem solid ${props => (props.light ? lightBorder : border)};
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

