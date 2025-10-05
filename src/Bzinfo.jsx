
import { useNavigate } from "react-router-dom";

function Bzinfo() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-bl from bg-red-400 to-blue-400">
      <h2 className="flex justify-center text-2xl mt-10"><strong>Being Zero - Transforming Careers</strong></h2>
<br />
<div className="px-10 mt-10">
      <p>
        <strong>Being Zero</strong> is one of the most sought-after 
        programs for aspiring software engineers who dream of cracking 
        <strong> top product-based companies</strong> such as Google, Amazon, 
        Microsoft, Adobe, and many more. The course is designed with a 
        <strong> laser-sharp focus</strong> on Data Structures, Algorithms, 
        and Problem Solving — the key pillars of every technical interview.
      </p>
<br />

      <p>
        What makes Being Zero truly stand out is its 
        <strong> industry-relevant curriculum</strong>, carefully crafted by 
        experts who have themselves cleared multiple coding rounds at 
        world-class companies. The course content mirrors the exact challenges 
        faced in real interviews, ensuring that students are not just 
        <em>learning</em>, but actively <em>preparing to succeed</em>.
      </p>
<br />

      <p>
        From <strong>intensive coding practice</strong> to 
        <strong> personalized mentorship</strong>, Being Zero goes 
        beyond theory. Students gain access to <strong>hand-picked problem sets</strong>, 
        mock interviews, and live guidance that polish their logical thinking 
        and coding speed to perfection.
      </p>
<br />

      <p>
        With thousands of success stories already, Being Zero has 
        established itself as a <strong>career-launchpad</strong> for 
        students across the country. It’s not just a course — 
        it’s a <strong>transformational journey</strong> that builds 
        confidence, discipline, and the mindset of a world-class coder.
      </p>
      </div>
      <div className="flex items-center justify-center mt-10">
  <button  onClick={() => navigate("/Quiz")} className="w-40 h-20 bg-white rounded-xl cursor-pointer hover:scale-105 hover:bg-gray-400 transition duration-300 text-xl font-semibold">
    Quiz Page
  </button>
</div>
    </div>
  );
}

export default Bzinfo;
