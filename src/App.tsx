import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import './App.css';
import NotFound from "./component/NotFound.tsx";
import PageOne from "./component/main-page-component/PageOne.tsx";



function App() {


  return (
    <div>
        <Router>
            <Routes>
                <Route path={'/'} element={<PageOne/>}/>
                <Route path={'*'} element={<NotFound/>}/>
            </Routes>
        </Router>
    </div>
  )
}

export default App
