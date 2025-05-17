import { LuEyeClosed } from "react-icons/lu";
import { MdRemoveRedEye } from "react-icons/md";
import { useState } from "react"
import { data } from "../../API/Data"

const FAQ = () => {

    const [show, setShow] = useState(false)

    const handleClick = (getid) => {

        setShow(getid === show ? null : getid)
        console.log(getid);

    }
    return (
        <div className="w-full sm: h-[800px] flex flex-col items-center justify-center px-5 ">
            {
                data.map((item) => {
                    return (
                        <div className=" w-full sm:w-[500px] rounded-2xl bg-purple-950 text-white p-5 my-4">
                            <div onClick={() => handleClick(item.id)} className="flex items-center justify-between">
                                <h2 className="text-xl ">{item.question}</h2>
                                <span>{show === item.id ? <MdRemoveRedEye /> : <LuEyeClosed />}</span>
                            </div>

                            {
                                show === item.id ?
                                    <p className="text-[14px] text-slate-400">{item.answer}</p>
                                    : null
                            }
                        </div>
                    )
                })
            }


        </div>
    )
}

export default FAQ
