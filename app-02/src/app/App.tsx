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
import { ButtonsComp } from './components/buttons.component';

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
            <Route path="/" element={ <Home /> } />
            <Route path="topics/*" element={ <Topics /> } >
              <Route path=":topicId" element={ <Topic /> } />
            </Route>
            <Route path="/shelf" element={ <Shelf /> } />
            <Route path="/editor" element={ <MyEditor /> } />
            <Route path="/bar" element={ <BarComp /> } />
            <Route path="/button" element={ <ButtonsComp /> } />
            <Route path="*" element={ Dummy } />
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </>
  );
};
