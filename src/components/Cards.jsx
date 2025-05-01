import React from 'react'

const Cards = (props) => {
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div className='text-green-700 font-bold text-lg text-center bg-slate-200 p-5 m-5 rounded-lg shadow-lg w-52'>
                <h1>{props.name} </h1>
                <h2>{props.email}</h2>
                <h2>{props.phone}</h2>

            </div>
        </div>
    )
}

export default Cards


