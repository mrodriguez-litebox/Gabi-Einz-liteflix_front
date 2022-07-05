import React, { useState } from 'react';
import { makeStyles, Typography, Input, Button, Dialog } from '@material-ui/core';
import Dropzone from "./Dropzone"
import { isMobile } from '../../utils';
import logo from "../../assets/images/logo.svg"
import { ReactComponent as ExitIcon } from '../../statics/cross.svg'
import { createMovie } from '../../wservices/WServices';

import "./Modal.scss"

const useStyle = makeStyles((theme) => ({
	buttonsContainer : {
		[theme.breakpoints.down(600)] : {
			paddingLeft: 64,
			paddingRight: 64,
		},
		
	},
	button : {
		display: "block",
		letterSpacing: 4,
		padding: "12px 0px",
		width: 250,
		fontSize: "18px",
		boxShadow: "none",
		borderRadius: 0,
		fontWeight: 300,
		background: "rgba(255, 255, 255,1)",
		color: "rgba(36, 36, 36,1)",
		"&:hover" : {
			boxShadow: "none",
			background: "rgba(255, 255, 255, 0.5)",
		},
	},
	exitMobile : {
		display: "none",	
		marginTop: 24,
		border: "1px solid rgba(255, 255, 255, 0.5)",
		background: "rgba(36, 36, 36,1)",
		color: "white",
		[theme.breakpoints.down(600)] : {
			display: "block",
		},
	}
	
}))

export default function AddMovieModal({isModalOpen, setModalOpen}) {
  const classes = useStyle()
	const [movieTitle, setMovieTitle] = useState("")
	const [image, setImage] = useState(null);
	const [onUpLoadFinished, setOnUpLoadFinished] = useState(false)
	
	const handleClose = () => {
		setModalOpen(false)
		setTimeout(() => {
			setMovieTitle("")
			setImage(null)
			setOnUpLoadFinished(false)
		}, 300);
	}
	
	const handleAddMovie = async () => {		
		await createMovie(movieTitle, image);
		setOnUpLoadFinished(true)
	}

  return (
    <div>
      
			<Dialog open={isModalOpen} onClose={() => setModalOpen(false)} aria-labelledby="dialog-modal" className="modal">
				<div className="modal__content">
					{!onUpLoadFinished ? (
						<>
							<Typography variant="h5" id="modal-title">Agregar Película</Typography>

							<Dropzone setImage={setImage} />

							<Input 
								placeholder="Título" 
								value={movieTitle} 
								onChange={(e) => setMovieTitle(e.target.value)}
							/>

							<div className={classes.buttonsContainer}>
								<Button
									variant="contained"
									className={classes.button}
									disabled={(!image || !movieTitle)}
									onClick={handleAddMovie}
								>
									Subir película
								</Button>
								<Button
									variant="contained"
									color="secondary"
									onClick={handleClose}
									className={classes.button+" "+classes.exitMobile}
								>
									Salir
								</Button>
							</div>
						</>
					) : (
						<>
							{!isMobile(600) ? <img src={logo} alt="Liteflix" /> : <React.Fragment/>}

							<div style={{margin: "60px 0"}}>
								<Typography variant="h5" style={{fontSize:24,marginBottom:24}}><b>¡Felicitaciones!</b></Typography>
								
								<Typography variant="h6">{movieTitle} fue correctamente subida.</Typography>
							</div>

							<Button
								variant="contained"
								color="secondary"
								onClick={handleClose}
								className={classes.button}
							>
								Ir a Home
							</Button>
						</>
					) }
					<div className="exitDesk pointer" onClick={handleClose}>
						<ExitIcon />
					</div>
				</div>
      </Dialog>

    </div>
  );
}
