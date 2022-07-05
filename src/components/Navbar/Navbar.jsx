import { makeStyles, AppBar, Toolbar, Container, Typography } from "@material-ui/core"
import avatar from "../../assets/images/avatar.png"
import logo from "../../assets/images/logo.svg"
import { ReactComponent as AddIcon } from '../../statics/add.svg'
import { ReactComponent as MenuIcon } from '../../statics/menu.svg'
import { ReactComponent as BellIcon } from '../../statics/bell.svg'

import "./Navbar.scss"

const useStyle = makeStyles((theme) => ({
	navbar: {
		position: "relative",
		background: "transparent",
		color: "white",
		boxShadow: "none",
		
		[theme.breakpoints.down(600)] : {
			zIndex: 1301,
		},
		"& .MuiToolbar-regular" : {
			display: "flex",
			justifyContent: "space-between",
			alignItems: "center",
			minHeight: 80,
			[theme.breakpoints.down(600)] : {
				minHeight: 70,
			}
		},
		"& .MuiToolbar-gutters" :{
			paddingLeft: 24,
			paddingRight: 24,
		}
	},
}))

export default function Navbar({isModalOpen, onPressAddMovie}) {
	const classes = useStyle()

	return(

		<AppBar className={classes.navbar}>
			<Container style={{maxWidth: 1232, padding:0}}>
				<Toolbar>
				
					<div className="addMovieMobile" style={isModalOpen ? {visibility:"hidden"} : {visibility: "visible"}} onClick={() => onPressAddMovie(true)}>
						<AddIcon />
					</div>

					<div className="midSection">
						<img src={logo} alt="Liteflix" />

						{!isModalOpen && (
							<div className="addMovieDesk pointer" onClick={() => onPressAddMovie(true)}>
								<AddIcon />
								<Typography style={{paddingTop:2}}><b>Agregar película</b></Typography>
							</div>
						)}

					</div>
					<div className="menuContainer">
						<div className="menuContainer__menu">
							<MenuIcon />
						</div>
						<div className="menuContainer__bell">
							<BellIcon />
							<div className="menuContainer__bell-notif" />
						</div>
						<div>
							<img src={avatar} className="avatar" alt="profile avatar" />
						</div>
					</div>
					
				</Toolbar>
			</Container>
		</AppBar>
	)	
};
