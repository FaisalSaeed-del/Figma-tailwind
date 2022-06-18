import React from 'react';
import img2 from "../assests/R1.png";
import img3 from "../assests/R2.png";
import img4 from "../assests/R3.png";
import img5 from "../assests/R4.png";
import img6 from "..//assests/E1.png";
import img7 from "..//assests/E2.png";
import img8 from "..//assests/E3.png";
import img9 from "..//assests/E4.png";
import img10 from "..//assests/E5.png";
import img11 from "../assests/Button.png"

const Hero = () => {
    return (
        <div className='flex px-48'>
            <div className='px-10 py-8 '>
                <img className='w-[50px]' src={img2} />
                <img className='w-[50px] mt-5' src={img3} />
                <img className='w-[50px] mt-5' src={img4} />
                <img className='w-[50px] mt-5' src={img5} />
            </div>

            <div className='flex w-full'>
                <img className='w-[270px] mt-5' src={img2} />
                <img src={img6} className='w-[24px] h-[24px] mt-10 mx-10 ' />
                <span className='text-white font-mono space-[-0.03em ] mx-[-20px]  font-bold  mt-9 '>CLEAR EYES </span>
                <div>
                    <h1 className='text-white mt-20 mx-[-120px] text-[50px] font-Montserrat font-bold space-[-0.03em]'>All In Time</h1>
                    <p className='text-neutral-500 mx-[-120px] font-serif'>Wavepoint Drop 001</p>
                </div>
                <div className='text-neutral-500 flex font-mono text-[12px]  mt-[200px] mx-[-130px]'>
                    <p>Co-Host</p>
                    <p className='px-14'>Motion Art</p>
                </div>
                <div className=' px-3  mt-[240px] flex text-white font-mono mx-[-110px]'>
                    <img className='w-[24px] h-[24px]' src={img7} />
                    <span className='mx-2'>@trexx</span>
                    <img className='w-[24px] h-[24px] ml-5' src={img8} />
                    <span className='mx-2'>@unknown</span>
                    <img className='w-[24px] h-[24px] ml-5' src={img9} />
                    <span className='mx-2'>@pureonce</span>
                    <img className='w-[24px] h-[24px] ml-5' src={img10} />
                    <span className='mx-2'>@lovesick</span>
                </div>
                </div>
            
        </div>
    )
}

export default Hero