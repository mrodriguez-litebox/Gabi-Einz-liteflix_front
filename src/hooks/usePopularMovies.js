import { useEffect, useState } from 'react'
import { getPopularMovies } from '../wservices/WServices'

export const usePopularMovies = () => {
	const [popularMovies, setPopularMovies] = useState([])
  const [loading, setLoading] = useState(false)

  async function slicePopularMovies() {
    setLoading(true)
    const movies = await getPopularMovies()
		const slice =  movies?.slice(0,4)
    setPopularMovies(slice)
    setLoading(false)
  }

  useEffect(() => {

    slicePopularMovies()
    
  }, [])

	return {popularMovies, loading}
}