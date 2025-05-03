import React, { useEffect } from 'react'
import { Userdata } from '../../API/Data'
const User = () => {

    useEffect(() => {
        Userdata().then((data) => {
            console.log(data);

        })
    }, [])
    return (
        <div className='flex flex-col justify-center items-center mt-10'>
            <div>
                <h1 className='text-2xl text-center font-bold'>User Card</h1>
                <div className='w-[300px] h-[250px] rounded-lg  bg-gray-400 shadow-lg flex flex-col justify-center items-center mt-5'>
                    <img src="" alt="" />
                    <h1 className='text-xl font-bold'>Name</h1>

                </div>
            </div>
        </div>
    )
}

export default User
