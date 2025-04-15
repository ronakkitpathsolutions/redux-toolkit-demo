import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchComments } from "../../redux/slices/comments.slice"

const useComments = () => {

    const dispatch = useDispatch()
    const { comments } = useSelector((state) => state.comments)

    useEffect(() => {
        dispatch(fetchComments({}))
    }, [dispatch])

  return { comments }
}

export default useComments