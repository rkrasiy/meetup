import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import AllMeetupsPage from "./pages/AllMeetupsPage";
import FavoritesPage from "./pages/Favorites";
import NewMeetupsPage from "./pages/NewMeetup";
import { ALL_MEETUP_PAGE, FAVORITES_PAGE, NEW_MEETUP_PAGE } from "./utils/constants";
import MainNavigation from "./components/layout/MainNavigation";
import Layout from "./components/layout/Layout";
import { useSelector } from 'react-redux'
function App() {
  const count = useSelector((state) => state.favorites)

   return (
    <BrowserRouter>
        <div data-test="app">
          <MainNavigation favoriteCount={count.length}/>
          <Layout>
            <Routes>
              <Route index element={<AllMeetupsPage favorites={count}/>} />
              <Route path="favoritos" element={<FavoritesPage favorites={count} />} />
              <Route path="new-meetup" element={<NewMeetupsPage />} />
            </Routes>
          </Layout>
        </div>
    </BrowserRouter>
  );
}

export default App;
