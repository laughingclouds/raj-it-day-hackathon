import './App.css';
import Home from "./pages/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShowDetails from './components/ShowDetails';
import DetailsNotFound from './components/DetailsNotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} >
          <Route path='notfound' element={<DetailsNotFound />} />
          <Route path=':id' element={<ShowDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
