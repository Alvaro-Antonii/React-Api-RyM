import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Inicio from "./components/Inicio";
import Imagen from './components/Imagen';


function App() {
  

  return(
     <div className='App'>
         <div className='cont-principal'>
              <BrowserRouter>
                <Routes>
                  <Route path='/' element ={<Imagen></Imagen>}>

                  </Route>
                  
                  
                </Routes>
              </BrowserRouter>

              <BrowserRouter>
                <Routes>
                  
                  
                  <Route path='/' element ={<Inicio></Inicio>}>

                  </Route>
                  
                </Routes>
              </BrowserRouter>

        </div>
     </div>
  );
  
}

export default App;
