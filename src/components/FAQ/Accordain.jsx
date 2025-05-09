import React, { useState } from 'react'
import { data } from '../../API/Data.js'
const Accordain = () => {
    const [open, setOpen] = useState(false)
    const Click = () => {
        setOpen(!open)
    }

    return (
        <div>
            <div className=' text-gray-200 h-[400px] text-center mt-20 '>
                <h1 className='text-3xl font-bold'>FAQ</h1>

                <div className='flex flex-col items-center justify-center px-5 mt-10'>
                    {
                        data.map((item, index) => {
                            return (
                                <div key={index} className='w-full max-w-[600px] bg-[#1F2937] rounded-lg shadow-md mb-4 p-4  flex flex-col items-center justify-between' >
                                    <div className='flex items-center justify-between w-full pb-5' >
                                        <h3>{item.question}</h3>
                                        <button onClick={Click} className=' text-2xl font-bold cursor-pointer'>{open ? <span>-</span> : <span>+</span>}</button>
                                    </div>
                                    <p> {open ? item.answer : ""}</p>
                                </div>

                            )

                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default Accordain
