import React, { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper.jsx';
import SwitchTabs from '../../../components/switchTabs/SwitchTabs.jsx';
import useFetch from '../../../hooks/FetchApi.jsx';
import Carousel from '../../../components/carousel/Carousel.jsx';



const TopRated = () => {
    const [endPoints, setEndpoints] = useState("movie");
    const { data, loading } = useFetch(`/${endPoints}/top_rated`);

    const onTabChange = (tab) => {
        setEndpoints(tab === "Movies" ? "movie" : "tv");
    };

    return (
        <div className='carouselSection'>
            <ContentWrapper>
                <span className='carouselTitle'>Top Rated</span>
                <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
            </ContentWrapper>
            <Carousel data={data?.results} loading={loading} endPoints={endPoints} />
        </div>
    )
}

export default TopRated;