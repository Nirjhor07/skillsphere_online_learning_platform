import Link from "next/link";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaEnvelopeCircleCheck } from "react-icons/fa6";

const InstructorPage = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-violet-50 via-blue-50 to-white flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        {/* Icon */}
        <div className="flex justify-center mb-8">
          <div className="bg-linear-to-b from-violet-600 to-blue-600 p-6 rounded-full">
            <FaChalkboardTeacher size={80} className="text-white" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
          Under Construction
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-gray-600 mb-8">
          The Instructor Page is currently being built. Were working hard to
          create an amazing experience for educators.
        </p>

        {/* Description */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8 border-l-4 border-violet-600">
          <p className="text-gray-700 leading-relaxed mb-4">
            This page will feature instructor dashboards, course management
            tools, and resources to help educators create and manage their
            courses effectively.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Check back soon for updates!
          </p>
        </div>

        {/* Back Link */}
        <div className="mt-8">
          <Link
            href="/"
            className="text-violet-600 font-semibold hover:text-violet-700 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InstructorPage;
