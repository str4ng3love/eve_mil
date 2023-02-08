
import useSWR from 'swr'
import { fetcher } from '../lib/fetcher'


interface CommentData  {
    id:string,
    message:string,
    createdAt: number,
    _count:{
        likes:number,
        dislikes: number;
        children: number
    }
}

export default function useUserGuides() {
    const {data, error, isLoading} = useSWR<CommentData[]>(`/api/comments/get_user_comments`, fetcher)

    return {
        comments: data,
        isLoading,
        isError: error
    }
}