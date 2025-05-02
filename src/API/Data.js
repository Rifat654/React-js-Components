export const Userdata = async () =>{
    const response = await fetch("https://randomuser.me/api/")
    return (
        response.json()

    )
}