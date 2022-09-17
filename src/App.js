import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Routes, Route,useNavigate, useLocation  } from "react-router-dom";
import TollViewPage from "./components/TollViewPage";



function App() {
  return (

    <Router forceRefresh={true}>
  
     <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/tollpage' element={<TollViewPage/>}/>
    
            
  
      
      
    </Routes>
    </Router>
   
 
  );
}

export default App;
