import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
      
        <div className="flex items-center">
         <Image src='/nitlogo.png' width={50} height={50} alt="logo" className="m-1 bg-white rounded-2xl "/>
          <h1 className="text-2xl font-bold p-1">Student Portal</h1>
        </div>

  
        <div className="flex space-x-4">
          <Link href="/" className="hover:text-yellow-300">
            Student Form
          </Link>
          <Link href="/students" className="hover:text-yellow-300">
            Result
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
