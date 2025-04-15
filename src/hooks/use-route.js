import { useMemo } from "react"
import { URLS } from "../constant/urls"
import Users from "../containers/users"
import Posts from "../containers/posts"
import Comments from "../containers/comments"

const useRoutes = () => {

    const allRoutes = useMemo(() => [
        {
            id: 'users',
            path: '/',
            element: Users
        },
        {
            id: 'users',
            path: URLS.USERS,
            element: Users
        },
        {
            id: 'posts',
            path: URLS.POSTS,
            element: Posts
        },
        {
            id: 'comments',
            path: URLS.COMMENTS,
            element: Comments
        }
    ], [])

    

  return { allRoutes }
}

export default useRoutes