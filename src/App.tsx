import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import './App.css';
import NotFound from "./component/NotFound.tsx";
import NavBar from "./component/NavBar.tsx";
import MainPage from "./component/MainPage.tsx";
import {Box} from "@mui/material";


function App() {


  return (
    <div>
        <Router>
            <NavBar/>
            <Box
                sx={{
                    minHeight: 'calc(100vh - 64px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mt: '64px', // To offset the fixed NavBar
                    overflow: 'hidden',
                }}>
                <Routes>
                    <Route path={'/'} element={<MainPage/>}/>
                    <Route path={'*'} element={<NotFound/>}/>
                </Routes>
            </Box>
        </Router>
    </div>
  )
}

export default App
