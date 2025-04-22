import { useMemo } from "react"
import { URLS } from "../constant/urls"
import Users from "../containers/users"
import Posts from "../containers/posts"
import Comments from "../containers/comments"
import Login from "../containers/auth/login"

const useRoutes = () => {

    const allRoutes = useMemo(() => [
        {
            id: 'root',
            path: URLS.INITIAL,
            element: Login,
            isAuth: true
        },
        {
            id: 'login',
            path: URLS.LOGIN,
            element: Login,
            isAuth: true
        },
        {
            id: 'users',
            path: URLS.USERS,
            element: Users,
            isPrivate: true
        },
        {
            id: 'posts',
            path: URLS.POSTS,
            element: Posts,
            isPrivate: true
        },
        {
            id: 'comments',
            path: URLS.COMMENTS,
            element: Comments,
            isPrivate: true
        }
    ], [])

    const authRoutes = useMemo(() => allRoutes.filter(route => route.isAuth), [allRoutes])
    const privateRoutes = useMemo(() => allRoutes.filter(route => route.isPrivate), [allRoutes])

    return { allRoutes, authRoutes, privateRoutes }
}

export default useRoutes