import React, { lazy, useContext, useEffect, useState } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { Loadable, StickyFooterLayout } from 'shared/ui';
import { paths } from 'shared/routes';
import { AuthorizedContext } from 'shared/contexts';
import { AuthProtectedRoute, useAuth } from 'entities/auth';
import { ProtectedRoute } from 'features/protected-route';
import { SuccessTooltip } from 'entities/info-tooltips';
import { successMessages } from 'shared/config';

const MainPage = Loadable(lazy(() => import('./MainPage')));
const MoviesPage = Loadable(lazy(() => import('./MoviesPage')));
const SavedMoviesPage = Loadable(lazy(() => import('./SavedMoviesPage')));
const ProfilePage = Loadable(lazy(() => import('./ProfilePage')));
const RegisterPage = Loadable(lazy(() => import('./RegisterPage')));
const LoginPage = Loadable(lazy(() => import('./LoginPage')));
const NotFoundPage = Loadable(lazy(() => import('./NotFoundPage')));

const BasicLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

const ProfilePageLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

const TooltipLayout = ({ isTooltipOpen, tooltipMessage, onTooltipClose }) => {
  return (
    <>
      <SuccessTooltip
        isOpen={isTooltipOpen}
        caption={tooltipMessage}
        onClose={onTooltipClose}
      />
      <Outlet />
    </>
  )
}

export const Routing = () => {
  const { isAuthorized } = useContext(AuthorizedContext);
  const { authUser, checkUserWasAuthorized, logout } = useAuth();

  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const [tooltipMessage, setTooltipMessage] = useState('');

  const wasAuthorized = checkUserWasAuthorized();

  const showTooltip = (message) => {
    return () => {
      setIsTooltipOpen(true);
      setTooltipMessage(message);
    }
  }

  const showLoginSuccessTooltip = showTooltip(successMessages.login);
  const showRegisterSuccessTooltip = showTooltip(successMessages.register);
  const showProfileSuccessTooltip = showTooltip(successMessages.editProfile);

  function closeTooltip() {
    setIsTooltipOpen(false);
  }

  function logoutOnSessionTimeout() {
    console.log('logout');
    if (!isAuthorized) {
      return;
    }

    logout();
  }

  useEffect(() => {
    if (!wasAuthorized) {
      return;
    }

    //604800
    authUser();
  }, []);

  useEffect(() => {
    const t = setInterval(logoutOnSessionTimeout, 20000);

    return () => clearInterval(t);
  }, [])

  return (
    <Routes>
      <Route element={<StickyFooterLayout />}>
        <Route element={<BasicLayout />}>
          <Route path={paths.main} element={<MainPage />} />
          <Route path={paths.movies} element={
            <ProtectedRoute
              key={isAuthorized}
              isAuthorized={isAuthorized || wasAuthorized}
              element={<MoviesPage />}
            />
          }/>
          <Route path={paths.savedMovies} element={
            <ProtectedRoute
              key={isAuthorized}
              isAuthorized={isAuthorized || wasAuthorized}
              element={<SavedMoviesPage />}
            />
          }/>
        </Route>
      </Route>

      <Route element={
        <TooltipLayout
          isTooltipOpen={isTooltipOpen}
          onTooltipClose={closeTooltip}
          tooltipMessage={tooltipMessage}
        />
      }>
        <Route element={<ProfilePageLayout />}>
          <Route path={paths.profile} element={
            <ProtectedRoute
              key={isAuthorized}
              isAuthorized={isAuthorized || wasAuthorized}
              element={
                <ProfilePage
                  onProfileUpdate={showProfileSuccessTooltip}
                />
              }
            />
          }/>
        </Route>

        <Route path={paths.signup} element={
          <AuthProtectedRoute
            isAuthorized={isAuthorized}
            element={<RegisterPage onRegister={showRegisterSuccessTooltip} />}
          />
        }/>

        <Route path={paths.signin} element={
          <AuthProtectedRoute
            isAuthorized={isAuthorized}
            element={<LoginPage onLogin={showLoginSuccessTooltip} />}
          />
        }/>
      </Route>

      <Route path={'*'} element={<NotFoundPage />} />
    </Routes>
  )
}
