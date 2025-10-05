import silogo from "./assets/silogo.jpg";
import bzlogo from "./assets/bzlogo.jpg";
import { useNavigate } from "react-router-dom";


function Page1(){
    const navigate = useNavigate();
    return(
        <div className="min-h-screen flex flex-row items-center justify-center bg-gradient-to-br from-red-300 to-blue-400">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center cursor-pointer hover:scale-103 transition-transform duration-300"
                onClick={()=>navigate("/Smartpage")}>
                <img src = {silogo}  className="w-32 h-32 object-contain mb-4"/>
                <h1 className="text-2xl font-semibold text-gray-800">Smart Interviews</h1>
                 
              </div>
                
              <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center cursor-pointer hover:scale-103 transition-transform duration-300"
                onClick={()=>navigate("/Beingzero")}>
                <img src = {bzlogo}  className="w-32 h-32 object-contain mb-4"/>
                <h1 className="text-2xl font-semibold text-gray-800">Being Zero</h1>
              </div>
            </div>
            </div>
                
            
        
    );
}
export default Page1