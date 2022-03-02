import { SnackbarOrigin } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createGenerateClassName, StylesProvider } from '@material-ui/core/styles';
import BasePage from 'app/components/base-page/base-page.component';
import ErrorBoundary from 'app/components/error-boundary/error-boundary.component';
import React from 'react';

const generateClassName = createGenerateClassName( {
  // prefix will show on final output / dev output
  productionPrefix: 'wp-q-',
} );

class App extends React.Component {
  snackOrigin: SnackbarOrigin = { vertical: 'bottom', horizontal: 'center', };

  render () {
    return (
      <React.Fragment>
        <ErrorBoundary fallBack={ <h2>Some Fatal error occurred</h2> }>
          <CssBaseline />
          <StylesProvider generateClassName={ generateClassName }>
            <BasePage />
          </StylesProvider>
        </ErrorBoundary>
      </React.Fragment>
    );
  }
}
export default App;