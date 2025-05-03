import React, { useEffect, useState } from 'react'
import { Userdata } from '../../API/Data'
const User = () => {

    const [user, setUser] = useState([])
    useEffect(() => {
        Userdata().then((data) => {
            setUser(data)
            console.log(data);

        })
    }, [])
    return (
        <div className='flex flex-col justify-center items-center mt-10'>
            {
                user.map((item) => {
                    return (
                        <div key={item.id} className='flex flex-col justify-center items-center bg-slate-200 w-1/4 h-1/4 rounded-lg shadow-lg m-2'>
                            <h1 >{item.author}</h1>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default User
