import React, {useEffect} from 'react';
import './App.css';
import {Container, Grid, Switch} from '@mui/material';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Portfolio from './pages/Portfolio/Portfolio';
import Resume from './pages/resume/Resume';
import Aos from 'aos';
import 'aos/dist/aos.css';
import CardHolder from "./pages/projects/CardHolder";
function App() {
    useEffect(() => {
      Aos.init()
    }, []);
    return (<Container className='top_60'>
            <Grid container spacing={6}>
                <Grid item xs={12} sm={12} md={4} lg={3}>
                    <Profile/>
                </Grid>

                <Grid item xs>
                    <BrowserRouter>
                        <Header/>
                        <div className='main-content container_shadow'>
                            <Routes>
                                <Route path='/portfolio' element={<Portfolio/>}/>
                                <Route path='/' element={<Resume/>}/>
                                <Route path='/projects' element={<CardHolder/>}/>
                            </Routes>
                        </div>
                        <Footer/>
                    </BrowserRouter>
                </Grid>
            </Grid>
        </Container>);
}

export default App;
