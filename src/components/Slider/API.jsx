import { useEffect, useState } from "react"

const API = () => {

    const [user, setUser] = useState([])
    useEffect(() => {
        const Userdata = async () => {
            fetch("https://fakestoreapi.com/products")
                .then((res) => res.json())
                .then((json) => setUser(json))
                .catch((err) => console.log(err)
                )

        }
        Userdata();
    }, [])
    return (
        <div className="text-gray-200 h-[400px] text-center my-20 ">
            <div>
                {
                    user.map((list, index) => (
                        <p key={index[0]}>{list.category}</p>
                    ))
                }
            </div>
        </div>
    )
}

export default API
