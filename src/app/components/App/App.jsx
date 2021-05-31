import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { routes } from './routes';

import Navbar from '../../../client/KidsLike/Navbar';

import LoaderSpinner from "react-loader-spinner";
const PublicPage = lazy(() => import('../PublicRoute' /* webpackChunkName: "PublicPage" */));
const HomePage = lazy(() => import('../../../client/KidsLike/pages/HomePage' /* webpackChunkName: "HomePage" */));
const ContactsPage = lazy(() => import('../../../client/KidsLike/pages/ContactsPage/ContactsPage' /* webpackChunkName: "ContactsPage" */));
const PrivatePage = lazy(() => import('../PrivateRoute' /* webpackChunkName: "PrivatePage" */));
const MainPage = lazy(() => import('../../../client/KidsLike/pages/MainPage' /* webpackChunkName: "MainPage" */));
const PlanningPage = lazy(() => import('../../../client/KidsLike/pages/PlanningPage/PlanningPage' /* webpackChunkName: "PlanningPage" */));
const RewardPage = lazy(() => import('../../../client/KidsLike/pages/RewardPage/pages/RewardPage' /* webpackChunkName: "RewardPage" */));

function App() {
  const { home, contacts, main, planning, rewards } = routes;
  return (
    <Router>
      <Suspense fallback={<LoaderSpinner />}>
      <Navbar />
      <Switch>
        <PublicPage exact path={home} restricted component={HomePage} redirectTo={main} />
        <Route exact path={contacts} component={ContactsPage} />
        <PrivatePage exact path={main} component={MainPage} redirectTo={home}/>
        <PrivatePage exact path={planning} component={PlanningPage} redirectTo={home} />
        <PrivatePage exact path={rewards} component={RewardPage} redirectTo={home} />
      </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
