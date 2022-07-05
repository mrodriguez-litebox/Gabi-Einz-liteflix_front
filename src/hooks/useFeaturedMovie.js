import { useEffect, useState } from 'react'
import { getFeaturedMovies } from '../wservices/WServices'

export const useFeaturedMovie = () => {
	const [featuredMovie, setFeaturedMovie] = useState([])
  const [loading, setLoading] = useState(true)

  async function mainFeaturedMovie() {
    try{
      const movies = await getFeaturedMovies()
      setFeaturedMovie(movies[0])
    }
    catch(error){
      alert(error)
    }
    finally{
      setLoading(false)
    }
  }

  useEffect(() => {

    mainFeaturedMovie()
    
  }, [])

	return {featuredMovie, loading}
}