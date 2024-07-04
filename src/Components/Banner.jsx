import img from '../assets/20240703_144849.png'
import { RiDownload2Fill } from 'react-icons/ri';
import { LuPhone } from 'react-icons/lu';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import MasumCv from '../assets/MasumCV.pdf'
import { NavLink } from 'react-router-dom';
const Banner = () => {
  return (
    <div className="my-10 px-4 md:px-10">
      <div className='flex flex-col-reverse md:flex-row items-center justify-center gap-5'>
        <div className='md:w-1/2 space-y-2 md:space-y-4'>
             <h3 className='md:text-2xl font-semibold text-white'>Hi, I am</h3>
             <h2 className='md:text-5xl text-2xl font-semibold'>Habibullah Mohammad Masum</h2>
             <p className='text-white'>A frontend developer and competitive programmer.</p>
             <div className='space-x-3 flex'>
                <a href={MasumCv} download={MasumCv} className='btn btn-outline flex items-center gap-1'><RiDownload2Fill className='text-xl'/> Download CV</a>
                <NavLink to={`/contact`} className='btn bg-yellow-700 text-white flex items-center gap-1'><LuPhone className='text-xl'/> Contact Me</NavLink>
             </div>
        </div>
        <div  className='md:w-1/2 flex items-center md:ml-16 relative'>
            <img className='w-[200px] md:w-[370px]' src={img} alt="" />
            <div className='absolute -right-8 md:right-10 bottom-0'>
                <div className='flex flex-col items-center space-y-3 w-[50px]'>
                    <p className="border border-yellow-700 h-16"></p>
                    <a href='https://www.facebook.com/profile.php?id=100004515194784'><FaFacebook className='text-xl text-white'/></a>
                    <a href='https://www.linkedin.com/in/habibullah-mohammad-masum-87049b1ab'><FaLinkedin className='text-xl text-white'/></a>
                    <a href='https://wa.me/01817267861'><IoLogoWhatsapp className='text-xl text-white'/></a>
                    <a href='https://github.com/Hm-masum'><FaGithub className='text-xl text-white'/></a>  
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
