import { useState } from 'react';
import customTheme from './themeConfig'
import { ThemeProvider } from '@material-ui/styles'
import { makeStyles } from '@material-ui/core'

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';

import { useFeaturedMovie } from './hooks/useFeaturedMovie';
import AddMovieModal from './components/AddMovie/Modal';


const useStyle = makeStyles((theme) => ({
  root : {
    height: "100%",
    minHeight: "100vh",
    [theme.breakpoints.down(769)] : {
      height: "100vh",
    }
  }
}))


function App() {
  const classes = useStyle()
  const [openModal, setOpenModal] = useState(false)
  const {featuredMovie, loading} = useFeaturedMovie()
  
  return (
    <ThemeProvider theme={customTheme}>

      <div
        className={classes.root} 
        style={{ background: !loading ? 
          `url("https://image.tmdb.org/t/p/original/${featuredMovie.backdrop_path}") center/cover no-repeat`
          : "#242424"
        }}
      >
        <Navbar isModalOpen={openModal} onPressAddMovie={setOpenModal} />
        
        <Home featuredMovieTitle={!loading ? featuredMovie.original_title : ""} />
        
        <AddMovieModal isModalOpen={openModal} setModalOpen={setOpenModal} />

      </div>

    </ThemeProvider>
  );
}

export default App;
