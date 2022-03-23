import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BaseNavigation } from './components/base-page/base-navigation.component';
import { ErrorNavBar } from './components/base-page/error-nav-bar.component';
import { Dummy } from './components/dummy.component';
import { MyEditor } from './components/editor.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';
import { Home } from './components/home.component';
import { Shelf } from './components/shelf.component';
import { BarComp } from './components/bar.component';
import { Topic } from './components/topic.component';
import { Topics } from './components/topics.component';
import { CustomMuiControls } from './components/custom-mui-controls.component';
import { RouteLink } from './datatypes/common';

type FcProps = {
  customProp?: any;
};

export const App: React.FC<FcProps> = ( props ) => {
  return (
    <>
      <ErrorBoundary fallBack={ <ErrorNavBar /> }>
        <BrowserRouter>
          <BaseNavigation />

          <Routes>
            <Route path={ RouteLink.root } element={ <Home /> } />
            <Route path={ RouteLink.topics + RouteLink.nested } element={ <Topics /> } >
              <Route path={ RouteLink.topicId } element={ <Topic /> } />
            </Route>
            <Route path={ RouteLink.shelf } element={ <Shelf /> } />
            <Route path={ RouteLink.editor } element={ <MyEditor /> } />
            <Route path={ RouteLink.bar } element={ <BarComp /> } />
            <Route path={ RouteLink.fancy } element={ <CustomMuiControls /> } />
            <Route path={ RouteLink.empty } element={ Dummy } />
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </>
  );
};
