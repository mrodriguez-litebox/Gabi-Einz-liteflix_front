import MovieCard from "../MovieCard/MovieCard";

import "./PopularMovies.scss"

export default function PopularMovies({movies}) {

	return(
		<div className="container">
			{movies && movies.map((m) => (
				<div className="card-animation" key={`movie-card-${m.id}`}>
					<MovieCard 
						title={m.original_title} 
						bkg={`https://image.tmdb.org/t/p/w300/${m.backdrop_path}`}
						rating={m.vote_average}
						released={m.release_date}
						type="popular"
					/>
				</div>
			))}
		</div>
	)
}
