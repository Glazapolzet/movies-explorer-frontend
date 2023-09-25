import React, { lazy } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { Loadable, StickyFooterLayout } from 'shared/ui';
import { paths } from 'shared/routes';

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
  return (
    <Routes>
      <Route element={<StickyFooterLayout />}>
        <Route element={<BasicLayout />}>
          <Route path={paths.main} element={<MainPage />} />
          <Route path={paths.movies} element={<MoviesPage />} />
          <Route path={paths.savedMovies} element={<SavedMoviesPage />} />
        </Route>
      </Route>

      <Route element={<ProfilePageLayout />}>
        <Route path={paths.profile} element={<ProfilePage />} />
      </Route>

      <Route path={paths.signup} element={<RegisterPage />} />
      <Route path={paths.signin} element={<LoginPage />} />

      <Route path={'*'} element={<NotFoundPage />} />
    </Routes>
  )
}
