import { fetchTeacher } from "@/lib/fetchFunc";
import InstructorCard from "./InstructorCard";

const TopInstructor = async () => {
  const instructors = await fetchTeacher();
  //   const instructors = [
  //     {
  //       id: 1,
  //       name: "Sarah Johnson",
  //       specialty: "Web Development",
  //       image:
  //         "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop",
  //       rating: 4.9,
  //       students: 2500,
  //     },
  //     {
  //       id: 2,
  //       name: "David Chen",
  //       specialty: "UI/UX Design",
  //       image:
  //         "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
  //       rating: 4.8,
  //       students: 1800,
  //     },
  //     {
  //       id: 3,
  //       name: "Emily Rodriguez",
  //       specialty: "Full Stack Development",
  //       image:
  //         "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
  //       rating: 4.9,
  //       students: 3200,
  //     },
  //   ];

  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Top <span className="text-primary">Instructors</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Learn from the best instructors in the industry with proven
            expertise and track records
          </p>
        </div>

        {/* Instructors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {instructors.map((instructor, index) => (
            <InstructorCard
              key={instructor.id}
              instructor={instructor}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopInstructor;
