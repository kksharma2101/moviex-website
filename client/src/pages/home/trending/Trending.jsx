import React, { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper.jsx';
import SwitchTabs from '../../../components/switchTabs/SwitchTabs.jsx';
import useFetch from '../../../hooks/FetchApi.jsx';
import Carousel from '../../../components/carousel/Carousel.jsx';



const Trending = () => {
    const [endPoints, setEndpoints] = useState("day");
    const { data, loading } = useFetch(`/trending/all/${endPoints}`);

    const onTabChange = (tab) => {
        setEndpoints(tab === "Day" ? "day" : "week");
    };

    return (
        <div className='carouselSection'>
            <ContentWrapper>
                <span className='carouselTitle'>Trending</span>
                <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
            </ContentWrapper>
            <Carousel data={data?.results} loading={loading} />
        </div>
    )
}

export default Trending;