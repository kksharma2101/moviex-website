import React from "react";
import Carousel from "../../../components/carousel/Carousel.jsx";
import useFetch from "../../../hooks/FetchApi.jsx";

const Similar = ({ mediaType, id }) => {
    const { data, loading, error } = useFetch(`/${mediaType}/${id}/similar`);

    const title = (mediaType === "tv" ? "Similar TV Shows" : "Similar Movies");

    return (
        <Carousel
            title={title}
            data={data?.results}
            loading={loading}
            endPoints={mediaType}
        />
    );
};

export default Similar;