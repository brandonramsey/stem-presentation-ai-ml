/* global impress */
import 'impress.js';
import React, { PureComponent } from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import ImpressContext from './ImpressContext';

export default class Impress extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    transitionDuration: PropTypes.number,
  };
  static defaultProps = {
    children: null,
    transitionDuration: 1000,
  };
  constructor(props) {
    super(props);
    this.height = document.documentElement.clientHeight;
    this.width = document.documentElement.clientWidth;
    this.depth = document.documentElement.clientHeight;
    this.contextValues = {
      height: this.height,
      width: this.width,
      depth: this.depth,
      transitionDuration: props.transitionDuration,
    };
  }
  componentDidMount() {
    const impressAPI = impress('impress');
    impressAPI.init();
  }
  render() {
    const { children } = this.props;
    return (
        <ImpressContext.Provider value={this.contextValues}>
            <div>
                <div id="impress"
                    data-transition-duration={this.contextValues.transitionDuration}
                    data-height={this.height}
                    data-width={this.width}
                >
                    {children}
                </div>
            </div>
        </ImpressContext.Provider>
    );
  }
}
