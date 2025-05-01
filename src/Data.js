export const getPosts = async () =>{
   const response = await fetch("https://jsonplaceholder.typicode.com/users", {

     method:"get",
   })
   return await response.json()

}
