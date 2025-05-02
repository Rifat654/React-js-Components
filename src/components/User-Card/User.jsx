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
                <div className='w-[200px] h-[200px] bg-purple-800 '>
                    <h2>hello user</h2>

                </div>
            </div>
        </div>
    )
}

export default User
