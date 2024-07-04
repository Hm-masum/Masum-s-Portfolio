import cLang from '../assets/C lang.png'
import cPlus from '../assets/C++.png'
 import Css from '../assets/CSS.png'
import firebase from '../assets/firebase.png'
import HTML from '../assets/HTML.png'
import js from '../assets/Js.png'
import Mongodb from '../assets/Mongodb.png'
import Node from '../assets/Node.png'
import React from '../assets/React.png'

const Skills = () => {
    return (
        <div className='my-16 space-y-6'>
            <h2 className='text-2xl md:text-4xl font-semibold text-center my-10'>My Skills</h2>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                <div className='bg-zinc-900 py-8 rounded-xl flex flex-col items-center justify-center space-y-3'>
                    <img className='w-[80px]' src={HTML} alt="" />
                    <p className='font-semibold text-white'>HTML</p>
                </div>  
                <div className='bg-zinc-900 py-8 rounded-xl flex flex-col items-center justify-center space-y-3'>
                    <img className='w-[75px]' src={Css} alt="" />
                    <p className='font-semibold text-white'>CSS</p>
                </div>  
                <div className='bg-zinc-900 py-8 rounded-xl flex flex-col items-center justify-center space-y-3'>
                    <img className='w-[75px]' src={js} alt="" />
                    <p className='font-semibold text-white'>JavaScript</p>
                </div>  
                <div className='bg-zinc-900 py-8 rounded-xl flex flex-col items-center justify-center space-y-3'>
                    <img className='w-[75px]' src={React} alt="" />
                    <p className='font-semibold text-white'>React</p>
                </div>  

            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto md:w-3/4'>  
                <div className='bg-zinc-900 py-8 rounded-xl flex flex-col items-center justify-center space-y-3'>
                    <img className='w-[80px]' src={firebase} alt="" />
                    <p className='font-semibold text-white'>Firebase</p>
                </div>  
                <div className='bg-zinc-900 py-8 rounded-xl flex flex-col items-center justify-center space-y-3'>
                    <img className='w-[80px]' src={Mongodb} alt="" />
                    <p className='font-semibold text-white'>Mongodb</p>
                </div>  
                <div className='bg-zinc-900 py-8 rounded-xl flex flex-col items-center justify-center space-y-3'>
                    <img className='w-[80px]' src={Node} alt="" />
                    <p className='font-semibold text-white'>Node.js</p>
                </div>  

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto md:w-1/2'> 
                <div className='bg-zinc-900 py-8 rounded-xl flex flex-col items-center justify-center space-y-3'>
                    <img className='w-[80px]' src={cLang} alt="" />
                    <p className='font-semibold text-white'>C programming</p>
                </div>  
                <div className='bg-zinc-900 py-8 rounded-xl flex flex-col items-center justify-center space-y-3'>
                    <img className='w-[80px] ' src={cPlus} alt="" />
                    <p className='font-semibold text-white'>C++</p>
                </div>  

            </div>
        </div>
    );
};

export default Skills;