import { useNavigate } from "react-router-dom";


function Benefit() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-bl from-red-400 to-blue-400">
      <h2 className="flex justify-center text-2xl mt-10"><strong>How Smart Interviews Benefits You</strong></h2>
        <br />
        <div className="px-10 mt-10">
      <p>
        <strong>Smart Interviews</strong> is more than just a course — 
        it’s a career-defining experience that equips students with the 
        knowledge, skills, and confidence to succeed in the toughest 
        technical interviews. Here’s how it transforms you:
      </p>
        <br />

      <ul>
        <li>
          <strong>Master Data Structures & Algorithms:</strong> Build a rock-solid
          foundation in the most important concepts tested in coding interviews.
        </li>
        <li>
          <strong>Crack Top Company Interviews:</strong> Prepare for Google,
          Amazon, Microsoft, and other product-based giants with interview-focused
          content.
        </li>
        <li>
          <strong>Hands-On Coding Practice:</strong> Solve hundreds of carefully
          curated problems designed to sharpen logical and analytical skills.
        </li>
        <li>
          <strong>Mock Interviews & Mentorship:</strong> Experience real interview
          scenarios with feedback from expert mentors.
        </li>
        <li>
          <strong>Confidence Boost:</strong> Develop the ability to solve problems
          under pressure and explain your thought process like a pro.
        </li>
        <li>
          <strong>Career Growth:</strong> Not only crack interviews but also
          prepare yourself for a long-term career as a coder, software engineer,
          or problem solver.
        </li>
        <li>
          <strong>Holistic Skill Development:</strong> Improve logical thinking,
          time management, and debugging strategies that are vital in both
          interviews and real-world projects.
        </li>
      </ul>

      <p>
        By the end of the program, students are transformed into 
        <strong> job-ready professionals</strong> who can confidently compete 
        with the best minds in the industry. With Smart Interviews, 
        you don’t just learn — you <em>evolve</em> into a world-class problem solver.
      </p>
      </div>
      <div className="flex items-center justify-center mt-10">
  <button onClick={() => navigate("/Quiz")} className="w-40 h-20 bg-white rounded-xl cursor-pointer hover:scale-105 hover:bg-gray-400 transition duration-300 text-xl font-semibold">
    Quiz Page
  </button>
</div>
    </div>
  );
}

export default Benefit;
