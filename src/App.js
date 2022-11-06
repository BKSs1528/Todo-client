
import {Routes,BrowserRouter,Route} from "react-router-dom"
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";


function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/reg" element={<Signup/>}></Route>
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
