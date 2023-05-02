import { createUser } from "../../api/API"
import {useMutation,useQueryClient} from '@tanstack/react-query'

function UserForm() {
    const queryClient=useQueryClient()
    const newUserMutation=useMutation({
        mutationFn:createUser,
        onSuccess:()=>{
            console.log('User sucess')
            queryClient.invalidateQueries('Users')
        }
    })

    const handlesubmit=(e)=>{
        e.preventDefault()
       const formdata= new FormData(e.target)
       const user=Object.fromEntries(formdata)
       newUserMutation.mutate(user)

       
    }
    console.log('refres');
    return(
        <>
        <form onSubmit={handlesubmit} >
        <label htmlFor="username">Name:</label><br />
        <input type="text" id="username" name="username"/>
        <br />
        <label htmlFor="password">Password:</label><br />
        <input type="text" id="password" name="password"/>
        <br />
        <br />
        <button>Add User</button>
        </form>
        </>
    )


}


export default UserForm