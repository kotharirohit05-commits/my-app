import { BrowserRouter ,Routes,Route } from "react-router-dom";
import Homepage from "./Homepage";
import Page1 from "./Page1";
import Smartpage from "./Smartpage";
import Faculty from "./Faculty";
import Information from "./Information";
import Benefit from "./Benefit";
import Beingzero from "./Beingzero";
import Bzfac from "./Bzfac";
import Bzinfo from "./Bzinfo";
import Bzbenefit from "./Bzbenefit"
import Quiz from "./Quiz";

function App() {
  return (
    <><BrowserRouter>
        <Routes>
              <Route path="/" element={<Homepage/>} />
              <Route path ="/page1" element={<Page1/>}/>
              <Route path = "/Smartpage" element ={<Smartpage/>}/>
              <Route path = "/Faculty" element = {<Faculty/>}/>
              <Route path = "/Information" element = {<Information/>} />
              <Route path = "/Benefit" element={<Benefit/>} />
              <Route path = "/Beingzero" element ={<Beingzero/>}/>
              <Route path = "/Bzfac" element = {<Bzfac/>} />
              <Route path = "/Bzinfo" element={<Bzinfo/>} />
              <Route path = "/Bzbenefit" element={<Bzbenefit/>} />
              <Route path = "/Quiz" element = {<Quiz/>}/>
        </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;
