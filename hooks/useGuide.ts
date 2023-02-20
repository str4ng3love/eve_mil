
import useSWR from 'swr'
import { fetcher } from '../lib/fetcher'


interface GuideData  {
    id:string,
    title:string,
    category:string,
    content:{
        objects: {
            [key:string]:{
                
            }
        }
    },
    description:string,
    language: string,
    
}

export default function useGuide(id:string) {
    const {data, error, isLoading} = useSWR<GuideData>(`/api/guides/get_guide/?id=${id}`, fetcher)
    
    return {
        guide: data,
        isLoading,
        isError: error
    }
}