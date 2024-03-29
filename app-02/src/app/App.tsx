import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import '../i18n/i18n';

import { BarComp } from './components/bar.component';
import { BaseNavigation } from './components/base-page/base-navigation.component';
import { ErrorNavBar } from './components/base-page/error-nav-bar.component';
import { CustomMuiControls } from './components/custom-mui-controls.component';
import { Dummy } from './components/dummy.component';
import { MyEditor } from './components/editor.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';
import { Home } from './components/home.component';
import { MultiLingual } from './components/language/language.component';
import { WorkShop } from './components/learn-reducer/workshop.component';
import { Shelf } from './components/shelf.component';
import { Topic } from './components/topic.component';
import { Topics } from './components/topics.component';
import { RouteLink } from './datatypes/project-types';
import { MuiTable } from './components/mui-table/mui-table.component';
import { Fancy2 } from './components/fancy-2.component';
import { Fancy3 } from './components/fancy-3.component';

type FcProps = {
  customProp?: any;
};

export const App: React.FC<FcProps> = (props) => {
  return (
    <>
      <ErrorBoundary fallBack={<ErrorNavBar />}>
        <BrowserRouter>
          <BaseNavigation />

          <Routes>
            <Route path={RouteLink.root} element={<Home />} />
            <Route path={RouteLink.topics + RouteLink.nested} element={<Topics />}>
              <Route path={RouteLink.topicId} element={<Topic />} />
            </Route>
            <Route path={RouteLink.shelf} element={<Shelf />} />
            <Route path={RouteLink.editor} element={<MyEditor />} />
            <Route path={RouteLink.bar} element={<BarComp />} />
            <Route path={RouteLink.fancy} element={<CustomMuiControls />} />
            <Route path={RouteLink.workShop} element={<WorkShop />} />
            <Route path={RouteLink.i18n} element={<MultiLingual />} />
            <Route path={RouteLink.table} element={<MuiTable />} />
            <Route path={RouteLink.fancy2} element={<Fancy2 />} />
            <Route path={RouteLink.fancy3} element={<Fancy3 />} />

            {/* "No Match" Route */}
            <Route path={RouteLink.empty} element={Dummy} />
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </>
  );
};
