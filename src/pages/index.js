import React, { lazy, useContext, useEffect, useState } from 'react';
import { Outlet, Route, Routes, useNavigate } from 'react-router-dom';
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

export const Routing = () => {
  const { isAuthorized } = useContext(AuthorizedContext);
  const { tryLoginOnEnter } = useAuth();

  const [isSuccessTooltipOpen, setIsSuccessTooltipOpen] = useState(false);
  const [successTooltipMessage, setSuccessTooltipMessage] = useState('');

  const navigate = useNavigate();

  // const [shouldRedirect, setShouldRedirect] = useState(false);

  function showLoginSuccessMessage() {
    setIsSuccessTooltipOpen(true);
    setSuccessTooltipMessage(successMessages.login);
  }

  function handleTooltipClose() {
    setIsSuccessTooltipOpen(false);
  }

  useEffect(() => {
    if (isAuthorized) {
      return;
    }

    tryLoginOnEnter()
      .then(() => {
        navigate(paths.movies, {replace: true});
        // setShouldRedirect(true);
      })
      .catch((err) => console.log(err));

  }, []);

  // function test() {
  //   if (shouldRedirect) {
  //     setShouldRedirect(false);
  //
  //     return <Navigate to={paths.movies} replace />
  //   }
  //
  //   return <MainPage />
  // }


  return (
    <>
      <SuccessTooltip
        isOpen={isSuccessTooltipOpen}
        caption={successTooltipMessage}
        onClose={handleTooltipClose}
      />

      <Routes>
        <Route element={<StickyFooterLayout />}>
          <Route element={<BasicLayout />}>
            <Route path={paths.main} element={<MainPage />} />
            <Route path={paths.movies} element={
              <ProtectedRoute
                isAuthorized={isAuthorized}
                element={<MoviesPage />}
              />
            }/>
            <Route path={paths.savedMovies} element={
              <ProtectedRoute
                isAuthorized={isAuthorized}
                element={<SavedMoviesPage />}
              />
            }/>
          </Route>
        </Route>

        <Route element={<ProfilePageLayout />}>
          <Route path={paths.profile} element={
            <ProtectedRoute
              isAuthorized={isAuthorized}
              element={<ProfilePage />}
            />
          }/>
        </Route>

        <Route path={paths.signup} element={
          <AuthProtectedRoute
            isAuthorized={isAuthorized}
            element={<RegisterPage />}
          />
        }/>

        <Route path={paths.signin} element={
          <AuthProtectedRoute
            isAuthorized={isAuthorized}
            element={<LoginPage onLogin={showLoginSuccessMessage} />}
          />
        }/>

        <Route path={'*'} element={<NotFoundPage />} />
      </Routes>
    </>
  )
}
