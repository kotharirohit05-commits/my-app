
import { useNavigate } from "react-router-dom";


function Bzfac() {
    const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-bl from bg-red-400 to-blue-400">

      <h2 className="flex justify-center text-2xl mt-10"><strong>Mr. Virat Kohli</strong></h2>
      <br />
      <div className="px-10 mt-10">
      <p>
        Mr. Virat Kohli is a highly acclaimed educator and one of the
        most admired mentors in the field of technical interview preparation.
        Currently leading <strong>Smart Interviews</strong>, he has helped
        thousands of students strengthen their problem-solving ability and
        crack top-tier companies like Google, Amazon, Microsoft, and Adobe.
      </p>
      <br />

      <p>
        Known for his <strong>crystal-clear explanations</strong> and
        <strong> structured approach</strong>, Mr. Singh has a unique way of
        breaking down complex algorithms and data structures into simple,
        digestible steps. His teaching style not only makes concepts easy to
        understand but also ensures that students can apply them efficiently
        under pressure.
      </p>
      <br />

      <p>
        Beyond Smart Interviews, Mr. Singh shares his expertise with
        <strong> 6 different colleges across India</strong>, impacting
        hundreds of aspiring engineers every semester. His ability to connect
        with students from diverse backgrounds makes his sessions both
        inclusive and empowering.
      </p>
      <br />

      <p>
        With years of experience in guiding students, he has built a reputation
        for being <strong>approachable, motivating, and highly effective</strong>.
        Many of his students have gone on to excel in global coding competitions,
        competitive exams, and top placements, crediting his mentorship as a
        major factor in their journey.
      </p>
      <br />

      <p>
        Mr. Virat Kohli is not just a teacher — he is a mentor, a guide,
        and a constant source of inspiration for anyone who dreams of becoming
        a successful coder, problem solver, or software engineer.
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

export default Bzfac;
