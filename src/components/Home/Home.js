import React, { useEffect } from 'react';
import MovieListing from '../MovieListing/MovieListing';
import {APIKey} from "../../common/apis/MovieApiKey";
import MovieApi from "../../common/apis/MovieApi"
import { useDispatch } from 'react-redux';
import { addMovies } from '../../features/movies/moviesSlice';

const Home = () => {
    const movieText = "Harry";
     const dispatch = useDispatch();
    useEffect(() => {
        
       
        const fetchMovies =async () => {
            const response = await MovieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
                .catch(err => {
                console.log(err)
                })
            dispatch(addMovies(response.data))
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