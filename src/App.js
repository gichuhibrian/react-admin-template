import Error404 from "./pages/error404.pages";
import Login from "./pages/login.pages";

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./pages/home.pages";


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
