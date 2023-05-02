import {useQuery,useMutation,useQueryClient} from '@tanstack/react-query'
import { deleteUser, getUsers } from '../../api/API'



function Users() {
    const queryclient=useQueryClient()
    const {isLoading,data:users,isError,error}=useQuery({
        queryKey:['Users'],
        queryFn:getUsers,
        select:data => data.sort((a,b)=> b.id -a.id)
    })


    const delteUserMutation=useMutation({
        mutationFn:deleteUser,
        onSuccess:()=>{
            queryclient.invalidateQueries('Users')
 
        }
    })

    if (isLoading) {
        return <div>Loading...</div>
    }else if(isError){
        return <div>Error: {error.message}</div>
    }
    console.log('refres');
    return(
        <>
        {users.map(user=>{
            return (
                <div key={user.id}>
                    <h3>{user.username}</h3>
                    <p>{user.password}</p>
                    <p>{user.createAt}</p>
                    <button onClick={()=>delteUserMutation.mutate(user.id)}>Delete</button>
                    <button>Update</button>
                    <hr />
                </div>
               
            )
        })}
        </>
    )
}


export default Users