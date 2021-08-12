import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { LastLocationProvider } from 'react-router-last-location';

import routes from './routes';

const App = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <LastLocationProvider>{routes}</LastLocationProvider>
    </ConnectedRouter>
  );
};

export default App;
