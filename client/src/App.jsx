import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import './App.css';
import fetchDataFromApi from "./utils/api.js";
import { useSelector, useDispatch } from 'react-redux';
import { getApiConfiguration, getGenres } from './store/homeSlice.js';
// import all files
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import Home from "./pages/home/Home.jsx";
import Details from "./pages/details/Details.jsx";
import Explore from "./pages/explore/Explore.jsx";
import Error from "./pages/error404/Error.jsx";
import SearchResult from "./pages/searchResults/SearchResults.jsx";
// import { all } from 'axios';


function App() {
  const dispatch = useDispatch()
  const url = useSelector((state) => state.home.url)
  // console.log(url)

  useEffect(() => {
    fetchApiConfig();
    genresCall();
  }, []);

  const fetchApiConfig = () => {
    fetchDataFromApi('/configuration').then((res) => {
      // console.log(res)
      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      }

      dispatch(getApiConfiguration(url))
    })
  };

  const genresCall = async () => {
    let promise = [];
    let endPoints = ["tv", "movie"];
    let allGenres = {};
    endPoints.forEach((url) => {
      promise.push(fetchDataFromApi(`/genre/${url}/list`))
    });
    const data = await Promise.all(promise);
    data.map(({ genres }) => {
      return genres.map((item) => (allGenres[item.id] = item))
    });
    dispatch(getGenres(allGenres))
    // console.log(allGenres)
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:mediaType/:id' element={<Details />} />
        <Route path='/search/:query' element={<SearchResult />} />
        <Route path='/explore/:mediaType' element={<Explore />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
