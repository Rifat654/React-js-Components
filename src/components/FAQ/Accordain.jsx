// import React, { useState } from 'react'
import { data } from '../../API/Data.js'
const Accordain = () => {


    // const [open, setOpen] = useState(null)
    return (
        <div>
            <div className=' text-white h-[400px] text-center mt-20 '>
                <h1 className='text-3xl font-bold'>FAQ</h1>

                <div className='flex flex-col items-center justify-center px-5 mt-10'>
                    {
                        data.map((item) => (
                            <div className='w-full mx-5 sm:mx-0 sm:w-[550px]  bg-purple-900 flex items-center justify-between p-4 rounded-lg mb-4' key={item.id}>
                                <p key={item.id} >{item.question}</p>
                                <span className='cursor-pointer text-2xl font-bold'>+</span>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default Accordain
