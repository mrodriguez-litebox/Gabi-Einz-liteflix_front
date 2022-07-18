import { EndpointEnum } from "../enums/EndpointEnum";
import { HttpMethodEnum } from "../enums/HttpMethodEnum";

const apiKey = '6f26fd536dd6192ec8a57e94141f8b20';

export const createMovie = async(movieTitle, image) => {
	return []
	const requestOptions = {
        method: HttpMethodEnum.POST,
        headers: { 'Content-Type': 'application/json', 
					'Access-Control-Allow-Origin':'*',
					'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS'},
        body: JSON.stringify({
			title: movieTitle,
			image: image,
			
		})
    };
	try {
		const url = EndpointEnum.MOVIE; 
		const response = await fetch(url, requestOptions)
		const data = await response.json()
		console.log(data);
		return data?.results
	} 
	catch (error) {
		alert(error)
	}
} 

export const getMovies = async() => {
	return []
	try {
		const url = EndpointEnum.MOVIE; 
		const response = await fetch(url)
		const data = await response.json()
		console.log(data);
		return data ? data : null;
	} 
	catch (error) {
		alert(error)
	}
} 

export const getPopularMovies = async() => {
	try {
		const response = await fetch(`${window.location.protocol}//api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
		const data = await response.json()
		return data?.results
	} 
	catch(error) {
		alert(error)
	}
}

export const getFeaturedMovies = async() => {
	try {
		const response = await fetch(`${window.location.protocol}//api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`)
		const data = await response.json()
		return data?.results
	} 
	catch (error) {
		alert(error)
	}
}

