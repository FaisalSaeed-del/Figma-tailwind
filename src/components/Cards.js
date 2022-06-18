import React from 'react'
import card1 from "../assests/c1.png";
import card2 from "../assests/c2.png";
import card3 from "../assests/c3.png";
import divider from "../assests/d1.png"
const Cards = () => {
    return (
        <div className='ml-[280px] py-6 flex grid-cols-3 gap-4'>
            <div>

                <div>
                    <div class="group relative">
                        <div>
                            <img className='w-[265px] rounded-3xl h-[300px]' src={card1} />
                        </div>
                        <div>
                            <p class="text-sm mt-4 font-medium text-stone-400">4d 4h 35min</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>

                <div className='mx-[20px]'>
                    <div class="group relative">
                        <div>
                            <img className='w-[265px] rounded-3xl h-[300px]' src={card2} />
                        </div>
                        <div>
                            <p class="text-sm mt-4 font-medium text-stone-400">4d 4h 35min</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>

                <div className='mx-[20px]'>
                    <div class="group relative">
                        <div>
                            <img className='w-[265px] rounded-3xl h-[300px]' src={card3} />
                        </div>
                        <div>
                            <p class="text-sm mt-4 font-medium text-stone-400">4d 4h 35min</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>

    );
}

export default Cards