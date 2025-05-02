import React, { useEffect, useState } from 'react'

const Jokes = () => {
    const [jokes, setJokes] = useState([])

    const getData = async () => {
        const response = await fetch("https://api.chucknorris.io/jokes/random")
        const data = await response.json()
        setJokes(data)
    }
    useEffect(() => {
        getData()
    }, [])

    return (
        <div className='w-full h-screen flex justify-center items-center bg-[#23272F]'>
            <div className='sm:w-[450px] w-full sm:mx-0 mx-5 h-auto sm:h-[250px] bg-green-800 hover:shadow-slate-500 hover:shadow-md transition ease-in-out duration-300 text-white  rounded-lg flex flex-col justify-between items-center p-5'>
                <h1 className='text-2xl mb-3 sm:mb-0 sm:text-4xl'>Random Jokes Hub</h1>
                <p className='text-gray-300 text-center font-semibold transition-all duration-500 my-3 sm:my-0'> {jokes.value}</p>
                <button onClick={getData} className='py-1 px-5 rounded-md bg-[#23272F] text-[#58C4DC] cursor-pointer'>Generate Jokes</button>
            </div>
        </div>
    )
}

export default Jokes
