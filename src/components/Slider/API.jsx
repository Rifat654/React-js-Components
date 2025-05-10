import { useEffect, useState } from "react"

const API = () => {

    const [user, setUser] = useState([])
    useEffect(() => {
        const Userdata = async () => {
            try {
                const res = await fetch("https://fakestoreapi.com/products")
                const data = await res.json()
                setUser(data)
                console.log(data);

            }
            catch (err) {
                console.log(err);

            }



        }
        Userdata();
    }, [])
    return (
        <div className="text-gray-200 h-[400px] text-center my-20 ">
            <div>
                {
                    user.map((list) => (
                        <p key={list.id}>{list.category}</p>
                    ))
                }
            </div>
        </div>
    )
}

export default API
