import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <StudentForm />
      </div>
    </div>
  );
};

export default Home;
