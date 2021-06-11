import React, { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { currentUser } from '../../../redux/auth/opeartions';
import { routes } from './routes';

import Navbar from '../../../client/KidsLike/Navbar';

import LoaderSpinner from '../../../shared/components/Loader';
const PublicPage = lazy(() => import('../PublicRoute' /* webpackChunkName: "PublicPage" */));
const AuthPage = lazy(() => import('../../../client/KidsLike/pages/AuthPage' /* webpackChunkName: "AuthPage" */));
const ContactsPage = lazy(() => import('../../../client/KidsLike/pages/ContactsPage' /* webpackChunkName: "ContactsPage" */));
const PrivatePage = lazy(() => import('../PrivateRoute' /* webpackChunkName: "PrivatePage" */));
const MainPage = lazy(() => import('../../../client/KidsLike/pages/MainPage' /* webpackChunkName: "MainPage" */));
const PlanningPage = lazy(() => import('../../../client/KidsLike/pages/PlanningPage' /* webpackChunkName: "PlanningPage" */));
const RewardPage = lazy(() => import('../../../client/KidsLike/pages/RewardPage' /* webpackChunkName: "RewardPage" */));

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  const { auth, contacts, main, planning, rewards } = routes;
  return (
    <Router>
      <Suspense fallback={<LoaderSpinner />}>
      <Navbar />
      <Switch>
        <PublicPage exact path={auth} restricted component={AuthPage} redirectTo={main} />
        <Route exact path={contacts} component={ContactsPage} />
        <PrivatePage exact path={main} component={MainPage} redirectTo={auth}/>
        <PrivatePage exact path={planning} component={PlanningPage} redirectTo={auth} />
        <PrivatePage exact path={rewards} component={RewardPage} redirectTo={auth} />
      </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
