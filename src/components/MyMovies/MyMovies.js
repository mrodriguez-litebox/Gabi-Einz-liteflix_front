import MovieCard from "../MovieCard/MovieCard"
import { Typography } from "@material-ui/core"
import { isMobile } from "../../utils"
import { useEffect, useState } from "react"
import { getMovies } from "../../wservices/WServices"


export default function MyMovies() {
	const [movies, setMovies] = useState([]);
	useEffect(() => {
		 getMovies()
		 .then((response) => {setMovies(response);})
		 .catch(error => {console.log(error)});
	},[]); 
	
	const showMovies = () => {
		//movies = isMobile(600) ? (movies.slice(0)) : (movies.slice(-4));
		return(
			movies.map(e =>
				<MovieCard 
					key={e.id}
					type="myMovie"
					title={e.title}
					bkg={e.image}
					added={e.addedDate}
				/>
			)
		)
	}
	
	return(
		movies ?
			showMovies()
			:
			<div style={{padding:"20px 0"}}>
				<Typography variant="body1" align="center" style={{color: "white"}}>
					<b>Sin películas.</b>
				</Typography>
				<Typography variant="body2" align="center" style={{color: "white"}}>
					Agregue una para poder visualizarla aquí.
				</Typography>

			</div>
		
	)
};
