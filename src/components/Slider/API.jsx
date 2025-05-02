import React, { useEffect, } from 'react'
// import { getPosts } from "../Data"
import Cards from '../Cards'
const API = () => {



    useEffect(() => {
        const getData = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/users")
            let data = await response.json()
            console.log(data);

        }
        getData()


    }, [])
    return (
        <div>
            <div className='flex flex-col justify-center items-center h-screen bg-[#23272F]'>
                {/* slider components */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                </div>
            </div>

        </div>
    )
}

export default API
