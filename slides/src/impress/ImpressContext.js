import React from 'react';

const ImpressContext = React.createContext({
  height: 0,
  width: 0,
  depth: 0,
  transitionDuration: 0,
});
ImpressContext.displayName = 'ImpressContext';

export default ImpressContext;
