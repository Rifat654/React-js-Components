import { useEffect, useState } from "react"

const API = () => {

    const [user, setUser] = useState([])
    useEffect(() => {
        const Userdata = async () => {
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            console.log(data);
            setUser(data)

        }
        Userdata();
    })
    return (
        <div className="text-gray-200 h-[400px] text-center my-20 ">
            <div>
                {
                    user.map((list) => (
                        <p>{list.price}</p>
                    ))
                }
            </div>
        </div>
    )
}

export default API
