
import useSWR from 'swr'
import { fetcher } from '../lib/fetcher'


export interface CommentData  {
    id:string,
    message:string,
    createdAt: number,
    _count:{
        like: number,
        dislikes: number;
        children: number
    }
}

export default function useUserGuides() {
    const {data, error, isLoading, mutate, isValidating} = useSWR<CommentData[]>(`/api/comments/get_user_comments`, fetcher, {revalidateOnFocus:true, revalidateOnReconnect:true})

    return {
        comments: data,
        isLoading,
        isError: error,
        mutate,
        isValidating,
    }
}