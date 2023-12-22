import React, {useEffect, useState} from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import UpComingPage from "./pages/upComingPage";
import TopRatedPage from "./pages/topRatedPage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import WatchlistPage from "./pages/watchlistPage";
import MovieReviewPage from "./pages/movieReviewPage";
import NowPlayingPage from "./pages/nowPlayingPage";
import SiteHeader from './components/siteHeader';
import SearchedMoviesPage from './pages/searchedMoviesPage';
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import { ThemeProvider, useTheme } from "./contexts/themeContext";
import { Global, css } from '@emotion/react';
import ProtectedRoutes from "./protectedRoutes";
import AuthContextProvider from "./contexts/authContext";
import SignUpPage from "./pages/signUpPage";
import LoginPage from "./pages/loginPage";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false
    },
  },
});

const AppWrapper = () => {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
};

const App = () => {
  const { themeMode, toggleTheme } = useTheme();
  


  return (
    <>
      <Global
        styles={{
          body: {
            backgroundColor: themeMode === 'dark' ? '#000000' : '#B8AFBF',
            margin: 0,
          },
        }}
      />
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
         <AuthContextProvider>
            <MoviesContextProvider>
              <SiteHeader />
              <Routes>  
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={ <SignUpPage /> } />      
                <Route path="/upComingPage" element={<UpComingPage />} />
                <Route path="/searchedMoviesPage" element={<SearchedMoviesPage />} />
                <Route path="/topRatedPage" element={<TopRatedPage />} />
                <Route path="/nowPlayingPage" element={<NowPlayingPage />} />
                <Route path="/reviews/:id" element={<MovieReviewPage />} />
                <Route element={<ProtectedRoutes />}>
                  <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
                  <Route path="/movies/watchlist" element={<WatchlistPage />} />
                </Route>
                <Route path="/movies/:id" element={<MoviePage />} />      
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </MoviesContextProvider>
          </AuthContextProvider>  
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
};

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<AppWrapper />);
