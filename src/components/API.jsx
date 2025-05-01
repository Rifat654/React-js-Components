import React, { useEffect, } from 'react'
// import { getPosts } from "../Data"
import Cards from './Cards'
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

        </div>
    )
}

export default API
