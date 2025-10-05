import {useNavigate} from "react-router-dom";


function Homepage(){
    const navigate = useNavigate();
    
    return(
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-red-300 to-blue-400 text-white">
        
        <h1 className="text-4xl font-bold mb-8"> Welcome Rohit</h1>
        <button 
        onClick={()=> navigate("/page1")}
        className="px-10 py-6 bg-white  hover:bg-indigo-300 transition duration-300 rounded-xl shadow-md text-2xl text-black">Enter</button>
    </div>
    
    );
}
export default Homepage