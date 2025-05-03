import React, { useEffect, useState } from 'react'

const User = () => {

    const [user, setUser] = useState([])
    useEffect(() => {
        fetch("https://randomuser.me/api")
            .then((res) => res.json())
            .then((data) => {
                setUser(data.results)
                console.log(data.results);

            })
    }, [])

    return (
        <div className='flex flex-col justify-center items-center mt-10'>
            {
                user.map((item) => {
                    return (
                        <div key={item.login.uuid} className='flex flex-col justify-center items-center bg-slate-200 rounded-lg p-5 m-2  '>
                            <img className='rounded-full' src={item.picture.medium} alt="" />
                            <div className='flex gap-2 text-green-700'>
                                <span className='text-black'>Name:</span>
                                <h1> {item.name.first}</h1>
                                <h1>{item.name.last}</h1>
                            </div>
                            <p>Phone: <span>{item.phone}</span></p>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default User
