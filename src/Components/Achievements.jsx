import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import cp from '../assets/cp.jpg'
import bahubrihi from '../assets/bahubrihi.jpg'

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { LiaCertificateSolid } from "react-icons/lia";
import { FaCode } from "react-icons/fa";

const Achievements = () => {
  return (
    <div className="my-6 md:my-16">
      <h2 className='text-2xl md:text-4xl font-semibold text-center my-10'>Showcase</h2>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                <div><img className="h-[250px] md:h-[280px] w-[380px] rounded-xl" src={"https://i.ibb.co/SQ3jCfL/pgHero.jpg"} alt="" /></div>
                <div className="text-white space-y-2">
                    <h2 className="text-2xl font-semibold">Certificate from Programming Hero.</h2>
                    <h2 className="flex items-center gap-2"><LiaCertificateSolid className="text-2xl font-semibold text-yellow-600"/>Complete Web Development Course With Jhankar Mahbub.</h2>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                <div><img className="h-[250px] md:h-[280px] w-[380px] rounded-xl" src={cp} alt="" /></div>
                <div className="text-white space-y-2">
                    <h2 className="text-2xl font-semibold">Certificate from IIUC.</h2>
                    <h2 className="flex items-center gap-2"><LiaCertificateSolid className="text-2xl font-semibold text-yellow-600"/>Competitive Programming Bootcamp (Newcomer) Spring 2023.</h2>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                <div><img className="h-[250px] md:h-[280px] w-[380px] rounded-xl" src={"https://i.ibb.co/9WJHbgV/Why-Should-You-Do-Competitive-Programming.png"} alt="" /></div>
                <div className="text-white space-y-2">
                    <h2 className="text-2xl font-semibold">Problem Solving.</h2>
                    <h2 className="flex items-center gap-2"><FaCode className="text-2xl font-semibold text-yellow-600"/>Codeforces : 350+ problems.</h2>
                    <h2 className="flex items-center gap-2"><FaCode className="text-2xl font-semibold text-yellow-600"/>BeeCrowd : 50+ problems.</h2>
                    <h2 className="flex items-center gap-2"><FaCode className="text-2xl font-semibold text-yellow-600"/>Others Online Judge : 50+ problems.</h2>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                <div><img className="h-[250px] md:h-[280px] w-[380px] rounded-xl" src={bahubrihi} alt="" /></div>
                <div className="text-white space-y-2">
                    <h2 className="text-2xl font-semibold">Certificate from Bahubrihi.</h2>
                    <h2 className="flex items-center gap-2"><LiaCertificateSolid className="text-2xl font-semibold text-yellow-600"/>HTML, CSS3 & Bootstrap 4 For Web Development.</h2>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Achievements;
