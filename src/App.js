import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';

import AllMeetupsPage from "./pages/AllMeetupsPage";
import FavoritesPage from "./pages/Favorites";
import NewMeetupsPage from "./pages/NewMeetup";
import MainNavigation from "./components/layout/MainNavigation";
import Layout from "./components/layout/Layout";
import Notification from "./components/ui/Notification";
import { sendCartData, fetchCartsData } from "./store/carts-actions";


let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);
  const favorites = useSelector((state) => state.favorites);
  const carts = useSelector((state) => state.carts);
  
  useEffect(() => {
    dispatch(fetchCartsData())
  }, [dispatch])

  useEffect(() => {
    if(isInitial){
      isInitial = false;
      return;
    }
    //if(carts.changes)
      dispatch(sendCartData(carts))
  }, [carts, dispatch])

  return (

      <BrowserRouter>
          <div data-test="app">
            {notification && (
              <Notification 
                status={notification.status}
                title={notification.title}
                message={notification.message}
              />)}
            <MainNavigation favoriteCount={favorites.length}/>
            <Layout>
              <Routes>
                <Route index element={<AllMeetupsPage data={carts.items} favorites={favorites}/>} />
                <Route path="favoritos" element={<FavoritesPage data={carts.items} favorites={favorites} />} />
                <Route path="new-meetup" element={<NewMeetupsPage />} />
              </Routes>
            </Layout>
          </div>
      </BrowserRouter>
  );
}

export default App;
