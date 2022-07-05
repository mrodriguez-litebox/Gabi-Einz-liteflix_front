import React, { useState } from "react"
import { Grid, ClickAwayListener, Typography } from "@material-ui/core";
import { isMobile } from "../../utils";
import PopularMovies from "../PopularMovies/PopularMovies";
import MyMovies from "../MyMovies/MyMovies";
import { usePopularMovies } from "../../hooks/usePopularMovies";
import { ReactComponent as CheckIcon } from '../../statics/check.svg'
import { ReactComponent as ArrowDownIcon } from '../../statics/arrowDown.svg'

import "./ListMovies.scss"

export default function ListMovies() {
  const [view, setView] = useState('populares');
	const {popularMovies, loading} = usePopularMovies()

	const [isDropdownVisible, setIsDropdownVisible] = useState(false)

	const handleToggle = () => {
    setIsDropdownVisible(!isDropdownVisible)
  };

	return(
		<>
			<Grid item xs={12} md={2} className="listMovies">
				<div className="listMovies__dropdown">

					<div onClick={handleToggle}>
						<Typography 
							className="listMovies__dropdown__selection"
							style={(view !== "populares") && !isMobile(960) ? {fontSize:14} : {}}
						>
							<span>Ver: <b>{" "+ view}</b></span>
							<span 
								style={{
									transform: isDropdownVisible ? "rotateX(180deg)" : "rotateX(0deg)", 
									transition:".3s",
									display: "flex",
									alignItems: "center",
								}}
							>
								<ArrowDownIcon />
							</span>
						</Typography>
					</div>
						
					{
						isDropdownVisible ? (
							<ClickAwayListener onClickAway={e => {setIsDropdownVisible(!isDropdownVisible)}}>
							<div className="listMovies__dropdown__menu">
								<div 
									className="listMovies__dropdown__menu__item" 
									onClick={e => { 
										setView("populares");
										handleToggle();
									}}
								>
									{view === "populares" ? (
										<>
											<b>Populares</b>
											<CheckIcon />
										</>
									) : 
										"Populares"
									}
								</div>

								<div
									className="listMovies__dropdown__menu__item" 
									onClick={e => { 
										setView("mis peliculas");
										handleToggle();
									}}
								>
									{view === "mis peliculas" ? (
										<>
											<b>Mis películas</b>
											<CheckIcon />
										</>
									) : 
										"Mis películas"
									}
								</div>

								<div className="listMovies__dropdown__menu-arrowUp" />
							</div>
							</ClickAwayListener>
						) : (
							<></>
						)
					}
				</div>

				{view === "populares" ? 
					<PopularMovies movies={!loading ? popularMovies : null} />
					:
					<MyMovies />
				}
      
			</Grid>
		</>
	)
};
