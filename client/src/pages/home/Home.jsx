import React from 'react';
import "./style.scss";
import HeroBanner from './heroBanner/HeroBanner.jsx';
import Trending from './trending/Trending.jsx';
import Popular from './popular/Popular';
import TopRated from './topRated/TopRated';

const Home = () => {
    return (
        <div>
            <HeroBanner />
            <Trending />
            <Popular />
            <TopRated />
        </div>
    )
}

export default Home