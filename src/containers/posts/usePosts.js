import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchPosts } from "../../redux/slices/posts.slice"

const usePosts = () => {

    const dispatch = useDispatch()
    const { posts } = useSelector((state) => state.posts)

    useEffect(() => {
        dispatch(fetchPosts({}))
    }, [dispatch])

  return { posts }
}

export default usePosts