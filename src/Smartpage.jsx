import {  useNavigate } from "react-router-dom";




function Smartpage(){
    const navigate = useNavigate();
    return(<>
        <div className="min-h-screen bg-gradient-to-br from-red-400 to-blue-400 flex flex-col items-center justify-center " >
            <div className="bg-white mb-10 w-120 h-40 flex  items-center justify-center rounded-xl cursor-pointer hover:scale-104 transition-transform duration-300 hover:bg-gray-300" 
            onClick={()=>navigate("/Faculty")}>
              <h2 className="text-2xl">Know about Faculty</h2>
             
            </div>
            <div className="bg-white mb-10 w-120 h-40 flex  items-center justify-center rounded-xl cursor-pointer hover:scale-104 transition-transform duration-300 hover:bg-gray-300" 
            onClick={()=>navigate("/Information")}>
                <h2 className="text-2xl">Information of the course</h2>
            </div>
            <div className="bg-white mb-10 w-120 h-40 flex items-center justify-center rounded-xl cursor-pointer hover:scale-104 transition-transform duration-300 hover:bg-gray-300" 
            onClick={()=>navigate("/Benefit")}>
                <h2 className="text-2xl">How it will benefit you</h2>
            </div>
        </div>
    </>);
}
export default Smartpage