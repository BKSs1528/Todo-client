
import {Routes,BrowserRouter,Route} from "react-router-dom"
import AddActivity from "./components/activity/AddActivity";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Viewpage from "./components/Viewpage";


function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/reg" element={<Signup/>}></Route>
        <Route path="/view" element={<Viewpage/>}></Route>
        <Route path="/addactivity" element={<AddActivity/>}></Route>
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
