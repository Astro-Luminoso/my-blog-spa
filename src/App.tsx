import {BrowserRouter as Router, Route, Routes, useLocation} from "react-router-dom";

import './App.css';
import NotFound from "./component/NotFound.tsx";
import NavBar from "./component/NavBar.tsx";
import MainPage from "./component/MainPage.tsx";
import {Box} from "@mui/material";
import BlogPost from "./component/BlogPost.tsx";
import {AnimatePresence} from "framer-motion";


const AnimatedRoutes = () => {

    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path={'/'} element={<MainPage/>}/>
                <Route path={'/blog'} element={<BlogPost/>}/>
                <Route path={'*'} element={<NotFound/>}/>
            </Routes>
        </AnimatePresence>
    );
}

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
                    mt: '64px',
                    overflow: 'hidden',
                }}>
                <AnimatedRoutes />
            </Box>
        </Router>
    </div>
  )
}

export default App
