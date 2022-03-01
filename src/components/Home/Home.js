import React, { useEffect } from 'react';
import MovieListing from '../MovieListing/MovieListing';
import {APIKey} from "../../common/apis/MovieApiKey";
import MovieApi from "../../common/apis/MovieApi"

const Home = () => {
    useEffect(() => {
        const movieText="Harry"
        const fetchMovies =async () => {
            const response = await MovieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
                .catch(err => {
                console.log(err)
                })
            console.log(response)
        }
        fetchMovies()
    },[])
    return (
        <div>
            <div className='banner-img'></div>
            <MovieListing/>
        </div>
    );
};

export default Home;