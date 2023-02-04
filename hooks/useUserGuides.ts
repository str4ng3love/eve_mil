
import useSWR from 'swr'
import { fetcher } from '../lib/fetcher'


interface GuideData  {
    id:string,
    title:string,
    _count:{
        likes:number,
        dislikes: number;
        comments: number
    }
}

export default function useUserGuides() {
    const {data, error, isLoading} = useSWR<GuideData[]>(`/api/guides/get_user_guides`, fetcher)

    return {
        guides: data,
        isLoading,
        isError: error
    }
}