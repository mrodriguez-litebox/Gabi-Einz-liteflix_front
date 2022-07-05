import { useState } from 'react'
import { makeStyles, Grid, Typography, Button } from '@material-ui/core'
import { isMobile } from "../../utils"
import { ReactComponent as PlayIcon } from '../../statics/play.svg'
import { ReactComponent as AddIcon } from '../../statics/add.svg'
import { ReactComponent as CheckIcon } from '../../statics/check.svg'
import "./FeaturedMovie.scss"

const useStyle = makeStyles((theme) => ({
	root : {
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-end",
		height: "75vh",
		color: "white",
		[theme.breakpoints.down(769)] : {
			height: "85vh",
		},
		[theme.breakpoints.down(960)] : {
			textAlign: "center",
		},
		
  },
	title : {
		[theme.breakpoints.down(600)] : {
			textAlign: "center",
		},

	},	
	buttonsContainer : {
		display: "flex",
		justifyContent: "flex-start",
		paddingLeft: 4,
		[theme.breakpoints.down(600)] : {
			alignItems: "center",
			flexDirection: "column",
			paddingLeft: 64,
			paddingRight: 64,
			background: "linear-gradient(180deg, rgba(36, 36, 36, 0) 0%, #242424 100%)",
		},
		[theme.breakpoints.between(600,769)] : {
			justifyContent: "center",
			background: "linear-gradient(180deg, rgba(36, 36, 36, 0) 0%, #242424 100%)",
		},
		
	},
	button : {
		letterSpacing: 4,
		marginTop: 16,
		padding: "12px 0px",
		width: 250,
		fontSize: "18px",
		boxShadow: "none",
		borderRadius: 0,
		fontWeight: 300,
		"& svg" : {
			marginRight: 5,
			stroke: "white",
		},
		"&:hover" : {
			boxShadow: "none",
		},
	},
	myListButton : {
		padding:"10px 0px",
		border: "1px solid rgba(255, 255, 255, 0.5)",
		background:"rgba(36, 36, 36,0.5)",
		color: "white",
		"&:hover" : {
			color: "black",
			"& svg" : {
				stroke: theme.palette.secondary.main,
			}
		},
		[theme.breakpoints.up(600)] : {
			marginLeft: 24,
		}
	}
	
}))

export default function FeaturedMovie({title}) {
	const classes = useStyle()
	const [myList, setMyList] = useState(false)

	return(
		<>
			<Grid item xs={12} md={10} className={classes.root}>

				<Typography variant="h6" style={{paddingLeft:4}} className="pretitle-animation">
					Original de <b>Liteflix</b>
				</Typography>

				<Typography 
					variant="h1" 
					color="primary" 
					className={`${classes.title} title-animation`}
					style={{fontSize: 
						isMobile(769) && (title.length > 18) ? "60px"
						: isMobile(769) ? "76"
						: ""
					}}
				>
					{title}
				</Typography>

				<div className={classes.buttonsContainer}>
					<Button
						variant="contained"
						color="secondary"
						className={`${classes.button} button-play-animation`}
						startIcon={<PlayIcon />}
					>
						Reproducir
					</Button>

					<Button
						variant="contained"
						className={`${classes.button} ${classes.myListButton} button-myList-animation`}
						startIcon={!myList ? <AddIcon /> : <CheckIcon />}
						onClick={() => setMyList(!myList)}
					>
						Mi Lista
					</Button>
				</div>

			</Grid>
		</>
	)
};
