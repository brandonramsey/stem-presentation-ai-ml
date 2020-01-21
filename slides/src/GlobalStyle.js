import { createGlobalStyle } from 'styled-components';
import { fontWeight, colors } from './style-variables';

const { slate } = colors;
export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:${fontWeight.light},${fontWeight.normal},${fontWeight.heavy}&display=swap');
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html {
    font-size: 2.4vw;
    font-family: Roboto, sans-serif;
    font-weight: ${fontWeight.normal};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    margin: 0;
    background: linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,1)),linear-gradient(to right, ${slate.darkest}, ${slate.darker}, ${slate.dark});
  }
`;
