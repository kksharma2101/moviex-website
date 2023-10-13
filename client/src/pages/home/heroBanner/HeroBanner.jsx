import React, { useState, useEffect } from 'react';
import "./style.scss";
import { useNavigate } from 'react-router-dom';
import useFetch from '../../../hooks/FetchApi';
import { useSelector } from 'react-redux';
import Img from '../../../components/lazyLoadImage/Img.jsx';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper.jsx';


const HeroBanner = () => {
    const [background, setBackground] = useState("");
    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    const { url } = useSelector((state) => state.home);

    const { data, loading } = useFetch("/movie/upcoming");

    useEffect(() => {
        const bg = url.backdrop + data?.results[Math.floor(Math.random() * 20)]?.backdrop_path;
        setBackground(bg);
    }, [data])

    const searchQueryHendler = (event) => {
        if (event.key === "Enter" && query.length > 0) {
            navigate(`/search/${query}`)
        }
    }

    return (
        <div className='hero-container'>
            {!loading && <div className="backdrop-img">
                <Img src={background} alt='' />
            </div>}
            <div className="opecity-layer"></div>

            <ContentWrapper>
                <div className="heroBanner-content">
                    <span className='title'>Welcome.</span>
                    <span className='sub-title'>Millions of movies, TV shows and people to discover.
                        Explore now.
                    </span>
                    <div className="searchInput">
                        <input type="text" placeholder='Search a movies and TV shows....'
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyUp={searchQueryHendler}
                        />
                        <button>Search</button>
                    </div>
                </div>
            </ContentWrapper>
        </div>
    )
}

export default HeroBanner