import { CiLocationOn } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";

const Education = () => {
  return (
    <div>
      <h2 className='text-2xl md:text-4xl font-semibold text-center my-10'>Education</h2>
      <div className="flex gap-5 md:ml-48">
         <div className="flex flex-col items-center mt-3"> 
            <p className="h-3 w-3 rounded-full bg-yellow-700"></p>      
            <p className="border-l border-yellow-700 h-32"></p>
            <p className="h-3 w-3 rounded-full bg-yellow-700"></p>
            <p className="border-l border-yellow-700 h-32"></p>
            <p className="h-3 w-3 rounded-full bg-yellow-700"></p>
         </div>
          <div className="">
            <div className="space-y-6">
             <div className="space-y-1 text-white">
               <h2 className="text-2xl font-semibold">Studied B.Sc (Engg.) in CSE</h2>
               <p>International Islamic University Chittagong.</p>
               <p className="flex items-center gap-1"><CiLocationOn className="text-xl"/>Chattogram, Bangladesh</p>
               <p>Current Semester : 5rd</p>
             </div>

             <div className="space-y-1 text-white">
               <h2 className="text-2xl font-semibold">Higher Secondary School Certificate (Science)</h2>
               <p>Baitush Sharaf Adarsha Kamil Madrasha</p>
               <p className="flex items-center gap-1"><CiLocationOn className="text-xl" />Chattogram, Bangladesh</p>
               <p className="flex items-center gap-2"><SlCalender />2019 - 2020</p>
             </div>
              
             <div className="space-y-1 text-white">
                <h2 className="text-2xl font-semibold">Secondary School Certificate (Science)</h2>
                <p>Adhunagar Aktaria Dakhil Madrasah</p>
                <p className="flex items-center gap-1"><CiLocationOn className="text-xl" />Chattogram, Bangladesh</p>
                <p className="flex items-center gap-2"><SlCalender />2017 - 2018</p>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Education;
