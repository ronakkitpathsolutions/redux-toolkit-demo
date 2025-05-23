import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers } from "../../redux/slices/users.slice"

const useUsers = () => {

    const dispatch = useDispatch()
    const users = useSelector((store) => store.users.users)

    useEffect(() => {
        dispatch(fetchUsers({}))
    }, [dispatch])

    return { users }
}

export default useUsers